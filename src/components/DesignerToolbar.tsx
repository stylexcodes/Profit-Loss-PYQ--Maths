import React from 'react';
import { PDFCustomization, DesignTheme } from '../types';
import { Palette, Columns, Type, Layers, CheckSquare, Eye, Sparkles } from 'lucide-react';

interface Props {
  customization: PDFCustomization;
  onUpdate: (updater: (prev: PDFCustomization) => PDFCustomization) => void;
  selectedTopic: string;
  onSelectTopic: (topic: string) => void;
  topics: Array<{ id: string; title: string; count: number; range: string }>;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onStartPracticeTest?: () => void;
}

export const DesignerToolbar: React.FC<Props> = ({
  customization,
  onUpdate,
  selectedTopic,
  onSelectTopic,
  topics,
  searchQuery,
  onSearchChange,
  onStartPracticeTest,
}) => {
  const themes: Array<{ id: DesignTheme; label: string; accentColor: string }> = [
    { id: 'royal-navy', label: 'Royal Navy & Gold', accentColor: 'bg-blue-900 border-amber-400' },
    { id: 'oxford-emerald', label: 'Emerald Executive', accentColor: 'bg-emerald-900 border-emerald-400' },
    { id: 'burgundy-luxury', label: 'Burgundy Prestige', accentColor: 'bg-rose-900 border-rose-400' },
    { id: 'monolith-slate', label: 'Slate Monolith', accentColor: 'bg-slate-900 border-slate-400' },
    { id: 'clean-minimal', label: 'Clean Print (White)', accentColor: 'bg-white border-slate-400' },
  ];

  return (
    <div className="no-print bg-white border border-slate-200/90 rounded-2xl p-4 md:p-5 shadow-xs mb-6 space-y-4">
      {/* Top Toolbar Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">PDF Designer Studio</h3>
            <p className="text-[11px] text-slate-500">
              Customize typography, themes, columns & styling before export
            </p>
          </div>
        </div>

        {/* Search input */}
        <div className="flex-1 sm:max-w-xs">
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full text-xs px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-slate-50"
          />
        </div>
      </div>

      {/* Grid of Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Theme Selector */}
        <div className="space-y-1.5">
          <label className="font-semibold text-slate-700 flex items-center gap-1">
            <Palette className="w-3.5 h-3.5 text-slate-500" />
            <span>Color Aesthetics</span>
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => onUpdate((prev) => ({ ...prev, theme: t.id }))}
                className={`px-2 py-1.5 rounded-md border text-left flex items-center gap-1.5 transition-all text-[11px] ${
                  customization.theme === t.id
                    ? 'border-amber-500 bg-amber-50/50 font-bold text-amber-950 ring-1 ring-amber-400'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span className={`w-3 h-3 rounded-full border ${t.accentColor} shrink-0`} />
                <span className="truncate">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Layout & Columns */}
        <div className="space-y-1.5">
          <label className="font-semibold text-slate-700 flex items-center gap-1">
            <Columns className="w-3.5 h-3.5 text-slate-500" />
            <span>Layout Columns</span>
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => onUpdate((prev) => ({ ...prev, columnCount: 1 }))}
              className={`px-2.5 py-1.5 rounded-md border text-center transition-all ${
                customization.columnCount === 1
                  ? 'border-amber-500 bg-amber-50 font-bold text-amber-950'
                  : 'border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              1 Column (Spacious)
            </button>
            <button
              onClick={() => onUpdate((prev) => ({ ...prev, columnCount: 2 }))}
              className={`px-2.5 py-1.5 rounded-md border text-center transition-all ${
                customization.columnCount === 2
                  ? 'border-amber-500 bg-amber-50 font-bold text-amber-950'
                  : 'border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              2 Columns (Magazine)
            </button>
          </div>

          {/* Density font size */}
          <div className="pt-1 flex items-center justify-between gap-1">
            <span className="text-[11px] text-slate-500">Text Size:</span>
            {(['compact', 'standard', 'comfortable'] as const).map((sz) => (
              <button
                key={sz}
                onClick={() => onUpdate((prev) => ({ ...prev, fontSize: sz }))}
                className={`px-2 py-0.5 rounded capitalize text-[10px] ${
                  customization.fontSize === sz
                    ? 'bg-slate-900 text-amber-300 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Language & Badges */}
        <div className="space-y-1.5">
          <label className="font-semibold text-slate-700 flex items-center gap-1">
            <Type className="w-3.5 h-3.5 text-slate-500" />
            <span>Language Visibility</span>
          </label>
          <div className="grid grid-cols-3 gap-1">
            <button
              onClick={() => onUpdate((prev) => ({ ...prev, showEnglish: true, showHindi: true }))}
              className={`px-2 py-1.5 rounded-md border text-center text-[11px] ${
                customization.showEnglish && customization.showHindi
                  ? 'border-amber-500 bg-amber-50 font-bold text-amber-950'
                  : 'border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              Both
            </button>
            <button
              onClick={() => onUpdate((prev) => ({ ...prev, showEnglish: false, showHindi: true }))}
              className={`px-2 py-1.5 rounded-md border text-center text-[11px] ${
                !customization.showEnglish && customization.showHindi
                  ? 'border-amber-500 bg-amber-50 font-bold text-amber-950'
                  : 'border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              Hindi Only
            </button>
            <button
              onClick={() => onUpdate((prev) => ({ ...prev, showEnglish: true, showHindi: false }))}
              className={`px-2 py-1.5 rounded-md border text-center text-[11px] ${
                customization.showEnglish && !customization.showHindi
                  ? 'border-amber-500 bg-amber-50 font-bold text-amber-950'
                  : 'border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              English Only
            </button>
          </div>

          <label className="flex items-center gap-2 pt-1.5 cursor-pointer text-[11px] text-slate-700 select-none">
            <input
              type="checkbox"
              checked={customization.showExamsBadge}
              onChange={(e) => onUpdate((prev) => ({ ...prev, showExamsBadge: e.target.checked }))}
              className="rounded border-slate-300 text-amber-600 focus:ring-amber-500"
            />
            <span>Show Exam & Shift Badges</span>
          </label>
        </div>

        {/* Section Inclusions */}
        <div className="space-y-1.5">
          <label className="font-semibold text-slate-700 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-slate-500" />
            <span>PDF Sections</span>
          </label>
          <div className="space-y-1.5 text-[11px]">
            <label className="flex items-center gap-2 cursor-pointer text-slate-700 select-none">
              <input
                type="checkbox"
                checked={customization.showCoverPage}
                onChange={(e) => onUpdate((prev) => ({ ...prev, showCoverPage: e.target.checked }))}
                className="rounded border-slate-300 text-amber-600 focus:ring-amber-500"
              />
              <span>Include Designer Cover Page</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-slate-700 select-none">
              <input
                type="checkbox"
                checked={customization.showAnswerKey}
                onChange={(e) => onUpdate((prev) => ({ ...prev, showAnswerKey: e.target.checked }))}
                className="rounded border-slate-300 text-amber-600 focus:ring-amber-500"
              />
              <span>Include Complete 180 Answer Key</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-slate-700 select-none">
              <input
                type="checkbox"
                checked={customization.showWatermark}
                onChange={(e) => onUpdate((prev) => ({ ...prev, showWatermark: e.target.checked }))}
                className="rounded border-slate-300 text-amber-600 focus:ring-amber-500"
              />
              <span>Faint Security Watermark</span>
            </label>
          </div>
        </div>
      </div>

      {/* Topic Filter Pills */}
      <div className="pt-2 border-t border-slate-100">
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 text-xs scrollbar-thin">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
            Topic Filter:
          </span>

          {/* Standout Practice Test Button with Bold Color & Shadow */}
          {onStartPracticeTest && (
            <button
              onClick={onStartPracticeTest}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full shrink-0 font-extrabold text-xs bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-md shadow-amber-500/25 border border-amber-300 transition-all cursor-pointer hover:scale-105 active:scale-95"
              title="Launch Practice Test Interface with instant audio and scoring"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Practice Test</span>
            </button>
          )}

          <button
            onClick={() => onSelectTopic('all')}
            className={`px-2.5 py-1 rounded-full shrink-0 font-medium transition-all ${
              selectedTopic === 'all'
                ? 'bg-slate-900 text-amber-300 shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Topics (180)
          </button>
          {topics.map((t) => (
            <button
              key={t.id}
              onClick={() => onSelectTopic(t.id)}
              className={`px-2.5 py-1 rounded-full shrink-0 font-medium transition-all ${
                selectedTopic === t.id
                  ? 'bg-slate-900 text-amber-300 shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.title} ({t.count})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
