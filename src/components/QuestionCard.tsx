import React, { useState } from 'react';
import { Question, PDFCustomization } from '../types';
import { Check, HelpCircle, Bookmark, Star } from 'lucide-react';

interface Props {
  question: Question;
  customization: PDFCustomization;
  isInteractive?: boolean;
  isBookmarked?: boolean;
  onToggleBookmark?: (id: number) => void;
}

export const QuestionCard: React.FC<Props> = ({
  question,
  customization,
  isInteractive = false,
  isBookmarked = false,
  onToggleBookmark,
}) => {
  const [selectedOption, setSelectedOption] = useState<'a' | 'b' | 'c' | 'd' | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const isCompact = customization.fontSize === 'compact';
  const isComfortable = customization.fontSize === 'comfortable';

  const textSize = isCompact ? 'text-[13px]' : isComfortable ? 'text-[15px]' : 'text-[14px]';
  const headingSize = isCompact ? 'text-xs' : 'text-xs md:text-sm';
  const padding = isCompact ? 'p-3' : isComfortable ? 'p-5' : 'p-3.5';

  const handleOptionClick = (label: 'a' | 'b' | 'c' | 'd') => {
    if (!isInteractive) return;
    setSelectedOption(label);
  };

  return (
    <div
      id={`question-${question.id}`}
      className={`print-avoid-break relative group bg-white border border-slate-200/80 rounded-lg ${padding} shadow-xs hover:shadow-sm transition-all duration-150 mb-3`}
    >
      {/* Top Header Row with Badges */}
      <div className="flex items-center justify-between gap-2 pb-2.5 mb-2 border-b border-slate-100 flex-wrap">
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Question Number */}
          <span className="inline-flex items-center justify-center font-mono-num font-bold text-xs px-2 py-0.5 rounded bg-slate-900 text-amber-300 shadow-xs">
            Q. {question.id}
          </span>

          {/* Type Badge with Full Type Name */}
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-300 shadow-2xs"
            title={question.typeNameHi ? `${question.type}: ${question.typeNameHi} (${question.typeNameEn})` : question.type}
          >
            <span className="font-extrabold bg-slate-900 text-amber-300 px-1.5 py-0.2 rounded text-[10px]">
              {question.type}
            </span>
            <span className="font-hindi font-bold text-[11px]">
              {question.shortName || question.typeNameHi || question.category}
            </span>
            {question.typeNameEn && (
              <span className="hidden sm:inline text-[10px] text-amber-800 font-normal">
                ({question.typeNameEn})
              </span>
            )}
          </span>

          {/* Year Badge */}
          {question.year && (
            <span className="inline-flex items-center text-[11px] font-medium px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/60 font-mono-num">
              {question.year}
            </span>
          )}

          {/* Exam Badge */}
          {customization.showExamsBadge && (
            <span className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded bg-sky-50 text-sky-800 border border-sky-200/70 truncate max-w-[200px]">
              {question.exam}
            </span>
          )}
        </div>

        {/* Action icons (Screen only) */}
        <div className="no-print flex items-center gap-1">
          {isInteractive && (
            <button
              onClick={() => setShowSolution(!showSolution)}
              title="Toggle Solution Hint"
              className="p-1 rounded text-slate-400 hover:text-amber-600 hover:bg-amber-50 transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
            </button>
          )}

          {onToggleBookmark && (
            <button
              onClick={() => onToggleBookmark(question.id)}
              title={isBookmarked ? "Remove Bookmark" : "Bookmark Question"}
              className={`p-1 rounded transition-colors ${
                isBookmarked ? 'text-amber-500 bg-amber-50' : 'text-slate-300 hover:text-slate-600'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400' : ''}`} />
            </button>
          )}
        </div>
      </div>

      {/* Question Text in English & Hindi */}
      <div className="space-y-1.5 text-slate-900">
        {customization.showEnglish && (
          <p className={`${textSize} leading-relaxed font-normal text-slate-800 tracking-normal`}>
            {question.en}
          </p>
        )}

        {customization.showHindi && (
          <p className={`${textSize} font-hindi leading-relaxed text-slate-700`}>
            {question.hi}
          </p>
        )}
      </div>

      {/* Options Grid */}
      <div className="mt-3 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        {question.options.map((opt) => {
          const isSelected = selectedOption === opt.label;
          const isCorrect = question.correctAnswer === opt.label;
          
          let optStyle = "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100";
          if (isInteractive && selectedOption) {
            if (isSelected && isCorrect) {
              optStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold ring-1 ring-emerald-400";
            } else if (isSelected && !isCorrect) {
              optStyle = "bg-rose-50 border-rose-300 text-rose-900";
            } else if (isCorrect) {
              optStyle = "bg-emerald-50/50 border-emerald-300 text-emerald-800 font-semibold";
            }
          }

          return (
            <button
              key={opt.label}
              disabled={!isInteractive}
              onClick={() => handleOptionClick(opt.label)}
              className={`text-left px-2.5 py-1.5 rounded-md border flex items-start gap-2 transition-all ${optStyle} ${
                isInteractive ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <span className="font-mono-num font-bold text-slate-600 shrink-0">
                ({opt.label})
              </span>
              <span className="flex-1 font-medium font-hindi break-words">
                {opt.text}
              </span>
              {isInteractive && selectedOption && isCorrect && (
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 self-center" />
              )}
            </button>
          );
        })}
      </div>

      {/* Solution Hint (Interactive or Answer Reveal) */}
      {showSolution && question.solutionHint && (
        <div className="no-print mt-2.5 p-2.5 rounded bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 font-mono-num animate-in fade-in duration-150">
          <span className="font-bold text-amber-950">Quick Solution: </span>
          {question.solutionHint}
        </div>
      )}
    </div>
  );
};
