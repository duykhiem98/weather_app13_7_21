import Toast from 'react-native-toast-message';

export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';

export class ToastServiceClass {
  _getRealMessage = (message: string): string => {
    return message;
  };

  show = (
      message: any,
  ) => {
    if (typeof message !== 'string') return;
    return Toast.show({
          type: 'success',
          text1: message || '',
          visibilityTime: 3000,
          autoHide: true,
          topOffset: 60,
        }
    );
  };

  showError = (
      message: any,
  ) => {
    return Toast.show({
          type: 'error',
          text1: message,
          visibilityTime: 3000,
          autoHide: true,
          topOffset: 60,
        }
    );
  };
}

const ToastService = new ToastServiceClass();

export default ToastService;
