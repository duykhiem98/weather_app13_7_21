import React, {FunctionComponent, useCallback, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import {ErrorCodeMap} from '@/services/ToastService';
import {translate} from '@/global';
import {Colors} from '@/themes';

interface OwnProps {
  onRetry: () => void;
  containerStyle?: ViewStyle;
  message?: string;
  errorCode?: string;
  textButton?: string;
}

type Props = OwnProps;

const SingleLineText = styled(Text)`
  color: ${(props) => props.theme.grey1};
  font-family: Roboto-Regular;
`;
const ErrorView: FunctionComponent<Props> = (props) => {
  const {containerStyle, onRetry, message, errorCode, textButton} = props;

  const getRealMessage = useCallback((message: string): string => {
    //@ts-ignore
    if (ErrorCodeMap[message]) {
      //@ts-ignore
      return translate(ErrorCodeMap[message]);
    }
    if (Number.isNaN(parseInt(message))) {
      return message;
    }
    return translate('error.unknown_error');
  }, []);

  const messageShow = useMemo(() => {
    if (message) {
      return message;
    }
    if (errorCode) {
      return getRealMessage(errorCode);
    }
    return '';
  }, [message, getRealMessage, errorCode]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={StyleSheet.flatten([styles.retryButton, containerStyle])}
        onPress={onRetry}>
        {/*<Image style={styles.image} source={IMG_ERROR} />*/}
        <SingleLineText style={styles.errorText}>
          {translate('error.error_occurred')}
        </SingleLineText>
        <SingleLineText style={styles.checkInternet}>
          {messageShow
            ? messageShow
            : translate('error.check_internet_connection')}
        </SingleLineText>

        <SingleLineText style={styles.retryButtonText}>
          {textButton ? textButton : translate('error.reload')}
        </SingleLineText>
      </TouchableOpacity>
    </View>
  );
};

const MemoErrorView = React.memo(ErrorView);
export {MemoErrorView as ErrorView};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: 142,
    height: 133,
    resizeMode: 'contain',
  },
  retryButton: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  retryButtonText: {
    marginVertical: 10,
    fontSize: 15,
    color: Colors.blue1,
    textDecorationLine: 'underline',
  },
  errorText: {
    fontSize: 17,
  },
  checkInternet: {
    marginVertical: 10,
    fontSize: 15,
  },
});
