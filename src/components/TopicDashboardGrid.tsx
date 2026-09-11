import React from 'react';
import { BookOpen, Sparkles, Play, ArrowRight, Layers, Trophy, CheckCircle2 } from 'lucide-react';

interface TopicSection {
  id: string;
  title: string;
  count: number;
  range: string;
}

interface Props {
  topics: TopicSection[];
  selectedTopic: string;
  onSelectTopic: (topicId: string) => void;
  onStartPracticeTest: (topicId?: string) => void;
  totalQuestions: number;
}

export const TopicDashboardGrid: React.FC<Props> = ({
  topics,
  selectedTopic,
  onSelectTopic,
  onStartPracticeTest,
  totalQuestions,
}) => {
  return (
    <div className="no-print mb-6">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-slate-900 text-amber-300 flex items-center justify-center text-xs font-bold">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
            Topics & Practice Arena
          </h3>
          <span className="hidden sm:inline-block text-[11px] text-slate-500 font-hindi">
            • 10 प्रकार के महत्वपूर्ण प्रश्न संग्रह (PYQ Master Series)
          </span>
        </div>

        <span className="text-[11px] font-semibold text-slate-500">
          Total {totalQuestions} Questions
        </span>
      </div>

      {/* Main Dashboard Grid alongside other topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {/* VISUALLY DISTINCT STANDOUT PRACTICE TEST CARD IN THE MAIN GRID */}
        <div
          onClick={() => onStartPracticeTest(selectedTopic !== 'all' ? selectedTopic : undefined)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onStartPracticeTest(selectedTopic !== 'all' ? selectedTopic : undefined);
            }
          }}
          className="group relative cursor-pointer overflow-hidden rounded-xl p-4 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 border-2 border-amber-300 transition-all duration-200 hover:-translate-y-0.5 active:scale-98 flex flex-col justify-between"
          role="button"
          tabIndex={0}
          title="Launch Interactive Practice Test with Audio & Visual Feedback"
        >
          {/* Subtle decorative glow overlay */}
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/20 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-950 text-amber-300 shadow-xs">
                <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                <span>Interactive Mode</span>
              </span>

              <span className="text-[11px] font-mono-num font-bold text-slate-950/80 bg-white/40 px-1.5 py-0.5 rounded">
                Live Quiz
              </span>
            </div>

            <h4 className="text-base font-extrabold text-slate-950 tracking-tight flex items-center gap-1.5">
              <span>Practice Test</span>
              <Play className="w-3.5 h-3.5 fill-slate-950" />
            </h4>

            <p className="text-xs font-semibold text-slate-900/90 mt-1 leading-snug">
              Audio feedback • Instant scoring • Timed speed quiz for all 180 questions
            </p>
          </div>

          <div className="pt-3 mt-3 border-t border-slate-950/15 flex items-center justify-between text-xs font-bold">
            <span className="text-[11px] text-slate-950 uppercase tracking-wider flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" />
              <span>Start Quiz</span>
            </span>

            <button
              id="btn-take-practice-test"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onStartPracticeTest(selectedTopic !== 'all' ? selectedTopic : undefined);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-900 text-amber-300 transition-all shadow-md text-xs font-bold cursor-pointer hover:scale-105 active:scale-95 border border-slate-900"
              title="Start Practice Test"
            >
              <span>Take Test</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* All Questions (180) Topic Card */}
        <div
          onClick={() => onSelectTopic('all')}
          className={`cursor-pointer rounded-xl p-3.5 border transition-all duration-150 flex flex-col justify-between ${
            selectedTopic === 'all'
              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
              : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90 shadow-2xs'
          }`}
          role="button"
          tabIndex={0}
        >
          <div>
            <div className="flex items-center justify-between gap-1 mb-1.5">
              <span
                className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  selectedTopic === 'all'
                    ? 'bg-amber-400 text-slate-950'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                FULL BOOKLET
              </span>
              <span
                className={`text-[11px] font-mono-num font-bold ${
                  selectedTopic === 'all' ? 'text-amber-300' : 'text-slate-500'
                }`}
              >
                Q1 - Q180
              </span>
            </div>

            <h5 className="font-bold text-xs sm:text-sm font-hindi leading-tight line-clamp-1">
              संपूर्ण 180 प्रश्न (All Questions)
            </h5>
            <p
              className={`text-[11px] mt-1 line-clamp-1 ${
                selectedTopic === 'all' ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              Complete Level - I compilation
            </p>
          </div>

          <div
            className={`pt-2 mt-2 border-t flex items-center justify-between text-[11px] font-semibold ${
              selectedTopic === 'all'
                ? 'border-slate-800 text-amber-300'
                : 'border-slate-100 text-slate-500'
            }`}
          >
            <span>180 PYQ Questions</span>
            <span>{selectedTopic === 'all' ? 'Active' : 'Select'}</span>
          </div>
        </div>

        {/* The 10 Topic Sections Cards */}
        {topics.map((t, idx) => {
          const isSelected = selectedTopic === t.id;
          const typeNum = idx + 1;

          return (
            <div
              key={t.id}
              onClick={() => onSelectTopic(t.id)}
              className={`cursor-pointer rounded-xl p-3.5 border transition-all duration-150 flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90 shadow-2xs'
              }`}
              role="button"
              tabIndex={0}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span
                    className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-amber-50 text-amber-900 border border-amber-200'
                    }`}
                  >
                    TYPE - {typeNum}
                  </span>
                  <span
                    className={`text-[11px] font-mono-num font-semibold ${
                      isSelected ? 'text-amber-300' : 'text-slate-500'
                    }`}
                  >
                    {t.range}
                  </span>
                </div>

                <h5 className="font-bold text-xs sm:text-sm font-hindi leading-tight line-clamp-2">
                  {t.title}
                </h5>
              </div>

              <div
                className={`pt-2 mt-2 border-t flex items-center justify-between text-[11px] font-semibold ${
                  isSelected
                    ? 'border-slate-800 text-amber-300'
                    : 'border-slate-100 text-slate-500'
                }`}
              >
                <span>{t.count} Questions</span>
                <span>{isSelected ? 'Active' : 'Select'}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
