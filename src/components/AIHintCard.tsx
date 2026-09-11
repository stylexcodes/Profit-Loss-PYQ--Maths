import React, { useState } from 'react';
import { Sparkles, ChevronUp, Loader2, Lightbulb, Zap } from 'lucide-react';
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

  const handleToggle = async () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

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

  return (
    <div className="no-print print:hidden mt-2 select-none">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={handleToggle}
        className={`inline-flex items-center gap-1.5 rounded-md font-semibold border transition-all cursor-pointer shadow-2xs active:scale-95 ${
          isOpen
            ? 'bg-amber-100/90 text-amber-950 border-amber-300 hover:bg-amber-200/70'
            : 'bg-white hover:bg-amber-50/80 text-amber-900 border-amber-200/90 hover:border-amber-300'
        } ${compact ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'}`}
        title="Get step-by-step problem-solving clues without revealing the final answer"
      >
        <Sparkles className={`${compact ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-amber-600 animate-pulse`} />
        <span>{isOpen ? 'Hide AI Hint' : 'Reveal AI Hint'}</span>
        {isOpen && <ChevronUp className={`${compact ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-amber-700`} />}
      </button>

      {/* Expanded Step-by-Step Hint Panel */}
      {isOpen && (
        <div className="mt-2 p-3 sm:p-3.5 rounded-lg bg-gradient-to-br from-amber-50/90 to-amber-100/40 border border-amber-300/80 text-slate-800 shadow-xs transition-all duration-200 animate-in fade-in">
          {/* Header Banner */}
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-amber-200/80 gap-2 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-md bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                <Lightbulb className="w-3.5 h-3.5" />
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[11px] sm:text-xs text-amber-950">
                    AI Step-by-Step Guide
                  </span>
                  <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-amber-200/80 text-amber-900 border border-amber-300">
                    No Answer Revealed
                  </span>
                </div>
                <p className="text-[10px] text-amber-800 font-hindi">
                  कदम-दर-कदम मार्गदर्शन • उत्तर खुद ज्ञात करें
                </p>
              </div>
            </div>

            {hint?.source === 'gemini' && (
              <span className="text-[9px] font-bold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-full border border-amber-300/70 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-amber-700" />
                <span>Gemini 3.8</span>
              </span>
            )}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="py-4 flex items-center justify-center gap-2 text-xs text-amber-800 font-medium">
              <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
              <span>Analyzing problem with AI teaching assistant...</span>
            </div>
          )}

          {/* Hint Content */}
          {!loading && hint && (
            <div className="space-y-2.5 text-[11px] sm:text-xs leading-relaxed">
              {/* Step 1 */}
              <div className="p-2 rounded bg-white/80 border border-amber-200/60 space-y-1">
                <div className="font-bold text-amber-950 flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 text-[10px] font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span>{hint.step1.title}</span>
                </div>
                <p className="text-slate-700 pl-5">{hint.step1.contentEn}</p>
                <p className="text-slate-600 font-hindi pl-5 text-[10.5px]">
                  {hint.step1.contentHi}
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-2 rounded bg-white/80 border border-amber-200/60 space-y-1">
                <div className="font-bold text-amber-950 flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 text-[10px] font-extrabold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span>{hint.step2.title}</span>
                </div>
                {hint.step2.formula && (
                  <div className="my-1 pl-5">
                    <span className="inline-block px-2 py-1 rounded bg-amber-50 border border-amber-300 text-amber-950 font-mono text-[11px] font-bold shadow-2xs">
                      {hint.step2.formula}
                    </span>
                  </div>
                )}
                <p className="text-slate-700 pl-5">{hint.step2.contentEn}</p>
                <p className="text-slate-600 font-hindi pl-5 text-[10.5px]">
                  {hint.step2.contentHi}
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-2 rounded bg-white/80 border border-amber-200/60 space-y-1">
                <div className="font-bold text-amber-950 flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 text-[10px] font-extrabold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span>{hint.step3.title}</span>
                </div>
                {hint.step3.formula && (
                  <div className="my-1 pl-5">
                    <span className="inline-block px-2 py-1 rounded bg-amber-50 border border-amber-300 text-amber-950 font-mono text-[11px] font-bold shadow-2xs">
                      {hint.step3.formula}
                    </span>
                  </div>
                )}
                <p className="text-slate-700 pl-5">{hint.step3.contentEn}</p>
                <p className="text-slate-600 font-hindi pl-5 text-[10.5px]">
                  {hint.step3.contentHi}
                </p>
              </div>

              {/* Exam Tip */}
              {hint.examTip && (
                <div className="p-2 rounded bg-amber-100/70 border border-amber-300/80 flex items-start gap-1.5 text-[10.5px] text-amber-950">
                  <Zap className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Exam Shortcut: </span>
                    <span>{hint.examTip.contentEn}</span>
                    <p className="font-hindi text-amber-900 mt-0.5">{hint.examTip.contentHi}</p>
                  </div>
                </div>
              )}

              {/* Encouragement note */}
              <div className="pt-1 text-center text-[10px] font-semibold text-amber-800">
                🎯 Now perform the final calculation step to choose from options (a), (b), (c), or (d)!
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
