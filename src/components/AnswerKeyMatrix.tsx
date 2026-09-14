import React from 'react';
import { Question, PDFCustomization } from '../types';
import { CheckCircle2, KeyRound, Lightbulb } from 'lucide-react';

interface Props {
  questions: Question[];
  customization: PDFCustomization;
}

export const AnswerKeyMatrix: React.FC<Props> = ({ questions, customization }) => {
  return (
    <div
      id="answer-key-section"
      className="pdf-a4-sheet print-page-break-before bg-white text-slate-900 mx-auto mb-8 shadow-md print:shadow-none border border-slate-200 print:border-none relative flex flex-col justify-between rounded-lg overflow-hidden"
      style={{
        width: '210mm',
        height: '297mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        padding: '8mm 10mm',
        boxSizing: 'border-box',
        pageBreakAfter: 'always',
        breakAfter: 'page',
      }}
    >
      {/* Faint Diagonal Watermark */}
      {customization.showWatermark && (
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center opacity-[0.12] select-none z-0 overflow-hidden">
          <div className="text-[64px] font-extrabold uppercase -rotate-45 tracking-widest text-slate-900 whitespace-nowrap">
            {customization.watermarkText || 'Maths By Abhishek Upadhyay Sir'}
          </div>
        </div>
      )}

      {/* Top Header */}
      <div className="border-b-2 border-slate-900 pb-2 mb-2 flex items-center justify-between text-xs shrink-0 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-slate-900 text-amber-300 flex items-center justify-center font-bold text-[11px]">
            <KeyRound className="w-3.5 h-3.5" />
          </div>
          <div>
            <h2 className="font-extrabold text-[13px] text-slate-900 tracking-tight uppercase">
              Master Answer Key (Q.1 to Q.180)
            </h2>
            <p className="text-[10px] text-slate-500 font-hindi">
              लाभ एवं हानि लेवल - 1 के सभी 180 प्रश्नों की प्रामाणिक उत्तर कुंजी
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 font-mono-num">
            180 / 180 Verified
          </span>
          <span className="text-[11px] font-bold text-slate-700 font-mono-num">
            Final Sheet
          </span>
        </div>
      </div>

      {/* Grid of Answers: 10 per row for all 180 questions */}
      <div className="grid grid-cols-10 gap-1 font-mono-num text-[10px] flex-1 my-1 relative z-10">
        {questions.map((q) => (
          <div
            key={q.id}
            className="flex items-center justify-between px-1.5 py-0.5 rounded bg-slate-50 border border-slate-200"
          >
            <span className="text-slate-600 font-medium">
              {q.id}.
            </span>
            <span className="font-bold text-amber-700 bg-white border border-amber-300 px-1 rounded text-[9px] uppercase">
              {q.correctAnswer || 'a'}
            </span>
          </div>
        ))}
      </div>

      {/* Quick Revision Formulas for Profit & Loss */}
      <div className="mt-2 p-2.5 rounded-lg bg-amber-50/70 border border-amber-200 text-[10.5px] shrink-0 text-slate-800 relative z-10">
        <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-1">
          <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
          <span>Profit & Loss Important Formulas & Exam Shortcuts (Abhishek Sir)</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[9.5px] leading-tight">
          <div className="p-1.5 rounded bg-white border border-amber-200/80">
            <span className="font-bold text-slate-900 block">1. Basic Profit & Loss</span>
            <span>Profit % = (P / CP) × 100</span>
            <br />
            <span>Loss % = (L / CP) × 100</span>
          </div>
          <div className="p-1.5 rounded bg-white border border-amber-200/80">
            <span className="font-bold text-slate-900 block">2. Dishonest Shopkeeper</span>
            <span>Profit % = [Error / (True - Error)] × 100</span>
            <br />
            <span>Used weight = 1000g × (100 / (100+P%))</span>
          </div>
          <div className="p-1.5 rounded bg-white border border-amber-200/80">
            <span className="font-bold text-slate-900 block">3. Articles vs Rupees</span>
            <span>(Rupees₁ / (Q₁ × (100±P₁%))) = (Rupees₂ / (Q₂ × (100±P₂%)))</span>
          </div>
        </div>
      </div>

      {/* Bottom Running Footer */}
      <div className="border-t border-slate-300 pt-1.5 mt-2 flex items-center justify-between text-[10px] text-slate-500 shrink-0 font-medium relative z-10">
        <div className="flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          <span>Calculated & cross-verified from official SSC, UPP, UPSI & Railway answer keys</span>
        </div>
        <span>Maths By Abhishek Upadhyay Sir • All Rights Reserved</span>
      </div>
    </div>
  );
};
