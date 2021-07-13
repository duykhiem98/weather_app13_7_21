import React, { memo, useEffect } from "react";
import styled from "styled-components/native";
import { HomeHeader } from "./HomeHeader";
import { FlatList } from "react-native";
import { PostComponent } from "@/components/PostComponent";
import { useAsyncFn } from "@/hooks/useAsyncFn";
import { requestGetPostList } from "@/store/post/functions";
import { usePostsByQuery } from "@/store/post";

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;

const renderItem = ({ item }: any) => <PostComponent id={item} />;

const keyExtractor = (item: any) => item.toString();

export const HomeScreen = memo(function HomeScreen() {
  const allPost = usePostsByQuery("all") || [];

  const [{}, getData] = useAsyncFn(async () => {
    requestGetPostList().then();
  }, []);

  useEffect(() => {
    getData().then();
  }, []);

  return (
    <Container>
      <HomeHeader />
      <FlatList
        data={allPost}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={7}
      />
    </Container>
  );
});
