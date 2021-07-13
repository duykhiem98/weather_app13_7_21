import React from 'react';
import {RefreshControl, StyleSheet, View, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {StyledText} from '@/components/CommonStyled';
import {translate} from '@/global';
import {EmptyViewSvg} from '../Views/EmptyViewSvg';
import {BaseRefreshControl} from './BaseRefreshControl';

interface OwnProps {
  text?: string;
  containerStyle?: ViewStyle;
  refreshing: boolean;
  onRefresh: () => void;
}

type Props = OwnProps;

const SScrollView = styled(ScrollView)`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const EmptyListScrollView = React.memo(
  ({containerStyle, refreshing, onRefresh, ...restProps}: Props) => {
    return (
      <SScrollView
        style={styles.svContainer}
        contentContainerStyle={styles.svContentContainer}
        refreshControl={
          <BaseRefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={[styles.container, containerStyle]}>
          <EmptyViewSvg />
          <StyledText.Grey1 style={styles.text}>
            {translate(restProps?.text || 'list.No_data')}
          </StyledText.Grey1>
        </View>
      </SScrollView>
    );
  },
);

const styles = StyleSheet.create({
  svContainer: {width: '100%', flex: 1},
  svContentContainer: {
    width: '100%',
    minHeight: '100%',
  },
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 113,
    height: 116,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 20,
    fontSize: 15,
    lineHeight: 18,
  },
});
