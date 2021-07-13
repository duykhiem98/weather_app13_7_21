import {Fetch} from '@/utils/fetch';
import {RawNotification} from '@/types';
import {syncAllNotifications} from '@/store/notification/index';

const fakeData: RawNotification[] = [
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-04-13T11:42:26.420Z',
        image: 'http://placeimg.com/640/480/city',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-07-23T20:00:53.722Z',
        image: 'http://placeimg.com/640/480/sports',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-10-28T00:07:04.608Z',
        image: 'http://placeimg.com/640/480/nature',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-12-14T15:51:58.389Z',
        image: 'http://placeimg.com/640/480/fashion',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-09-26T03:13:55.847Z',
        image: 'http://placeimg.com/640/480/transport',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-12-22T04:17:16.494Z',
        image: 'http://placeimg.com/640/480/nightlife',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-03-18T11:53:03.655Z',
        image: 'http://placeimg.com/640/480/technics',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-12-19T11:41:12.076Z',
        image: 'http://placeimg.com/640/480/abstract',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-03-01T17:59:29.076Z',
        image: 'http://placeimg.com/640/480/city',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-04-11T19:13:36.027Z',
        image: 'http://placeimg.com/640/480/food',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-09-22T04:33:26.500Z',
        image: 'http://placeimg.com/640/480/transport',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-11-22T12:24:24.617Z',
        image: 'http://placeimg.com/640/480/food',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-11-26T05:29:54.836Z',
        image: 'http://placeimg.com/640/480/abstract',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-02-15T21:55:30.197Z',
        image: 'http://placeimg.com/640/480/cats',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-11-19T22:12:39.015Z',
        image: 'http://placeimg.com/640/480/cats',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-12-27T02:07:33.113Z',
        image: 'http://placeimg.com/640/480/cats',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-08-31T18:09:37.817Z',
        image: 'http://placeimg.com/640/480/fashion',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-12-13T13:02:55.425Z',
        image: 'http://placeimg.com/640/480/people',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-11-12T08:22:45.618Z',
        image: 'http://placeimg.com/640/480/nightlife',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-02-02T22:37:38.353Z',
        image: 'http://placeimg.com/640/480/technics',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-12-14T15:59:29.678Z',
        image: 'http://placeimg.com/640/480/sports',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-02-02T18:28:45.771Z',
        image: 'http://placeimg.com/640/480/sports',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-10-25T17:35:55.693Z',
        image: 'http://placeimg.com/640/480/cats',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-12-20T02:24:11.557Z',
        image: 'http://placeimg.com/640/480/cats',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-08-02T18:28:49.473Z',
        image: 'http://placeimg.com/640/480/city',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-06-17T20:44:38.678Z',
        image: 'http://placeimg.com/640/480/city',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-11-09T19:19:03.390Z',
        image: 'http://placeimg.com/640/480/city',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-11-29T08:37:34.095Z',
        image: 'http://placeimg.com/640/480/people',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-08-02T23:38:34.795Z',
        image: 'http://placeimg.com/640/480/food',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-05-14T10:50:26.053Z',
        image: 'http://placeimg.com/640/480/business',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-01-02T14:05:46.079Z',
        image: 'http://placeimg.com/640/480/nightlife',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-09T05:06:32.133Z',
        image: 'http://placeimg.com/640/480/city',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-03-11T14:16:52.796Z',
        image: 'http://placeimg.com/640/480/fashion',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-02-23T15:36:04.261Z',
        image: 'http://placeimg.com/640/480/nightlife',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-03-04T04:15:27.155Z',
        image: 'http://placeimg.com/640/480/fashion',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-11-18T10:01:23.135Z',
        image: 'http://placeimg.com/640/480/people',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-12-08T16:13:40.623Z',
        image: 'http://placeimg.com/640/480/nature',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-10-23T18:49:25.122Z',
        image: 'http://placeimg.com/640/480/fashion',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-07-15T02:30:54.462Z',
        image: 'http://placeimg.com/640/480/business',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-07-04T14:25:57.108Z',
        image: 'http://placeimg.com/640/480/food',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-04T13:43:57.732Z',
        image: 'http://placeimg.com/640/480/transport',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-12-06T13:58:02.388Z',
        image: 'http://placeimg.com/640/480/sports',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-01-12T13:53:21.394Z',
        image: 'http://placeimg.com/640/480/nightlife',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-06-16T15:19:44.995Z',
        image: 'http://placeimg.com/640/480/transport',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-05-11T21:18:59.659Z',
        image: 'http://placeimg.com/640/480/food',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-02-27T13:30:35.462Z',
        image: 'http://placeimg.com/640/480/cats',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-07-13T06:37:17.712Z',
        image: 'http://placeimg.com/640/480/abstract',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2020-09-12T16:55:27.907Z',
        image: 'http://placeimg.com/640/480/technics',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-04-02T23:14:32.965Z',
        image: 'http://placeimg.com/640/480/people',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-01-29T06:33:57.385Z',
        image: 'http://placeimg.com/640/480/nightlife',
        seen: false,
    },
];

export const requestGetNotificationList = async () => {
    /*
    const {data} = await Fetch.get<{result: RawNotification[]}>(
        'notification/list',
        {
            params: {
                limit: 99999,
                level: 0,
                active: 1,
                page: 1,
            },
        },
    );

    if (!data || !data?.result || !data?.result) {
        return [];
    }
    */
    let sortedFakeData = fakeData.sort((x, y) => +new Date(y.created_at) - +new Date(x.created_at));
    let result: RawNotification[] = [];

    for (let i = 0; i < sortedFakeData.length; i++) {
        result.push({
            ...sortedFakeData[i],
            id: i.toString(),
        });
    }

    syncAllNotifications(result);
    return result.map((item) => item.id);
};
