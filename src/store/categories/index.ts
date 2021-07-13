import {createDynamicReducer} from '@/utils/createDynamicReducer';
import {RawCategory} from '@/types';
import {batch, useSelector} from 'react-redux';

const {
    setStore,
    reducer,
    sync,
    useByKey,
    setQueries,
    useKeysByQuery,
} = createDynamicReducer<RawCategory>('categories', 'id');

export const setCategoriesStore = setStore;
export const categoryReducer = reducer;
export const syncCategories = sync;
export const useCategory = useByKey;
export const setCategoryQueries = setQueries;
export const useCategoriesByQuery = useKeysByQuery;

export const syncAllCategories = (accessories: RawCategory[]) => {
    let query: { [id: string]: string[] } = {};
    let ids: string[] = [];

    for (let access of accessories) {
        ids.push(access.id.toString());
    }

    batch(() => {
        syncCategories(accessories);
        setCategoryQueries({
            all: ids,
            ...query,
        });
    });
};
