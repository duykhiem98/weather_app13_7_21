import {createDynamicReducer} from '@/utils/createDynamicReducer';
import {RawFriendRequest} from '@/types';
import {batch, useSelector} from 'react-redux';

const {setStore, reducer, sync, useByKey, setQueries, useKeysByQuery} =
    createDynamicReducer<RawFriendRequest>('requests', 'id');

export const setRequestStore = setStore;
export const requestReducer = reducer;
export const syncRequests = sync;
export const useRequest = useByKey;
export const setRequestQueries = setQueries;
export const useRequestsByQuery = useKeysByQuery;

export const syncAllRequests = (accessories: RawFriendRequest[]) => {
    let query: {[id: string]: string[]} = {};
    let ids: string[] = [];

    for (let access of accessories) {
        ids.push(access.id.toString());
    }

    batch(() => {
        syncRequests(accessories);
        setRequestQueries({
            all: ids,
            ...query,
        });
    });
};
