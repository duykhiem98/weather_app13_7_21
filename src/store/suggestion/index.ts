import {createDynamicReducer} from '@/utils/createDynamicReducer';
import {RawFriendRequest} from '@/types';
import {batch, useSelector} from 'react-redux';

const {setStore, reducer, sync, useByKey, setQueries, useKeysByQuery} =
    createDynamicReducer<RawFriendRequest>('suggestions', 'id');

export const setSuggestionStore = setStore;
export const suggestionReducer = reducer;
export const syncSuggestions = sync;
export const useSuggestion = useByKey;
export const setSuggestionQueries = setQueries;
export const useSuggestionsByQuery = useKeysByQuery;

export const syncAllSuggestions = (accessories: RawFriendRequest[]) => {
    let query: {[id: string]: string[]} = {};
    let ids: string[] = [];

    for (let access of accessories) {
        ids.push(access.id.toString());
    }

    batch(() => {
        syncSuggestions(accessories);
        setSuggestionQueries({
            all: ids,
            ...query,
        });
    });
};
