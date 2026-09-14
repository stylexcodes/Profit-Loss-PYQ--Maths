import React, { useState } from 'react';
import {
  Download,
  FileText,
  Copy,
  Check,
  X,
  ExternalLink,
  Printer,
  Sparkles,
  Loader2,
  FileCode,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { Question, PDFCustomization } from '../types';
import {
  generateAndDownloadPDF,
  downloadStandaloneBooklet,
  openVectorPrintBooklet,
  downloadWordDocument,
  PDFGenerationProgress
} from '../utils/pdfDownloader';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  customization: PDFCustomization;
  questions: Question[];
}

export const PDFExportModal: React.FC<Props> = ({
  isOpen,
  onClose,
  customization,
  questions,
}) => {
  const [copied, setCopied] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<PDFGenerationProgress | null>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [dpiMode, setDpiMode] = useState<'300' | '200'>('300');

  if (!isOpen) return null;

  // 1. Direct PDF Download using jsPDF & High-Definition HTML rendering
  const handleDirectDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    try {
      const scale = dpiMode === '300' ? 3.0 : 2.2;
      await generateAndDownloadPDF(
        'printable-pdf-area',
        {
          fileName: 'Maths_Profit_and_Loss_Level_1_Abhishek_Sir.pdf',
          scale: scale,
          quality: 0.98,
          onProgress: (p) => setDownloadProgress(p)
        }
      );
      setSuccessMessage('High-Definition 300 DPI PDF generated and downloaded successfully!');
    } catch (err: any) {
      console.error('Direct PDF error:', err);
      setErrorMessage(
        err?.message || 'Error generating PDF. You can also use the Vector Print or Offline Booklet options.'
      );
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // 2. Vector Print to PDF (100% Native Vector Text)
  const handleVectorPrint = () => {
    try {
      openVectorPrintBooklet(questions, customization);
    } catch (err: any) {
      console.error('Vector print error:', err);
      downloadStandaloneBooklet(questions, customization);
    }
  };

  // 3. Direct Standalone Booklet Download (.html)
  const handleDownloadBooklet = () => {
    downloadStandaloneBooklet(
      questions,
      customization,
      'Maths_Profit_and_Loss_Level_1_Abhishek_Sir.html'
    );
  };

  // 4. Direct Word Document Download (.doc)
  const handleDownloadDoc = () => {
    downloadWordDocument(
      questions,
      'Maths_Profit_and_Loss_Level_1_Abhishek_Sir.doc'
    );
  };

  // 5. Copy raw text
  const handleCopyText = () => {
    const text = questions
      .map(
        (q) =>
          `Q.${q.id} [${q.type}] (${q.exam} - ${q.year || ''})\nEN: ${q.en}\nHI: ${q.hi}\nOptions: ${q.options.map((o) => `(${o.label}) ${o.text}`).join('  ')}\nAnswer: (${q.correctAnswer.toUpperCase()})\n${q.solutionHint ? `Solution: ${q.solutionHint}\n` : ''}`
      )
      .join('\n---\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-5 sm:p-6 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold">Download High-Definition PDF</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950 uppercase tracking-wide">
                  300 DPI HD
                </span>
              </div>
              <p className="text-xs text-slate-300">
                180 Questions Bilingual • Razor-Sharp Crisp Printing by Abhishek Sir
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
          {/* Option 1: 100% Vector Print to PDF (Zero Blur, Infinite Zoom) - Now Recommended */}
          <div className="p-4 rounded-xl border-2 border-emerald-500/80 bg-gradient-to-br from-emerald-50/70 to-emerald-100/30 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500 text-white shadow-sm">
                    Recommended (Zero Blur)
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    Save as 100% Vector PDF
                  </h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Launches your system's native Print to PDF engine. Guarantees <strong>100% pure vector text</strong>, zero pixelation at 10,000% zoom, completely selectable text, and perfectly crisp Hindi/English fonts.
                </p>
                <div className="flex items-center gap-2 pt-1 text-[11px] font-medium text-emerald-800">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Tip: In the print dialog, select "Save as PDF".</span>
                </div>
              </div>

              <button
                onClick={handleVectorPrint}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-500/25 transition-all shrink-0 cursor-pointer self-start sm:self-center hover:scale-105 active:scale-95"
              >
                <Printer className="w-4 h-4 text-emerald-100" />
                <span>Save Vector PDF</span>
              </button>
            </div>
          </div>

          {/* Option 2: Direct High-Definition PDF File (.pdf) (Image Based - Fallback) */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700">
                  Fallback Engine
                </span>
                <h4 className="font-bold text-slate-900 text-sm">
                  Download Flattened PDF (Image-based)
                </h4>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Renders discrete A4 sheets via HTML2Canvas at 300 DPI. Note: Text may become blurry when heavily zoomed in because it is rendered as an image, but it guarantees layout accuracy on older browsers.
              </p>
              
              {/* Resolution Selector */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[11px] font-semibold text-slate-600">Quality:</span>
                <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200 text-xs">
                  <button
                    onClick={() => setDpiMode('300')}
                    className={`px-2.5 py-0.5 rounded-md font-bold text-[11px] transition-all cursor-pointer ${
                      dpiMode === '300'
                        ? 'bg-slate-700 text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    300 DPI (HD)
                  </button>
                  <button
                    onClick={() => setDpiMode('200')}
                    className={`px-2.5 py-0.5 rounded-md font-bold text-[11px] transition-all cursor-pointer ${
                      dpiMode === '200'
                        ? 'bg-slate-700 text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    200 DPI (Fast)
                  </button>
                </div>
              </div>
            </div>

            <button
              disabled={isGeneratingPDF}
              onClick={handleDirectDownloadPDF}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:bg-slate-600 text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all shrink-0 cursor-pointer self-start sm:self-center"
            >
              {isGeneratingPDF ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Rendering...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Image PDF</span>
                </>
              )}
            </button>
          </div>

          {/* Progress bar for Option 2 */}
          {isGeneratingPDF && downloadProgress && (
            <div className="mt-3 pt-3 border-t border-slate-200">
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 mb-1">
                <span>{downloadProgress.message}</span>
                <span className="font-mono-num">{downloadProgress.progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-slate-800 rounded-full transition-all duration-300"
                  style={{ width: `${downloadProgress.progress}%` }}
                />
              </div>
            </div>
          )}

          {successMessage && (
            <div className="mt-2 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {errorMessage && (
            <div className="mt-2 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Option 3: Instant Offline Booklet (.html) */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
                  Instant File
                </span>
                <h4 className="font-bold text-slate-900 text-sm">
                  Download Offline Printable Booklet (.html)
                </h4>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Instant 1-click download. Self-contained file with all 180 questions, embedded Google Fonts, discrete A4 sheets, and 1-click print button.
              </p>
            </div>

            <button
              onClick={handleDownloadBooklet}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all shrink-0 cursor-pointer"
            >
              <FileCode className="w-4 h-4 text-blue-200" />
              <span>Download .HTML</span>
            </button>
          </div>

          {/* Option 4: Microsoft Word / Google Docs (.doc) */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Editable Document
                </span>
                <h4 className="font-bold text-slate-900 text-sm">
                  Download Word Document (.doc)
                </h4>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Directly open and edit in Microsoft Word, WPS Office, or Google Docs.
              </p>
            </div>

            <button
              onClick={handleDownloadDoc}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all shrink-0 cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-200" />
              <span>Download .DOC</span>
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-5 sm:px-6 py-3.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied 180 Questions!' : 'Copy Raw Text'}</span>
            </button>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 font-semibold transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
