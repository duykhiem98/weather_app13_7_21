export * from '@react-navigation/native';
import {useNavigation as _useNavigation} from '@react-navigation/native';
export const useNavigation = _useNavigation;

export const Core = {
  baseUrl: 'https://api.drlena.vn', //'https://api.depchuanykhoa.com',
  baseLoginUrl: 'https://authenticator.drlena.vn', //'https://api.depchuanykhoa.com',
  baseChatUrl: 'https://chat.drlena.vn', //'https://api.depchuanykhoa.com',
  baseAdminUrl: 'https://adminapi.drlena.vn', //'https://api.depchuanykhoa.com',
  cdn: 'https://login.noron.vn', //'https://api.depchuanykhoa.com',
  socket: 'wss://chat.drlena.vn/ws', //'https://api.depchuanykhoa.com',
  oneSignalAppId: 'fa6faa58-1654-4a05-b7b4-fa39440034f6'
};
