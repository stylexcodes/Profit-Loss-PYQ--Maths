import React, { useState, useMemo, useEffect } from 'react';
import { allQuestions, TOPIC_SECTIONS } from './data/allQuestions';
import { PDFCustomization, Question } from './types';
import { HeaderNav } from './components/HeaderNav';
import { DesignerToolbar } from './components/DesignerToolbar';
import { QuestionCard } from './components/QuestionCard';
import { PDFSheetPage } from './components/PDFSheetPage';
import { PDFCoverPage } from './components/PDFCoverPage';
import { AnswerKeyMatrix } from './components/AnswerKeyMatrix';
import { PDFExportModal } from './components/PDFExportModal';
import { downloadStandaloneBooklet } from './utils/pdfDownloader';
import { PracticeTestView } from './components/PracticeTestView';
import { TopicDashboardGrid } from './components/TopicDashboardGrid';
import { BookOpen, Sparkles, Filter, ChevronUp, CheckCircle, Search, HelpCircle, FileSpreadsheet, LayoutGrid } from 'lucide-react';

export default function App() {
  const [customization, setCustomization] = useState<PDFCustomization>({
    theme: 'royal-navy',
    columnCount: 2,
    fontSize: 'standard',
    showEnglish: true,
    showHindi: true,
    showExamsBadge: true,
    showAnswerKey: true,
    showCoverPage: true,
    showWatermark: false,
    watermarkText: 'MATHS BY ABHISHEK UPADHYAY SIR',
    instituteName: 'Exclusive Mathematics Series',
    facultyName: 'Abhishek Upadhyay Sir',
  });

  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isInteractive, setIsInteractive] = useState<boolean>(false);
  const [isPracticeTestActive, setIsPracticeTestActive] = useState<boolean>(false);
  const [practiceTestTopic, setPracticeTestTopic] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'sheets' | 'cards'>('sheets');
  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('profit_loss_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('profit_loss_bookmarks', JSON.stringify(bookmarks));
    } catch {
      // ignore
    }
  }, [bookmarks]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hash-based routing to support browser back button, direct links, and reload
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#test' || hash === '#practice-test' || hash.startsWith('#test-')) {
        const topicPart = hash.replace(/^#(test-|practice-test|test)/, '');
        if (topicPart) {
          setPracticeTestTopic(topicPart);
        }
        setIsPracticeTestActive(true);
      } else if (isPracticeTestActive && (!hash || hash === '#')) {
        setIsPracticeTestActive(false);
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [isPracticeTestActive]);

  const handleToggleBookmark = (id: number) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter questions based on search query, topic filter, and bookmark filter
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      if (showOnlyBookmarked && !bookmarks.includes(q.id)) {
        return false;
      }

      if (selectedTopic !== 'all') {
        const topic = TOPIC_SECTIONS.find((t) => t.id === selectedTopic);
        if (topic) {
          // Parse range "Q1 - Q4"
          const match = topic.range.match(/Q(\d+)\s*-\s*Q(\d+)/);
          if (match) {
            const start = parseInt(match[1], 10);
            const end = parseInt(match[2], 10);
            if (q.id < start || q.id > end) {
              return false;
            }
          }
        }
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesEn = q.en.toLowerCase().includes(query);
        const matchesHi = q.hi.toLowerCase().includes(query);
        const matchesExam = q.exam.toLowerCase().includes(query);
        const matchesType = q.type.toLowerCase().includes(query);
        const matchesId = q.id.toString() === query || `q${q.id}` === query || `q.${q.id}` === query;
        return matchesEn || matchesHi || matchesExam || matchesType || matchesId;
      }

      return true;
    });
  }, [selectedTopic, searchQuery, showOnlyBookmarked, bookmarks]);

  // Group questions by category / topic for structured rendering
  const groupedQuestions = useMemo(() => {
    const map: { [category: string]: Question[] } = {};
    filteredQuestions.forEach((q) => {
      const cat = q.category || 'General';
      if (!map[cat]) {
        map[cat] = [];
      }
      map[cat].push(q);
    });
    return map;
  }, [filteredQuestions]);

  // Group questions by discrete A4 sheets (8 questions per sheet in 2 columns, 4 in 1 column)
  const chunkSize = customization.columnCount === 1 ? 4 : 8;
  const questionSheets = useMemo(() => {
    const sheets: Question[][] = [];
    for (let i = 0; i < filteredQuestions.length; i += chunkSize) {
      sheets.push(filteredQuestions.slice(i, i + chunkSize));
    }
    return sheets;
  }, [filteredQuestions, chunkSize]);

  const totalWorkbookPages =
    (customization.showCoverPage ? 1 : 0) +
    questionSheets.length +
    (customization.showAnswerKey ? 1 : 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartPracticeTest = (topicId?: string) => {
    const targetTopic = topicId || (selectedTopic !== 'all' ? selectedTopic : 'all');
    setPracticeTestTopic(targetTopic);
    setIsPracticeTestActive(true);
    try {
      window.location.hash = targetTopic !== 'all' ? `test-${targetTopic}` : 'test';
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleExitPracticeTest = () => {
    setIsPracticeTestActive(false);
    try {
      if (window.location.hash) {
        history.pushState(null, '', window.location.pathname + window.location.search);
      }
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Dedicated Test Interface View
  if (isPracticeTestActive) {
    return (
      <PracticeTestView
        questions={allQuestions}
        initialTopicId={practiceTestTopic}
        topicSections={TOPIC_SECTIONS}
        onExit={handleExitPracticeTest}
        bookmarkedIds={bookmarks}
        onToggleBookmark={handleToggleBookmark}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-200 selection:text-slate-900 relative">
      {/* Top Header Navigation */}
      <HeaderNav
        customization={customization}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onQuickDownloadBooklet={() => downloadStandaloneBooklet(allQuestions, customization)}
        isInteractive={isInteractive}
        onToggleInteractive={() => setIsInteractive(!isInteractive)}
        onStartPracticeTest={() => handleStartPracticeTest()}
        bookmarkedCount={bookmarks.length}
        showOnlyBookmarked={showOnlyBookmarked}
        onToggleShowBookmarked={() => setShowOnlyBookmarked(!showOnlyBookmarked)}
        totalQuestions={allQuestions.length}
        filteredCount={filteredQuestions.length}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        {/* Main Dashboard Grid with Standout Practice Test Button Alongside Other Topics */}
        <TopicDashboardGrid
          topics={TOPIC_SECTIONS}
          selectedTopic={selectedTopic}
          onSelectTopic={(topic) => {
            setSelectedTopic(topic);
            setShowOnlyBookmarked(false);
          }}
          onStartPracticeTest={handleStartPracticeTest}
          totalQuestions={allQuestions.length}
        />

        {/* Designer Customization Toolbar */}
        <DesignerToolbar
          customization={customization}
          onUpdate={setCustomization}
          selectedTopic={selectedTopic}
          onSelectTopic={(topic) => {
            setSelectedTopic(topic);
            setShowOnlyBookmarked(false);
          }}
          topics={TOPIC_SECTIONS}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onStartPracticeTest={() => handleStartPracticeTest()}
        />

        {/* Paper Sheet Preview Area */}
        <div id="printable-pdf-area" className="relative bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-8 md:p-12 shadow-sm">
          {/* Designer Cover Page */}
          {customization.showCoverPage && (
            <div className="mb-10 sm:mb-14">
              <PDFCoverPage
                customization={customization}
                totalQuestions={allQuestions.length}
              />
            </div>
          )}

          {/* Running Document Header (Visible in print) */}
          <div className="print-only hidden pb-3 mb-6 border-b-2 border-slate-900">
            <div className="flex items-center justify-between text-[11px] font-bold tracking-wider uppercase text-slate-800">
              <span>MATHS BY ABHISHEK UPADHYAY SIR</span>
              <span>PROFIT & LOSS LEVEL - I (Q.1 TO Q.180)</span>
              <span>PYQ MASTER SERIES</span>
            </div>
          </div>

          {/* Screen Overview Notice Banner with View Mode Switcher */}
          <div className="no-print mb-6 p-4 rounded-xl bg-gradient-to-r from-slate-900 to-blue-950 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-tight">
                  Displaying {filteredQuestions.length} Questions ({questionSheets.length} Un-Split A4 Sheets)
                </h2>
                <p className="text-xs text-slate-300">
                  Total {totalWorkbookPages} pages • Every question kept 100% on the same page
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* View Mode Toggle */}
              <div className="flex rounded-lg bg-slate-800 p-1 border border-slate-700 text-xs">
                <button
                  onClick={() => setViewMode('sheets')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-all ${
                    viewMode === 'sheets'
                      ? 'bg-amber-400 text-slate-950 shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>A4 Discrete Sheets (PDF Perfect)</span>
                </button>
                <button
                  onClick={() => setViewMode('cards')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-all ${
                    viewMode === 'cards'
                      ? 'bg-amber-400 text-slate-950 shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Card Feed</span>
                </button>
              </div>

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  Clear Search
                </button>
              )}
              {selectedTopic !== 'all' && (
                <button
                  onClick={() => setSelectedTopic('all')}
                  className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  Show All Topics
                </button>
              )}
            </div>
          </div>

          {/* Main Questions Rendering */}
          {filteredQuestions.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <p className="font-bold text-slate-700">No questions match your criteria.</p>
              <p className="text-xs text-slate-500">Try clearing filters or search queries.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTopic('all');
                  setShowOnlyBookmarked(false);
                }}
                className="px-4 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'sheets' ? (
            /* Discrete A4 Sheet View: Zero sliced questions! */
            <div className="space-y-6">
              {questionSheets.map((sheetQuestions, idx) => (
                <PDFSheetPage
                  key={idx}
                  sheetNumber={idx + 1}
                  totalSheets={questionSheets.length}
                  pageNumber={(customization.showCoverPage ? 1 : 0) + idx + 1}
                  totalPages={totalWorkbookPages}
                  questions={sheetQuestions}
                  customization={customization}
                  isInteractive={isInteractive}
                  bookmarkedIds={bookmarks}
                  onToggleBookmark={handleToggleBookmark}
                />
              ))}
            </div>
          ) : (
            /* Category Card View */
            <div className="space-y-10">
              {(Object.entries(groupedQuestions) as [string, Question[]][]).map(([category, questions]) => (
                <section key={category} className="print-avoid-break">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-2.5 mb-4 border-b-2 border-slate-900">
                    <div className="w-2.5 h-6 rounded-xs bg-amber-500 shrink-0" />
                    <h2 className="text-sm md:text-base font-bold text-slate-900 tracking-tight font-hindi flex-1">
                      {category}
                    </h2>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                      {questions.length} {questions.length === 1 ? 'Question' : 'Questions'}
                    </span>
                  </div>

                  {/* Grid or Columns of Questions */}
                  <div
                    className={
                      customization.columnCount === 2
                        ? 'grid grid-cols-1 md:grid-cols-2 gap-3.5 print:block print-two-col'
                        : 'space-y-3.5'
                    }
                  >
                    {questions.map((q) => (
                      <QuestionCard
                        key={q.id}
                        question={q}
                        customization={customization}
                        isInteractive={isInteractive}
                        isBookmarked={bookmarks.includes(q.id)}
                        onToggleBookmark={handleToggleBookmark}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* Master Answer Key Matrix */}
          {customization.showAnswerKey && (
            <AnswerKeyMatrix
              questions={allQuestions}
              customization={customization}
            />
          )}

          {/* Running Footer on Print */}
          <div className="print-only hidden pt-6 mt-8 border-t border-slate-300 text-[10px] text-slate-500 flex justify-between items-center">
            <span>Prepared by Abhishek Upadhyay Sir</span>
            <span>Target: SSC CGL, CHSL, CPO, GD, UPP, UPSI, RRB</span>
            <span>Master Edition (180 Questions Bilingual)</span>
          </div>
        </div>
      </main>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="no-print fixed bottom-6 right-6 z-30 p-3 rounded-full bg-slate-900 text-amber-400 shadow-xl hover:bg-slate-800 transition-all cursor-pointer border border-slate-700"
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Export & PDF Modal */}
      <PDFExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        customization={customization}
        questions={allQuestions}
      />
    </div>
  );
}
