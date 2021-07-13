import { createDynamicReducer } from "@/utils/createDynamicReducer";
import { RawListSearch } from "@/types";
import { batch } from "react-redux";

const {
  setStore,
  reducer,
  sync,
  useByKey,
  setQueries,
  useKeysByQuery,
} = createDynamicReducer<RawListSearch>('friends', 'id');

export const setSearchStore = setStore;
export const searchReducer = reducer;
export const syncSearch = sync;
export const useSearch = useByKey;
export const setSearchQueries = setQueries;
export const useSearchsByQuery = useKeysByQuery;

export const syncAllSearch = (accessories: RawListSearch[]) => {
  let query: { [id: string]: string[] } = {};
  let ids: string[] = [];

  for (let access of accessories) {
    ids.push(access.id.toString());
  }

  batch(() => {
    syncSearch(accessories);
    setSearchQueries({
      all: ids,
      ...query,
    });
  });
};
