import {createDynamicReducer} from '@/utils/createDynamicReducer';
import {RawNotification} from '@/types';
import {batch, useSelector} from 'react-redux';

const {setStore, reducer, sync, useByKey, setQueries, useKeysByQuery} =
    createDynamicReducer<RawNotification>('notifications', 'id');

export const setNotificationStore = setStore;
export const notificationReducer = reducer;
export const syncNotifications = sync;
export const useNotification = useByKey;
export const setNotificationQueries = setQueries;
export const useNotificationsByQuery = useKeysByQuery;

export const syncAllNotifications = (accessories: RawNotification[]) => {
    let query: {[id: string]: string[]} = {};
    let ids: string[] = [];

    for (let access of accessories) {
        ids.push(access.id.toString());
    }

    batch(() => {
        syncNotifications(accessories);
        setNotificationQueries({
            all: ids,
            ...query,
        });
    });
};
