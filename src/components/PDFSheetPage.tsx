import React from 'react';
import { Question, PDFCustomization } from '../types';
import { Award, BookOpen, CheckCircle } from 'lucide-react';
import { getTypeDefinition, isTypeStart } from '../utils/typeMapping';
import { AIHintCard } from './AIHintCard';

interface Props {
  sheetNumber: number;
  totalSheets: number;
  pageNumber: number;
  totalPages: number;
  questions: Question[];
  customization: PDFCustomization;
  isInteractive?: boolean;
  bookmarkedIds?: number[];
  onToggleBookmark?: (id: number) => void;
}

export const PDFSheetPage: React.FC<Props> = ({
  sheetNumber,
  totalSheets,
  pageNumber,
  totalPages,
  questions,
  customization,
  isInteractive = false,
  bookmarkedIds = [],
  onToggleBookmark,
}) => {
  const startId = questions.length > 0 ? questions[0].id : 0;
  const endId = questions.length > 0 ? questions[questions.length - 1].id : 0;

  const startType = getTypeDefinition(startId);
  const endType = getTypeDefinition(endId);
  const typeSummary =
    startType.typeNum === endType.typeNum
      ? `${startType.badgeLabel}: ${startType.shortName}`
      : `${startType.badgeLabel} & ${endType.badgeLabel}: ${startType.shortName} / ${endType.shortName}`;

  // Split questions into 2 balanced columns (or 1 column if requested)
  const isTwoCol = customization.columnCount !== 1;
  const midIndex = Math.ceil(questions.length / 2);
  const leftCol = isTwoCol ? questions.slice(0, midIndex) : questions;
  const rightCol = isTwoCol ? questions.slice(midIndex) : [];

  return (
    <div
      id={`pdf-sheet-${sheetNumber}`}
      className="pdf-a4-sheet bg-white text-slate-900 mx-auto mb-8 shadow-md print:shadow-none border border-slate-200 print:border-none relative flex flex-col justify-between rounded-lg overflow-hidden"
      style={{
        width: '210mm',
        height: '297mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        padding: '8mm 9mm',
        boxSizing: 'border-box',
        pageBreakAfter: 'always',
        breakAfter: 'page',
      }}
    >
      {/* Top Running Header */}
      <div className="border-b-2 border-slate-900 pb-2 mb-2 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-slate-900 text-amber-300 flex items-center justify-center font-bold text-[11px]">
            AU
          </div>
          <div>
            <span className="font-extrabold text-[12px] tracking-tight uppercase text-slate-900">
              Maths By Abhishek Upadhyay Sir
            </span>
            <span className="text-[10px] text-amber-800 font-semibold ml-2 font-hindi hidden sm:inline bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
              {typeSummary}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px] border border-amber-300 font-mono-num">
            Sheet {sheetNumber} of {totalSheets} (Q.{startId} - Q.{endId})
          </span>
          <span className="text-[11px] font-bold text-slate-700 font-mono-num">
            Page {pageNumber}
          </span>
        </div>
      </div>

      {/* Main Questions Grid - 2 Columns */}
      <div className="flex-1 flex gap-2.5 overflow-hidden">
        {/* Left Column */}
        <div className={`flex-1 flex flex-col justify-between gap-1.5 ${!isTwoCol ? 'w-full' : ''}`}>
          {leftCol.map((q) => (
            <SheetQuestionCard
              key={q.id}
              question={q}
              customization={customization}
              isInteractive={isInteractive}
              isBookmarked={bookmarkedIds.includes(q.id)}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>

        {/* Right Column */}
        {isTwoCol && (
          <div className="flex-1 flex flex-col justify-between gap-1.5 border-l border-slate-200 pl-2.5">
            {rightCol.map((q) => (
              <SheetQuestionCard
                key={q.id}
                question={q}
                customization={customization}
                isInteractive={isInteractive}
                isBookmarked={bookmarkedIds.includes(q.id)}
                onToggleBookmark={onToggleBookmark}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom Running Footer */}
      <div className="border-t border-slate-300 pt-1.5 mt-2 flex items-center justify-between text-[10px] text-slate-500 shrink-0 font-medium">
        <div className="flex items-center gap-1">
          <CheckCircle className="w-3 h-3 text-emerald-600" />
          <span>SSC CGL, CHSL, CPO, GD, MTS • UPP Constable/SI • RRB NTPC</span>
        </div>
        <div className="font-mono-num font-semibold text-slate-700">
          Page {pageNumber} of {totalPages}
        </div>
        <span>Exclusive Series • Abhishek Sir</span>
      </div>
    </div>
  );
};

// Compact, crisp Question Card designed specifically for un-split A4 sheets
const SheetQuestionCard: React.FC<{
  question: Question;
  customization: PDFCustomization;
  isInteractive?: boolean;
  isBookmarked?: boolean;
  onToggleBookmark?: (id: number) => void;
}> = ({ question, customization, isInteractive, isBookmarked, onToggleBookmark }) => {
  const [selectedOpt, setSelectedOpt] = React.useState<string | null>(null);

  return (
    <div className="bg-white border border-slate-200 rounded-md p-2 flex flex-col justify-between shadow-none hover:border-amber-400 transition-colors">
      {/* Section Type Opener Banner if this question is the first in its Type */}
      {isTypeStart(question.id) && (
        <div className="mb-1.5 px-2 py-0.5 rounded bg-gradient-to-r from-slate-950 to-blue-950 text-white flex items-center justify-between text-[9px] font-bold border-l-2 border-amber-400">
          <span className="text-amber-300 font-hindi truncate">
            ❖ {question.type} : {question.typeNameHi || question.category}
          </span>
          {question.typeNameEn && (
            <span className="text-slate-300 text-[8px] font-normal shrink-0 ml-1">
              ({question.typeNameEn})
            </span>
          )}
        </div>
      )}

      {/* Badge Header */}
      <div className="flex items-center justify-between gap-1 mb-1 pb-1 border-b border-slate-100 text-[10px]">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="font-bold px-1.5 py-0.5 rounded bg-slate-900 text-amber-300 font-mono-num text-[10px]">
            Q. {question.id}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-950 font-bold text-[9px] border border-amber-300 flex items-center gap-1 shadow-2xs">
            <span className="bg-slate-900 text-amber-300 px-1 py-0.2 rounded text-[8px] font-extrabold">{question.type}</span>
            <span className="font-hindi text-[9px]">{question.shortName || question.typeNameHi || question.category}</span>
          </span>
          {question.year && (
            <span className="px-1 py-0.5 rounded bg-slate-100 text-slate-700 font-mono-num text-[9px] border border-slate-200">
              {question.year}
            </span>
          )}
        </div>

        {customization.showExamsBadge && (
          <span className="px-1.5 py-0.5 rounded bg-sky-50 text-sky-800 font-medium text-[9px] border border-sky-200 truncate max-w-[150px]">
            {question.exam}
          </span>
        )}
      </div>

      {/* Question Text: English + Hindi */}
      <div className="space-y-0.5 my-1 text-[11px] leading-[1.35] text-slate-900">
        {customization.showEnglish && (
          <p className="font-medium text-slate-800">
            {question.en}
          </p>
        )}
        {customization.showHindi && (
          <p className="font-hindi text-slate-700 text-[11.5px]">
            {question.hi}
          </p>
        )}
      </div>

      {/* 4 Options in 2x2 grid */}
      <div className="grid grid-cols-2 gap-1 mt-1 text-[10px]">
        {question.options.map((opt) => {
          const isSelected = selectedOpt === opt.label;
          const isCorrect = question.correctAnswer === opt.label;

          let btnClass = "bg-slate-50 border-slate-200 text-slate-800";
          if (isInteractive && isSelected) {
            btnClass = isCorrect
              ? "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold"
              : "bg-rose-50 border-rose-400 text-rose-900 font-bold";
          }

          return (
            <div
              key={opt.label}
              onClick={() => isInteractive && setSelectedOpt(opt.label)}
              className={`px-1.5 py-1 rounded border flex items-center gap-1 transition-all ${btnClass} ${
                isInteractive ? 'cursor-pointer hover:bg-amber-50' : ''
              }`}
            >
              <span className="font-bold text-slate-500 uppercase text-[9px]">
                ({opt.label})
              </span>
              <span className="truncate font-medium">
                {opt.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* AI Step-by-Step Hint (Hidden when printing via CSS print media rules) */}
      <AIHintCard question={question} compact={true} />
    </div>
  );
};
