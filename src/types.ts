export interface QuestionOption {
  label: 'a' | 'b' | 'c' | 'd';
  text: string;
}

export interface Question {
  id: number;
  category: string;
  type: string;
  typeNum?: number;
  typeLabel?: string;
  typeNameHi?: string;
  typeNameEn?: string;
  shortName?: string;
  typeTitle?: string;
  year?: string;
  exam: string;
  en: string;
  hi: string;
  options: QuestionOption[];
  correctAnswer?: 'a' | 'b' | 'c' | 'd';
  pageOriginal?: number;
  solutionHint?: string;
}

export type DesignTheme = 'royal-navy' | 'oxford-emerald' | 'monolith-slate' | 'burgundy-luxury' | 'clean-minimal';

export interface PDFCustomization {
  title: string;
  subtitle: string;
  facultyName: string;
  examCoverage: string;
  theme: DesignTheme;
  showWatermark: boolean;
  watermarkText: string;
  columns: 1 | 2;
  fontSize: 'compact' | 'normal' | 'comfortable';
  showHindi: boolean;
  showEnglish: boolean;
  showExamsBadge: boolean;
  showAnswerKey: boolean;
  showCoverPage: boolean;
  pageHeader: string;
}
