import {createDynamicReducer} from '@/utils/createDynamicReducer';
import {RawPost} from '@/types';
import {batch, useSelector} from 'react-redux';

const {
    setStore,
    reducer,
    sync,
    useByKey,
    setQueries,
    useKeysByQuery,
} = createDynamicReducer<RawPost>('posts', 'id');

export const setPostsStore = setStore;
export const postReducer = reducer;
export const syncPosts = sync;
export const usePost = useByKey;
export const setPostQueries = setQueries;
export const usePostsByQuery = useKeysByQuery;

export const syncAllPosts = (accessories: RawPost[]) => {
    let query: { [id: string]: string[] } = {};
    let ids: string[] = [];

    for (let access of accessories) {
        ids.push(access.id.toString());
    }

    batch(() => {
        syncPosts(accessories);
        setPostQueries({
            all: ids,
            ...query,
        });
    });
};
