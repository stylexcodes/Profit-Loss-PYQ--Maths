import React from 'react';
import { Download, Printer, Star, Sparkles, GraduationCap, ExternalLink, FileCode } from 'lucide-react';
import { PDFCustomization } from '../types';

interface Props {
  customization: PDFCustomization;
  onOpenExportModal: () => void;
  onQuickDownloadBooklet: () => void;
  isInteractive: boolean;
  onToggleInteractive: () => void;
  bookmarkedCount: number;
  showOnlyBookmarked: boolean;
  onToggleShowBookmarked: () => void;
  totalQuestions: number;
  filteredCount: number;
}

export const HeaderNav: React.FC<Props> = ({
  customization,
  onOpenExportModal,
  onQuickDownloadBooklet,
  isInteractive,
  onToggleInteractive,
  bookmarkedCount,
  showOnlyBookmarked,
  onToggleShowBookmarked,
  totalQuestions,
  filteredCount,
}) => {
  const handlePrint = () => {
    try {
      window.print();
    } catch {
      window.open(window.location.href, '_blank');
    }
  };

  return (
    <header className="no-print sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3 flex-wrap">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 font-bold flex items-center justify-center shadow-md shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-sm sm:text-base text-white tracking-tight">
                Maths By Abhishek Upadhyay Sir
              </h1>
              <span className="hidden sm:inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                PROFIT & LOSS
              </span>
            </div>
            <p className="text-xs text-slate-400 font-hindi">
              लाभ एवं हानि (लेवल - I) • Q1 से Q180 संपूर्ण संग्रह • 2024-2026 PYQ
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Practice Test mode toggle */}
          <button
            onClick={onToggleInteractive}
            className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
              isInteractive
                ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-sm'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700'
            }`}
            title={isInteractive ? 'Practice test mode active: click to disable' : 'Turn on interactive practice test mode'}
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>{isInteractive ? 'Test Mode: ON' : 'Practice Test'}</span>
          </button>

          {/* Bookmarks Filter */}
          {bookmarkedCount > 0 && (
            <button
              onClick={onToggleShowBookmarked}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                showOnlyBookmarked
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-slate-900 text-amber-300 border-slate-700 hover:bg-slate-800'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Starred ({bookmarkedCount})</span>
            </button>
          )}

          {/* Direct 1-Click Fast File Download */}
          <button
            onClick={onQuickDownloadBooklet}
            title="Download Instant Complete Offline Booklet (.html) with print to PDF"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <FileCode className="w-4 h-4 text-blue-200" />
            <span>Download File</span>
          </button>

          {/* Open in Standalone Tab (To bypass iframe print blocks) */}
          <a
            href={window.location.href}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new browser tab to print or save PDF without iframe restrictions"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            <span>Open in Tab</span>
          </a>

          {/* Primary Export / Download Modal Trigger */}
          <button
            onClick={onOpenExportModal}
            className="px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-amber-500/20 transition-all cursor-pointer active:scale-98"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
