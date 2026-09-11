import React from 'react';
import { PDFCustomization } from '../types';
import { Award, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import { ALL_TYPE_DEFINITIONS } from '../utils/typeMapping';

interface Props {
  customization: PDFCustomization;
  totalQuestions: number;
}

export const PDFCoverPage: React.FC<Props> = ({ customization, totalQuestions }) => {
  const getThemeStyles = () => {
    switch (customization.theme) {
      case 'oxford-emerald':
        return {
          bg: 'bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950',
          accent: 'border-emerald-400 text-emerald-300',
          accentBg: 'bg-emerald-500/10 text-emerald-200 border-emerald-500/30',
          pill: 'bg-emerald-500 text-white',
          gold: 'text-amber-300',
        };
      case 'burgundy-luxury':
        return {
          bg: 'bg-gradient-to-br from-rose-950 via-stone-900 to-zinc-950',
          accent: 'border-rose-400 text-rose-300',
          accentBg: 'bg-rose-500/10 text-rose-200 border-rose-500/30',
          pill: 'bg-rose-600 text-white',
          gold: 'text-amber-300',
        };
      case 'monolith-slate':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-neutral-900 to-black',
          accent: 'border-slate-400 text-slate-300',
          accentBg: 'bg-slate-500/10 text-slate-200 border-slate-500/30',
          pill: 'bg-slate-200 text-slate-900',
          gold: 'text-amber-200',
        };
      case 'clean-minimal':
        return {
          bg: 'bg-white text-slate-900 border-2 border-slate-300',
          accent: 'border-slate-800 text-slate-900',
          accentBg: 'bg-slate-100 text-slate-800 border-slate-300',
          pill: 'bg-slate-900 text-white',
          gold: 'text-amber-600',
        };
      case 'royal-navy':
      default:
        return {
          bg: 'bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900',
          accent: 'border-amber-400 text-amber-300',
          accentBg: 'bg-amber-400/10 text-amber-200 border-amber-400/30',
          pill: 'bg-amber-500 text-slate-950',
          gold: 'text-amber-300',
        };
    }
  };

  const theme = getThemeStyles();
  const isMinimal = customization.theme === 'clean-minimal';

  return (
    <div
      id="pdf-cover-page"
      className={`pdf-a4-sheet print-page-break-after relative mx-auto flex flex-col justify-between rounded-lg overflow-hidden shadow-md print:shadow-none ${
        isMinimal ? 'bg-white text-slate-900' : `${theme.bg} text-white`
      }`}
      style={{
        width: '210mm',
        height: '297mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        padding: '10mm 12mm',
        boxSizing: 'border-box',
        pageBreakAfter: 'always',
        breakAfter: 'page',
      }}
    >
      {/* Decorative Geometry */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Outer Border Inset */}
      <div className={`absolute inset-3 border ${isMinimal ? 'border-slate-300' : 'border-amber-400/20'} rounded-lg pointer-events-none`} />
      <div className={`absolute inset-4 border-dashed border ${isMinimal ? 'border-slate-200' : 'border-amber-400/10'} rounded-md pointer-events-none`} />

      {/* Top Section */}
      <div className="relative z-10 pt-1 shrink-0">
        <div className="flex items-center justify-between border-b pb-3.5 border-slate-700/50">
          <div className="flex items-center gap-2.5">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-base shadow-md ${theme.pill}`}>
              AU
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase opacity-80">
                Exclusive Mathematics Series
              </p>
              <h2 className="text-sm font-bold tracking-tight">
                {customization.facultyName}
              </h2>
            </div>
          </div>

          <div className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase border ${theme.accentBg} flex items-center gap-1.5`}>
            <Sparkles className="w-3 h-3" />
            <span>Master Edition 2024-2026</span>
          </div>
        </div>
      </div>

      {/* Hero Title Section */}
      <div className="relative z-10 my-auto py-4 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold border mb-3 bg-slate-800/40 border-slate-600 text-slate-300">
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span>Chapter-Wise Previous Year Questions (PYQ)</span>
        </div>

        <h1 className="font-serif-heading text-4xl sm:text-5xl font-black tracking-tight leading-none mb-3">
          PROFIT & LOSS
        </h1>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 rounded-full mb-3" />
        
        <p className="text-lg font-bold tracking-wider uppercase opacity-90 mb-2">
          LEVEL - I COMPLETE WORKBOOK
        </p>
        <p className="text-xs opacity-75 max-w-xl mx-auto font-hindi">
          लाभ एवं हानि - सभी महत्वपूर्ण प्रकार के प्रश्नों का संपूर्ण द्विभाषी संकलन (180 प्रश्न)
        </p>

        {/* Highlight Grid */}
        <div className="grid grid-cols-4 gap-2.5 max-w-2xl mx-auto mt-6">
          <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 backdrop-blur-sm">
            <span className="block font-mono-num text-xl font-bold text-amber-400">180</span>
            <span className="text-[10px] opacity-75 uppercase tracking-wider">Curated MCQs</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 backdrop-blur-sm">
            <span className="block font-mono-num text-xl font-bold text-amber-400">13</span>
            <span className="text-[10px] opacity-75 uppercase tracking-wider">Categorized Types</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 backdrop-blur-sm">
            <span className="block font-mono-num text-xl font-bold text-amber-400">100%</span>
            <span className="text-[10px] opacity-75 uppercase tracking-wider">Hindi & English</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 backdrop-blur-sm">
            <span className="block font-mono-num text-xl font-bold text-amber-400">2026</span>
            <span className="text-[10px] opacity-75 uppercase tracking-wider">Latest PYQs</span>
          </div>
        </div>

        {/* 13 Types Classification Index */}
        <div className="mt-4 p-3 rounded-lg bg-slate-900/70 border border-slate-700/70 text-left max-w-2xl mx-auto backdrop-blur-xs">
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-700/80 text-[10px] font-bold uppercase tracking-wider text-amber-300">
            <span>📑 Complete 13 Types Classification Index (प्रकार-वार अनुक्रमणिका)</span>
            <span className="font-mono-num">180 MCQs</span>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
            {ALL_TYPE_DEFINITIONS.map((t) => (
              <div key={t.typeNum} className="flex items-center justify-between py-0.5 border-b border-slate-800/60">
                <span className="font-hindi text-slate-200 truncate">
                  <strong className="text-amber-400 font-mono-num mr-1">{t.badgeLabel}:</strong>
                  {t.nameHi}
                </span>
                <span className="text-slate-400 font-mono-num text-[9px] shrink-0 ml-1.5">
                  {t.range}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Target Exams Badge Section */}
      <div className="relative z-10 pb-1 shrink-0">
        <div className="rounded-lg p-3.5 bg-slate-800/40 border border-slate-700/50">
          <p className="text-[10px] uppercase font-bold tracking-widest text-center mb-2 opacity-80">
            Target Competitive Examinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-semibold">
            {[
              "SSC CGL",
              "SSC CHSL",
              "SSC CPO SI",
              "SSC GD",
              "SSC MTS",
              "UPP Constable",
              "UPP ASI / Radio Operator",
              "UPSI",
              "RRB NTPC",
              "RPF SI",
              "UPPCS CSAT",
              "CDS & State Exams"
            ].map((exam) => (
              <span
                key={exam}
                className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700 text-slate-200 text-[10px]"
              >
                {exam}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 mt-2.5 border-t border-slate-700/40 text-[10px] opacity-75 font-medium">
          <span>Prepared by: Abhishek Upadhyay Sir</span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            Verified Answer Keys & Explanations Included
          </span>
          <span>A4 Print & Digital Format</span>
        </div>
      </div>
    </div>
  );
};
