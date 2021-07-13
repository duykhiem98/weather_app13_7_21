export * from 'react-redux/index';
import 'styled-components/native';

declare type RootState = ReturnType<
    typeof import('./src/store')['store']['getState']
    >;

declare module 'react-redux' {
  export function useSelector<TSelected = unknown>(
      selector: (state: RootState) => TSelected,
      equalityFn?: (left: TSelected, right: TSelected) => boolean,
  ): TSelected;
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    backgroundColor: string,
    backgroundColor1: string,
    backgroundColor2: string,
    gray1: string,
    gray2: string,
    gray3: string,
    gray4: string,
    gray5: string,
    gray6: string,
    gray7: string,
    divider: string,
    name: 'dark' | 'light'
  }
}
