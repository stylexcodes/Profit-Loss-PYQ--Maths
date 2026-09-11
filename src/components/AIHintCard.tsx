import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, X, Loader2, Lightbulb, Zap } from 'lucide-react';
import { Question } from '../types';
import { AIHintData, fetchAIHint } from '../utils/aiHintService';

interface Props {
  question: Question;
  compact?: boolean;
}

export const AIHintCard: React.FC<Props> = ({ question, compact = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hint, setHint] = useState<AIHintData | null>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleOpen = async () => {
    setIsOpen(true);
    if (!hint) {
      setLoading(true);
      try {
        const generatedHint = await fetchAIHint(question);
        setHint(generatedHint);
      } catch (err) {
        console.error('Failed to load hint:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="no-print print:hidden mt-1.5 select-none">
      {/* Trigger Button - static height, causes zero layout shift */}
      <button
        type="button"
        onClick={handleOpen}
        className={`inline-flex items-center gap-1.5 rounded-md font-semibold border transition-all cursor-pointer shadow-2xs active:scale-95 bg-white hover:bg-amber-50/90 text-amber-900 border-amber-200/90 hover:border-amber-300 ${
          compact ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'
        }`}
        title="Get step-by-step problem-solving clues without revealing the final answer"
      >
        <Sparkles className={`${compact ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-amber-600 animate-pulse`} />
        <span>{compact ? 'AI Hint' : 'Reveal AI Hint'}</span>
      </button>

      {/* Floating Overlay Modal - attached to document.body via Portal to prevent layout shift & clipping */}
      {isOpen &&
        createPortal(
          <div
            className="no-print print:hidden fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`ai-hint-title-${question.id}`}
          >
            <div
              className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-amber-300/80 flex flex-col max-h-[88vh] overflow-hidden animate-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-amber-50 via-amber-100/50 to-amber-50 border-b border-amber-200/90">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 shadow-xs">
                    <Lightbulb className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3
                        id={`ai-hint-title-${question.id}`}
                        className="font-bold text-sm sm:text-base text-amber-950 tracking-tight"
                      >
                        Q.{question.id} • AI Solving Guide
                      </h3>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200/90 text-amber-900 border border-amber-300 shrink-0">
                        {question.type || 'TYPE - 1'}
                      </span>
                    </div>
                    <p className="text-[11px] text-amber-800 font-hindi">
                      कदम-दर-कदम संकेत • उत्तर गोपनीय रहेगा
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  {hint?.source === 'gemini' && (
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-amber-800 bg-amber-200/70 px-2 py-0.5 rounded-full border border-amber-300">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      Gemini 3.8
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleClose}
                    className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-amber-200/60 transition-colors cursor-pointer"
                    aria-label="Close hint modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Question Reference Box */}
              <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-xs text-slate-700 max-h-24 overflow-y-auto">
                <p className="font-medium text-slate-800">{question.en}</p>
                <p className="font-hindi text-slate-600 mt-1 text-[11px]">{question.hi}</p>
              </div>

              {/* Modal Body */}
              <div className="p-4 overflow-y-auto space-y-3 text-xs leading-relaxed flex-1">
                {/* Loading State */}
                {loading && (
                  <div className="py-12 flex flex-col items-center justify-center gap-3 text-amber-900 font-medium">
                    <Loader2 className="w-7 h-7 animate-spin text-amber-600" />
                    <span className="text-sm">Analyzing question with AI teaching assistant...</span>
                    <p className="text-xs text-slate-500">Preparing pedagogical steps without revealing the answer</p>
                  </div>
                )}

                {/* Hint Content */}
                {!loading && hint && (
                  <>
                    {/* Step 1 */}
                    <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200/70 space-y-1.5">
                      <div className="font-bold text-amber-950 flex items-center gap-1.5 text-xs sm:text-sm">
                        <span className="w-5 h-5 rounded-full bg-amber-300 text-amber-950 text-xs font-extrabold flex items-center justify-center shrink-0">
                          1
                        </span>
                        <span>{hint.step1.title}</span>
                      </div>
                      {hint.step1.formula && (
                        <div className="my-1.5 pl-6">
                          <span className="inline-block px-2.5 py-1 rounded bg-white border border-amber-300 text-amber-950 font-mono text-xs font-bold shadow-2xs">
                            {hint.step1.formula}
                          </span>
                        </div>
                      )}
                      <p className="text-slate-800 pl-6 leading-normal">{hint.step1.contentEn}</p>
                      <p className="text-slate-600 font-hindi pl-6 text-xs leading-normal">
                        {hint.step1.contentHi}
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200/70 space-y-1.5">
                      <div className="font-bold text-amber-950 flex items-center gap-1.5 text-xs sm:text-sm">
                        <span className="w-5 h-5 rounded-full bg-amber-300 text-amber-950 text-xs font-extrabold flex items-center justify-center shrink-0">
                          2
                        </span>
                        <span>{hint.step2.title}</span>
                      </div>
                      {hint.step2.formula && (
                        <div className="my-1.5 pl-6">
                          <span className="inline-block px-2.5 py-1 rounded bg-white border border-amber-300 text-amber-950 font-mono text-xs font-bold shadow-2xs">
                            {hint.step2.formula}
                          </span>
                        </div>
                      )}
                      <p className="text-slate-800 pl-6 leading-normal">{hint.step2.contentEn}</p>
                      <p className="text-slate-600 font-hindi pl-6 text-xs leading-normal">
                        {hint.step2.contentHi}
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200/70 space-y-1.5">
                      <div className="font-bold text-amber-950 flex items-center gap-1.5 text-xs sm:text-sm">
                        <span className="w-5 h-5 rounded-full bg-amber-300 text-amber-950 text-xs font-extrabold flex items-center justify-center shrink-0">
                          3
                        </span>
                        <span>{hint.step3.title}</span>
                      </div>
                      {hint.step3.formula && (
                        <div className="my-1.5 pl-6">
                          <span className="inline-block px-2.5 py-1 rounded bg-white border border-amber-300 text-amber-950 font-mono text-xs font-bold shadow-2xs">
                            {hint.step3.formula}
                          </span>
                        </div>
                      )}
                      <p className="text-slate-800 pl-6 leading-normal">{hint.step3.contentEn}</p>
                      <p className="text-slate-600 font-hindi pl-6 text-xs leading-normal">
                        {hint.step3.contentHi}
                      </p>
                    </div>

                    {/* Exam Tip */}
                    {hint.examTip && (
                      <div className="p-2.5 rounded-lg bg-amber-100/80 border border-amber-300 flex items-start gap-2 text-xs text-amber-950">
                        <Zap className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">Exam Shortcut: </span>
                          <span>{hint.examTip.contentEn}</span>
                          <p className="font-hindi text-amber-900 mt-0.5 text-[11px]">{hint.examTip.contentHi}</p>
                        </div>
                      </div>
                    )}

                    <div className="pt-2 text-center text-xs font-medium text-amber-900 bg-amber-50/80 py-2 rounded-md border border-amber-200/60">
                      🎯 Now apply the steps to calculate the answer and mark your choice!
                    </div>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-mono text-[10px]">Esc</kbd> to close
                </span>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-1.5 text-xs font-semibold rounded-md bg-amber-500 hover:bg-amber-600 text-slate-950 transition-colors ml-auto cursor-pointer shadow-xs"
                >
                  Got it / Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
