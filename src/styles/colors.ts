export const colors = {
  primary: '#DD5045',    // 레드계열
  secondary: '#60554A',  // 브라운톤
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  }
} as const;

export type ColorKey = keyof typeof colors;
export type GrayKey = keyof typeof colors.gray; 