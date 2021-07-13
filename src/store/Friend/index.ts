import { createDynamicReducer } from "@/utils/createDynamicReducer";
import { RawFriend } from "@/types";
import { batch } from "react-redux";

const {
  setStore,
  reducer,
  sync,
  useByKey,
  setQueries,
  useKeysByQuery,
} = createDynamicReducer<RawFriend>('friends', 'id');

export const setFriendStore = setStore;
export const friendReducer = reducer;
export const syncFriends = sync;
export const useFriend = useByKey;
export const setFriendQueries = setQueries;
export const useFriendsByQuery = useKeysByQuery;

export const syncAllFiends = (accessories: RawFriend[]) => {
  let query: { [id: string]: string[] } = {};
  let ids: string[] = [];

  for (let access of accessories) {
    ids.push(access.id.toString());
  }

  batch(() => {
    syncFriends(accessories);
    setFriendQueries({
      all: ids,
      ...query,
    });
  });
};
