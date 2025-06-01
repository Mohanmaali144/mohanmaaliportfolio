import { toast as hotToast } from 'react-hot-toast';

export const toast = {
  success: (message: string) =>
    hotToast.success(message, {
      style: {
        background: '#10B981',
        color: '#fff',
        padding: '12px 16px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#10B981',
      },
    }),
  error: (message: string) =>
    hotToast.error(message, {
      style: {
        background: '#EF4444',
        color: '#fff',
        padding: '12px 16px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#EF4444',
      },
    }),
};
