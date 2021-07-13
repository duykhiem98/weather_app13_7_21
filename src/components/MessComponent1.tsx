import React, { memo, useCallback } from "react";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { BaseStyles } from "@/themes/BaseStyles";
import { MessComponent } from "@/components/MessComponent";
import { MessItem } from "@/screens/MessScreens/components/MessItem";

const Container = styled.View`
  flex: 1;
  background: ${p => p.theme.backgroundColor};
`;
const renderItem = ({ item }: any) => <MessItem id={item.toString()} />;
const keyExtractor = (item: any) => item.toString();
export const MessComponent1 = memo(function MessComponent1() {
  return (
    <Container>
      <View style={BaseStyles.flex1}>
        <FlatList data={Array.from(new Array(50).keys())}
                  renderItem={renderItem}
                  keyExtractor={keyExtractor}
                  ListHeaderComponent={<MessComponent />}
        />
      </View>
    </Container>
  );
});
