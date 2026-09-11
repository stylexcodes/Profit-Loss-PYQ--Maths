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
  Mail,
  HardDrive,
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
  userEmail?: string;
}

export const PDFExportModal: React.FC<Props> = ({
  isOpen,
  onClose,
  customization,
  questions,
  userEmail = "itsrajat2002@gmail.com"
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

  // 3. Save to Google Drive
  const handleSaveToDrive = async () => {
    setIsGeneratingPDF(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    try {
      await generateAndDownloadPDF(
        'printable-pdf-area',
        {
          fileName: 'Maths_Profit_and_Loss_Level_1_Abhishek_Sir.pdf',
          scale: 3.0,
          quality: 0.98,
          onProgress: (p) => setDownloadProgress(p)
        }
      );
      setSuccessMessage('HD PDF downloaded! Opening Google Drive so you can save or drop it into your Drive...');
      setTimeout(() => {
        window.open('https://drive.google.com/drive/my-drive', '_blank');
      }, 1200);
    } catch (err: any) {
      console.error('Drive save error:', err);
      setErrorMessage(err?.message || 'Could not compile PDF. Try the Offline Booklet option.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // 4. Email PDF to user
  const handleEmailPDF = async () => {
    setIsGeneratingPDF(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    try {
      await generateAndDownloadPDF(
        'printable-pdf-area',
        {
          fileName: 'Maths_Profit_and_Loss_Level_1_Abhishek_Sir.pdf',
          scale: 3.0,
          quality: 0.98,
          onProgress: (p) => setDownloadProgress(p)
        }
      );
      setSuccessMessage(`HD PDF downloaded to your device! Opening Gmail to send to ${userEmail}...`);

      const subject = encodeURIComponent('Maths Profit & Loss Level 1 (Q1-Q180) - Abhishek Upadhyay Sir');
      const body = encodeURIComponent(
        `Dear Student,\n\nHere is your requested Profit & Loss Level 1 Workbook (Q.1 to Q.180 Bilingual) by Abhishek Upadhyay Sir in High-Definition 300 DPI.\n\nThe PDF has been downloaded to your device as 'Maths_Profit_and_Loss_Level_1_Abhishek_Sir.pdf'. Please find it in your Downloads folder and attach it.\n\nKey Highlights:\n- 180 Questions bilingual (Hindi & English)\n- Type-wise classification (Types 1 to 13)\n- PYQs with exam badges (2024-2026)\n- Master Answer Key (1-180)\n\nMaths By Abhishek Upadhyay Sir`
      );

      setTimeout(() => {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=${subject}&body=${body}`, '_blank');
      }, 1000);
    } catch (err: any) {
      console.error('Email PDF error:', err);
      setErrorMessage(err?.message || 'Could not compile PDF. Try the Offline Booklet option.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // 5. Direct Standalone Booklet Download (.html)
  const handleDownloadBooklet = () => {
    downloadStandaloneBooklet(
      questions,
      customization,
      'Maths_Profit_and_Loss_Level_1_Abhishek_Sir.html'
    );
  };

  // 6. Direct Word Document Download (.doc)
  const handleDownloadDoc = () => {
    downloadWordDocument(
      questions,
      'Maths_Profit_and_Loss_Level_1_Abhishek_Sir.doc'
    );
  };

  // 7. Copy raw text
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
          {/* Option 1: Direct High-Definition PDF File (.pdf) */}
          <div className="p-4 rounded-xl border-2 border-amber-400/80 bg-gradient-to-br from-amber-50/70 to-amber-100/30 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-slate-950">
                    Recommended
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    Download High-Definition .PDF File
                  </h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Renders discrete A4 sheets at <strong>300 DPI print quality</strong> with subpixel text smoothing. No blurriness, no cut questions, and crystal clear Hindi/English mathematical formulas.
                </p>

                {/* Resolution Selector */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[11px] font-semibold text-slate-600">Print Quality:</span>
                  <div className="inline-flex rounded-lg bg-white/80 p-0.5 border border-amber-200 text-xs">
                    <button
                      onClick={() => setDpiMode('300')}
                      className={`px-2.5 py-0.5 rounded-md font-bold text-[11px] transition-all cursor-pointer ${
                        dpiMode === '300'
                          ? 'bg-slate-900 text-amber-300 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      300 DPI (Ultra-Sharp)
                    </button>
                    <button
                      onClick={() => setDpiMode('200')}
                      className={`px-2.5 py-0.5 rounded-md font-bold text-[11px] transition-all cursor-pointer ${
                        dpiMode === '200'
                          ? 'bg-slate-900 text-amber-300 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
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
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all shrink-0 cursor-pointer self-start sm:self-center"
              >
                {isGeneratingPDF ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                    <span>Rendering HD...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>Download .PDF</span>
                  </>
                )}
              </button>
            </div>

            {/* Progress bar */}
            {isGeneratingPDF && downloadProgress && (
              <div className="mt-3 pt-3 border-t border-amber-200">
                <div className="flex items-center justify-between text-xs font-semibold text-amber-950 mb-1">
                  <span>{downloadProgress.message}</span>
                  <span className="font-mono-num">{downloadProgress.progress}%</span>
                </div>
                <div className="w-full h-2 bg-amber-200/70 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all duration-300"
                    style={{ width: `${downloadProgress.progress}%` }}
                  />
                </div>
              </div>
            )}

            {successMessage && (
              <div className="mt-3 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{successMessage}</span>
              </div>
            )}

            {errorMessage && (
              <div className="mt-3 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          {/* Option 2: 100% Vector Print to PDF (Zero Blur, Infinite Zoom) */}
          <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/50 hover:bg-purple-50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-700 text-white">
                  100% Vector Text
                </span>
                <h4 className="font-bold text-slate-900 text-sm">
                  Save as Vector PDF (Browser Print Engine)
                </h4>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Launches your system's native Print to PDF engine with pure vector text. Zero pixelation at 1000% zoom, 100% selectable Hindi/English font glyphs!
              </p>
            </div>

            <button
              onClick={handleVectorPrint}
              className="px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all shrink-0 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-purple-200" />
              <span>Vector Print</span>
            </button>
          </div>

          {/* Option 3: Save to Google Drive */}
          <div className="p-4 rounded-xl border border-sky-200 bg-sky-50/70 hover:bg-sky-50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-sky-600 text-white">
                  Google Drive
                </span>
                <h4 className="font-bold text-slate-900 text-sm">
                  Save HD PDF to Google Drive
                </h4>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Generates the High-Definition PDF file and opens your Google Drive (<code className="text-sky-800 font-semibold">drive.google.com</code>) to upload or store your workbook permanently.
              </p>
            </div>

            <button
              disabled={isGeneratingPDF}
              onClick={handleSaveToDrive}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all shrink-0 cursor-pointer"
            >
              <HardDrive className="w-4 h-4 text-white" />
              <span>Save to Drive</span>
            </button>
          </div>

          {/* Option 4: Send to Email */}
          <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/70 hover:bg-indigo-50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white">
                  Email Delivery
                </span>
                <h4 className="font-bold text-slate-900 text-sm">
                  Send HD PDF to Email ({userEmail})
                </h4>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Downloads the HD PDF and opens Gmail composer addressed to <span className="font-semibold text-indigo-900">{userEmail}</span> with pre-filled subject and workbook details.
              </p>
            </div>

            <button
              disabled={isGeneratingPDF}
              onClick={handleEmailPDF}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all shrink-0 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Send to Email</span>
            </button>
          </div>

          {/* Option 5: Instant Offline Booklet (.html) */}
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

          {/* Option 6: Microsoft Word / Google Docs (.doc) */}
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
