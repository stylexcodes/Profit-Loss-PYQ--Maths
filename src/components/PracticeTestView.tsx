import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Question } from '../types';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Timer,
  Volume2,
  VolumeX,
  RotateCcw,
  Flag,
  Award,
  Star,
  Check,
  Zap,
  HelpCircle,
  BarChart3,
  Filter,
  Flame,
} from 'lucide-react';
import { playCorrectSound, playIncorrectSound, isSoundEnabled, setSoundEnabled } from '../utils/audioFeedback';

interface Props {
  questions: Question[];
  initialTopicId?: string;
  topicSections: Array<{ id: string; title: string; count: number; range: string }>;
  onExit: () => void;
  bookmarkedIds: number[];
  onToggleBookmark: (id: number) => void;
}

interface UserAnswer {
  questionId: number;
  selectedOption: 'a' | 'b' | 'c' | 'd';
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export const PracticeTestView: React.FC<Props> = ({
  questions,
  initialTopicId = 'all',
  topicSections,
  onExit,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(initialTopicId);
  const [soundOn, setSoundOn] = useState<boolean>(isSoundEnabled());
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswer>>({});
  const [markedForReview, setMarkedForReview] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [showScorecard, setShowScorecard] = useState<boolean>(false);
  const [showSolutionNote, setShowSolutionNote] = useState<boolean>(true);
  const [paletteFilter, setPaletteFilter] = useState<'all' | 'unanswered' | 'answered' | 'review'>('all');

  // Filter test questions by topic if selected
  const activeQuestions = useMemo(() => {
    if (!selectedTopic || selectedTopic === 'all') return questions;
    const topic = topicSections.find((t) => t.id === selectedTopic);
    if (!topic) return questions;
    const match = topic.range.match(/Q(\d+)\s*-\s*Q(\d+)/);
    if (!match) return questions;
    const start = parseInt(match[1], 10);
    const end = parseInt(match[2], 10);
    const filtered = questions.filter((q) => q.id >= start && q.id <= end);
    return filtered.length > 0 ? filtered : questions;
  }, [questions, selectedTopic, topicSections]);

  // Ensure currentIndex stays within bounds if topic changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedTopic]);

  const currentQuestion = activeQuestions[currentIndex] || activeQuestions[0] || questions[0];

  // Stopwatch timer
  useEffect(() => {
    if (!isTimerRunning || showScorecard) return;
    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, showScorecard]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Sound toggle handler
  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
  };

  // Answer selection handler with visual and audio feedback
  const handleSelectOption = (optionKey: 'a' | 'b' | 'c' | 'd') => {
    if (!currentQuestion) return;

    // Determine correctness safely using either correctAnswer or answer
    const correctOpt = currentQuestion.correctAnswer || currentQuestion.answer || '';
    const isCorrect = Boolean(correctOpt && correctOpt.toLowerCase() === optionKey.toLowerCase());

    // Trigger audio feedback
    if (isCorrect) {
      playCorrectSound();
    } else {
      playIncorrectSound();
    }

    // Save answer state
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        selectedOption: optionKey,
        isCorrect,
        timeSpentSeconds: (prev[currentQuestion.id]?.timeSpentSeconds || 0) + 1,
      },
    }));
  };

  const handleToggleReview = (qId: number) => {
    setMarkedForReview((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const handleClearAnswer = (qId: number) => {
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
  };

  // Metrics
  const totalQuestions = activeQuestions.length;
  const answeredCount = Object.keys(userAnswers).filter((k) =>
    activeQuestions.some((q) => q.id === Number(k))
  ).length;
  const correctCount = (Object.values(userAnswers) as UserAnswer[]).filter(
    (a) => a.isCorrect && activeQuestions.some((q) => q.id === a.questionId)
  ).length;
  const incorrectCount = answeredCount - correctCount;
  const accuracyPercent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (showScorecard) return;

      if (e.key === 'ArrowRight' || e.key === 'n' || e.key === 'N') {
        if (currentIndex < totalQuestions - 1) setCurrentIndex((i) => i + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'p' || e.key === 'P') {
        if (currentIndex > 0) setCurrentIndex((i) => i - 1);
      } else if (e.key === '1' || e.key === 'a' || e.key === 'A') {
        handleSelectOption('a');
      } else if (e.key === '2' || e.key === 'b' || e.key === 'B') {
        handleSelectOption('b');
      } else if (e.key === '3' || e.key === 'c' || e.key === 'C') {
        handleSelectOption('c');
      } else if (e.key === '4' || e.key === 'd' || e.key === 'D') {
        handleSelectOption('d');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalQuestions, currentQuestion, showScorecard]);

  // Current question answer state
  const currentAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
  const isBookmarked = currentQuestion ? bookmarkedIds.includes(currentQuestion.id) : false;
  const isReviewed = currentQuestion ? markedForReview.includes(currentQuestion.id) : false;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Test Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-3 sm:px-6 py-2.5 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Exit button & Test Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={onExit}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer shadow-xs active:scale-95"
              title="Return to PDF Document Studio"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Exit to PDF Studio</span>
              <span className="sm:hidden">Exit</span>
            </button>

            <div className="h-4 w-px bg-slate-700 hidden sm:block" />

            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <h1 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  Maths PYQ Practice Quiz
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Level - I
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-hindi truncate max-w-xs sm:max-w-sm">
                लाभ एवं हानि • अभिषेक उपाध्याय सर
              </p>
            </div>
          </div>

          {/* Center: Live Stats Pill */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs bg-slate-950/70 border border-slate-800 px-3 py-1.5 rounded-xl">
            {/* Stopwatch */}
            <div className="flex items-center gap-1 text-slate-300 font-mono text-xs">
              <Timer className="w-3.5 h-3.5 text-amber-400" />
              <span>{formatTime(elapsedSeconds)}</span>
            </div>

            <div className="h-3 w-px bg-slate-800" />

            {/* Score pill */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">Score:</span>
              <span className="font-bold text-emerald-400 font-mono">+{correctCount}</span>
              {incorrectCount > 0 && (
                <span className="font-bold text-rose-400 font-mono">-{incorrectCount}</span>
              )}
            </div>

            <div className="h-3 w-px bg-slate-800 hidden sm:block" />

            {/* Accuracy */}
            <div className="hidden sm:flex items-center gap-1 text-slate-400">
              <span>Acc:</span>
              <span className="font-bold text-amber-300 font-mono">{accuracyPercent}%</span>
            </div>
          </div>

          {/* Right: Sound toggle & Finish Test */}
          <div className="flex items-center gap-2">
            {/* Audio Feedback Toggle */}
            <button
              onClick={handleToggleSound}
              className={`p-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                soundOn
                  ? 'bg-amber-400/15 text-amber-300 border-amber-400/40 hover:bg-amber-400/25'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
              title={soundOn ? 'Sound feedback ON (Click to mute)' : 'Sound feedback MUTED (Click to unmute)'}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Finish Test Button */}
            <button
              onClick={() => setShowScorecard(true)}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-900/30 cursor-pointer active:scale-95"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Finish Test</span>
            </button>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left 8 Cols: Active Question Testing Arena */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          {/* Topic Selector Filter Row */}
          <div className="bg-slate-900 border border-slate-800/80 rounded-xl p-2.5 flex items-center justify-between gap-2 overflow-x-auto text-xs">
            <div className="flex items-center gap-1.5 text-slate-400 shrink-0 font-semibold text-[11px] uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Test Scope:</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
              <button
                onClick={() => setSelectedTopic('all')}
                className={`px-2.5 py-1 rounded-md shrink-0 text-xs font-medium transition-all ${
                  selectedTopic === 'all'
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                All Topics ({questions.length})
              </button>
              {topicSections.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTopic(t.id)}
                  className={`px-2 py-1 rounded-md shrink-0 text-xs font-medium transition-all truncate max-w-[170px] ${
                    selectedTopic === t.id
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                  title={`${t.title} (${t.count})`}
                >
                  {(t as any).typeLabel || t.title.split(':')[0].trim()} ({t.count})
                </button>
              ))}
            </div>
          </div>

          {/* Active Question Card */}
          {currentQuestion && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl flex-1 flex flex-col justify-between">
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800/80 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-amber-400 text-slate-950 shadow-xs">
                      Q.{currentQuestion.id}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {currentQuestion.type}
                    </span>
                    <span className="text-xs font-bold text-amber-300/90 font-hindi">
                      {currentQuestion.category || currentQuestion.typeNameHi}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Exam badge */}
                    {currentQuestion.exam && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/80">
                        {currentQuestion.exam}
                      </span>
                    )}

                    {/* Bookmark toggle */}
                    <button
                      onClick={() => onToggleBookmark(currentQuestion.id)}
                      className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                        isBookmarked
                          ? 'bg-amber-400 text-slate-950 border-amber-300'
                          : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                      }`}
                      title={isBookmarked ? 'Starred' : 'Star this question'}
                    >
                      <Star className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-slate-950' : ''}`} />
                    </button>

                    {/* Review flag */}
                    <button
                      onClick={() => handleToggleReview(currentQuestion.id)}
                      className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                        isReviewed
                          ? 'bg-purple-600 text-white border-purple-500'
                          : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                      }`}
                      title={isReviewed ? 'Marked for Review' : 'Mark for Review'}
                    >
                      <Flag className={`w-3.5 h-3.5 ${isReviewed ? 'fill-white' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <div className="space-y-3 mb-6">
                  <div className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium">
                    {currentQuestion.en}
                  </div>
                  <div className="text-slate-300 text-sm sm:text-base leading-relaxed font-hindi border-l-2 border-amber-400/50 pl-3">
                    {currentQuestion.hi}
                  </div>
                </div>

                {/* Option Choices Grid with Audio & Visual Feedback */}
                <div className="space-y-3 mb-6">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = currentAnswer?.selectedOption === opt.label;
                    const correctOpt = currentQuestion.correctAnswer || currentQuestion.answer || '';
                    const isActualAnswer = Boolean(correctOpt && correctOpt.toLowerCase() === opt.label.toLowerCase());

                    // Determine visual feedback state
                    let optionStyle = 'bg-slate-800/80 border-slate-700 hover:bg-slate-800 text-slate-200';
                    let badgeStyle = 'bg-slate-700 text-slate-300';
                    let visualEffectClass = '';

                    if (currentAnswer) {
                      if (isSelected && currentAnswer.isCorrect) {
                        // Correct selection: Clear distinct success effect
                        optionStyle = 'bg-emerald-950/70 border-emerald-500 text-emerald-100 ring-2 ring-emerald-400/80 shadow-lg shadow-emerald-950/50';
                        badgeStyle = 'bg-emerald-500 text-slate-950 font-bold';
                        visualEffectClass = 'animate-pop-success';
                      } else if (isSelected && !currentAnswer.isCorrect) {
                        // Incorrect selection: Soft, subtle visual effect with gentle red wash and subtle shake
                        optionStyle = 'bg-rose-950/50 border-rose-400/80 text-rose-100 ring-1 ring-rose-400/50';
                        badgeStyle = 'bg-rose-500 text-white font-bold';
                        visualEffectClass = 'animate-subtle-shake';
                      } else if (!isSelected && isActualAnswer) {
                        // Highlight true correct option when user selected wrong
                        optionStyle = 'bg-emerald-950/30 border-emerald-500/80 text-emerald-200 border-dashed';
                        badgeStyle = 'bg-emerald-600 text-white';
                      }
                    }

                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => handleSelectOption(opt.label)}
                        className={`w-full text-left p-3 sm:p-4 rounded-xl border flex items-center justify-between gap-3 transition-all cursor-pointer active:scale-99 select-none ${optionStyle} ${visualEffectClass}`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center font-bold uppercase shrink-0 transition-colors ${badgeStyle}`}
                          >
                            {opt.label}
                          </span>
                          <span className="font-medium text-sm sm:text-base font-hindi">
                            {opt.text}
                          </span>
                        </div>

                        {/* Visual indicators */}
                        {currentAnswer && (
                          <div className="shrink-0">
                            {isSelected && currentAnswer.isCorrect && (
                              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-900/60 px-2.5 py-1 rounded-full border border-emerald-500/50">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                <span>Correct (+1)</span>
                              </div>
                            )}
                            {isSelected && !currentAnswer.isCorrect && (
                              <div className="flex items-center gap-1 text-xs font-medium text-rose-300 bg-rose-900/40 px-2 py-0.5 rounded-full border border-rose-500/40">
                                <XCircle className="w-3.5 h-3.5 text-rose-400" />
                                <span>Your Answer</span>
                              </div>
                            )}
                            {!isSelected && isActualAnswer && (
                              <div className="flex items-center gap-1 text-xs font-semibold text-emerald-300 bg-emerald-900/30 px-2 py-0.5 rounded-full border border-emerald-500/30">
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Correct Answer</span>
                              </div>
                            )}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Solution & Concept Explanation Box upon Answer */}
                {currentAnswer && currentQuestion.solutionHint && (
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5 font-bold text-amber-300">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span>Solving Shortcut & Explanation</span>
                      </div>
                      <span className="text-[10px] text-slate-500">Instant Pedagogical Guide</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed font-mono-num">
                      {currentQuestion.solutionHint}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Action Controls */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                    disabled={currentIndex === 0}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  {currentAnswer && (
                    <button
                      onClick={() => handleClearAnswer(currentQuestion.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs border border-slate-700/60 transition-all cursor-pointer"
                      title="Clear your answer for this question"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span className="hidden sm:inline">Reset</span>
                    </button>
                  )}
                </div>

                <div className="text-xs text-slate-400">
                  <span className="font-bold text-white">{currentIndex + 1}</span> of{' '}
                  <span className="font-bold text-slate-300">{totalQuestions}</span>
                </div>

                <button
                  onClick={() => setCurrentIndex((i) => Math.min(totalQuestions - 1, i + 1))}
                  disabled={currentIndex === totalQuestions - 1}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-30 disabled:cursor-not-allowed text-slate-950 font-bold text-xs transition-all shadow-md shadow-amber-400/20 cursor-pointer active:scale-95"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right 4 Cols: Question Navigator Palette & Live Scoreboard */}
        <div className="lg:col-span-4 space-y-4">
          {/* Quick Scoreboard Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-200 flex items-center gap-1.5 uppercase tracking-wider">
                <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                <span>Live Test Performance</span>
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">
                {progressPercent}% Complete
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-800/50">
                <div className="text-lg font-bold text-emerald-400 font-mono">+{correctCount}</div>
                <div className="text-[10px] text-emerald-300/80 uppercase font-semibold">Correct</div>
              </div>
              <div className="p-2 rounded-xl bg-rose-950/40 border border-rose-800/50">
                <div className="text-lg font-bold text-rose-400 font-mono">-{incorrectCount}</div>
                <div className="text-[10px] text-rose-300/80 uppercase font-semibold">Incorrect</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-lg font-bold text-slate-300 font-mono">
                  {totalQuestions - answeredCount}
                </div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Left</div>
              </div>
            </div>
          </div>

          {/* Question Navigator Palette */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-md flex flex-col max-h-[520px]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Question Palette ({totalQuestions})
              </h3>
              <div className="flex items-center gap-1 text-[10px]">
                <button
                  onClick={() => setPaletteFilter('all')}
                  className={`px-1.5 py-0.5 rounded ${
                    paletteFilter === 'all' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setPaletteFilter('unanswered')}
                  className={`px-1.5 py-0.5 rounded ${
                    paletteFilter === 'unanswered' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Left
                </button>
                <button
                  onClick={() => setPaletteFilter('review')}
                  className={`px-1.5 py-0.5 rounded ${
                    paletteFilter === 'review' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Review
                </button>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-4 gap-1 text-[9px] text-slate-400 pb-2 mb-2 border-b border-slate-800">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Correct
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> Wrong
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> Review
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-700" /> Left
              </span>
            </div>

            {/* Palette Grid */}
            <div className="overflow-y-auto flex-1 pr-1 grid grid-cols-5 sm:grid-cols-6 gap-1.5 scrollbar-thin">
              {activeQuestions.map((q, idx) => {
                const ans = userAnswers[q.id];
                const isCur = idx === currentIndex;
                const isRev = markedForReview.includes(q.id);

                // Filter logic
                if (paletteFilter === 'unanswered' && ans) return null;
                if (paletteFilter === 'answered' && !ans) return null;
                if (paletteFilter === 'review' && !isRev) return null;

                let btnBg = 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700';

                if (isRev) {
                  btnBg = 'bg-purple-900/80 text-purple-200 border-purple-500';
                } else if (ans) {
                  if (ans.isCorrect) {
                    btnBg = 'bg-emerald-900/80 text-emerald-200 border-emerald-500';
                  } else {
                    btnBg = 'bg-rose-900/80 text-rose-200 border-rose-500';
                  }
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-8 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer relative flex items-center justify-center ${btnBg} ${
                      isCur ? 'ring-2 ring-amber-400 scale-105 z-10' : ''
                    }`}
                    title={`Question ${q.id}${ans ? (ans.isCorrect ? ' (Correct)' : ' (Wrong)') : ''}${isRev ? ' [Flagged]' : ''}`}
                  >
                    <span>{q.id}</span>
                    {isRev && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 absolute top-0.5 right-0.5" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Scorecard Modal / Completion Screen */}
      {showScorecard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 text-center space-y-5 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20 font-bold">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Test Completed!</h2>
              <p className="text-xs text-slate-400 font-hindi mt-1">
                लाभ एवं हानि (Profit & Loss) • स्पीड एवं सटीकता रिपोर्ट
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Score</span>
                <p className="text-xl font-extrabold text-emerald-400 font-mono mt-0.5">
                  {correctCount}/{answeredCount}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Accuracy</span>
                <p className="text-xl font-extrabold text-amber-300 font-mono mt-0.5">
                  {accuracyPercent}%
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Time</span>
                <p className="text-xl font-extrabold text-slate-200 font-mono mt-0.5">
                  {formatTime(elapsedSeconds)}
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-400 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              {accuracyPercent >= 80 ? (
                <span className="text-emerald-300 font-semibold">
                  🌟 Brilliant work! You have strong conceptual mastery in Profit & Loss.
                </span>
              ) : accuracyPercent >= 50 ? (
                <span className="text-amber-300 font-semibold">
                  👍 Good attempt! Review the missed questions and formula steps to improve speed.
                </span>
              ) : (
                <span className="text-slate-300">
                  💡 Keep practicing! Review the PDF booklet and formula solutions to build confidence.
                </span>
              )}
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setUserAnswers({});
                  setMarkedForReview([]);
                  setCurrentIndex(0);
                  setElapsedSeconds(0);
                  setShowScorecard(false);
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 inline mr-1.5" />
                Retake Quiz
              </button>

              <button
                onClick={() => {
                  setShowScorecard(false);
                  onExit();
                }}
                className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-400/20 cursor-pointer"
              >
                Exit to PDF Studio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
