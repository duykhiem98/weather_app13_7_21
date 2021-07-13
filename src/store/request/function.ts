import {RawFriendRequest} from '@/types/index';
import {syncAllRequests} from '@/store/request/index';

const fakeData: RawFriendRequest[] = [
    {
        id: '',
        title: 'Annie',
        subTitle: '2021-06-08T11:16:32.421Z',
        image: 'https://cdn.fakercloud.com/avatars/tereshenkov_128.jpg',
    },
    {
        id: '',
        title: 'Randal',
        subTitle: '2021-06-08T15:41:11.587Z',
        image: 'https://cdn.fakercloud.com/avatars/dgajjar_128.jpg',
    },
    {
        id: '',
        title: 'Isom',
        subTitle: '2021-06-08T19:56:43.184Z',
        image: 'https://cdn.fakercloud.com/avatars/j04ntoh_128.jpg',
    },
    {
        id: '',
        title: 'Barrett',
        subTitle: '2021-06-08T09:24:07.118Z',
        image: 'https://cdn.fakercloud.com/avatars/carlosjgsousa_128.jpg',
    },
    {
        id: '',
        title: 'Malika',
        subTitle: '2021-06-09T00:57:12.831Z',
        image: 'https://cdn.fakercloud.com/avatars/illyzoren_128.jpg',
    },
    {
        id: '',
        title: 'Caitlyn',
        subTitle: '2021-06-08T14:08:38.143Z',
        image: 'https://cdn.fakercloud.com/avatars/dzantievm_128.jpg',
    },
    {
        id: '',
        title: 'Kyle',
        subTitle: '2021-06-08T17:12:47.793Z',
        image: 'https://cdn.fakercloud.com/avatars/mandalareopens_128.jpg',
    },
    {
        id: '',
        title: 'Chasity',
        subTitle: '2021-06-08T08:28:33.271Z',
        image: 'https://cdn.fakercloud.com/avatars/elliotnolten_128.jpg',
    },
    {
        id: '',
        title: 'Tracy',
        subTitle: '2021-06-08T05:17:30.026Z',
        image: 'https://cdn.fakercloud.com/avatars/ricburton_128.jpg',
    },
    {
        id: '',
        title: 'Mathew',
        subTitle: '2021-06-08T09:33:55.970Z',
        image: 'https://cdn.fakercloud.com/avatars/cdavis565_128.jpg',
    },
    {
        id: '',
        title: 'Doyle',
        subTitle: '2021-06-08T21:31:56.802Z',
        image: 'https://cdn.fakercloud.com/avatars/kurtinc_128.jpg',
    },
    {
        id: '',
        title: 'Orval',
        subTitle: '2021-06-08T16:48:39.474Z',
        image: 'https://cdn.fakercloud.com/avatars/timmillwood_128.jpg',
    },
    {
        id: '',
        title: 'Kaden',
        subTitle: '2021-06-08T20:03:41.814Z',
        image: 'https://cdn.fakercloud.com/avatars/vladarbatov_128.jpg',
    },
    {
        id: '',
        title: 'Tyreek',
        subTitle: '2021-06-08T06:22:27.810Z',
        image: 'https://cdn.fakercloud.com/avatars/michzen_128.jpg',
    },
    {
        id: '',
        title: 'Reynold',
        subTitle: '2021-06-08T09:54:45.330Z',
        image: 'https://cdn.fakercloud.com/avatars/russell_baylis_128.jpg',
    },
    {
        id: '',
        title: 'Timothy',
        subTitle: '2021-06-08T15:06:47.849Z',
        image: 'https://cdn.fakercloud.com/avatars/michaelkoper_128.jpg',
    },
    {
        id: '',
        title: 'Kari',
        subTitle: '2021-06-08T10:52:57.541Z',
        image: 'https://cdn.fakercloud.com/avatars/jennyshen_128.jpg',
    },
    {
        id: '',
        title: 'Sylvester',
        subTitle: '2021-06-09T00:36:49.839Z',
        image: 'https://cdn.fakercloud.com/avatars/rickdt_128.jpg',
    },
    {
        id: '',
        title: 'Robbie',
        subTitle: '2021-06-08T16:52:18.113Z',
        image: 'https://cdn.fakercloud.com/avatars/nepdud_128.jpg',
    },
    {
        id: '',
        title: 'Bernadette',
        subTitle: '2021-06-09T04:29:49.446Z',
        image: 'https://cdn.fakercloud.com/avatars/elisabethkjaer_128.jpg',
    },
    {
        id: '',
        title: 'Fidel',
        subTitle: '2021-06-08T22:05:27.514Z',
        image: 'https://cdn.fakercloud.com/avatars/mrebay007_128.jpg',
    },
    {
        id: '',
        title: 'Salma',
        subTitle: '2021-06-08T07:43:37.099Z',
        image: 'https://cdn.fakercloud.com/avatars/leehambley_128.jpg',
    },
    {
        id: '',
        title: 'Garry',
        subTitle: '2021-06-08T09:24:54.684Z',
        image: 'https://cdn.fakercloud.com/avatars/victordeanda_128.jpg',
    },
    {
        id: '',
        title: 'Gideon',
        subTitle: '2021-06-08T15:22:45.132Z',
        image: 'https://cdn.fakercloud.com/avatars/scottkclark_128.jpg',
    },
    {
        id: '',
        title: 'Monserrate',
        subTitle: '2021-06-08T05:44:48.636Z',
        image: 'https://cdn.fakercloud.com/avatars/bungiwan_128.jpg',
    },
    {
        id: '',
        title: 'Laurie',
        subTitle: '2021-06-08T07:15:23.192Z',
        image: 'https://cdn.fakercloud.com/avatars/danthms_128.jpg',
    },
    {
        id: '',
        title: 'Ward',
        subTitle: '2021-06-08T15:16:59.555Z',
        image: 'https://cdn.fakercloud.com/avatars/russell_baylis_128.jpg',
    },
    {
        id: '',
        title: 'Judah',
        subTitle: '2021-06-08T07:53:48.754Z',
        image: 'https://cdn.fakercloud.com/avatars/hai_ninh_nguyen_128.jpg',
    },
    {
        id: '',
        title: 'Hoyt',
        subTitle: '2021-06-08T08:30:31.292Z',
        image: 'https://cdn.fakercloud.com/avatars/reetajayendra_128.jpg',
    },
    {
        id: '',
        title: 'Caleigh',
        subTitle: '2021-06-08T20:47:56.881Z',
        image: 'https://cdn.fakercloud.com/avatars/gu5taf_128.jpg',
    },
    {
        id: '',
        title: 'Mabelle',
        subTitle: '2021-06-08T15:55:59.657Z',
        image: 'https://cdn.fakercloud.com/avatars/helderleal_128.jpg',
    },
    {
        id: '',
        title: 'Johnathan',
        subTitle: '2021-06-08T17:56:16.682Z',
        image: 'https://cdn.fakercloud.com/avatars/markolschesky_128.jpg',
    },
    {
        id: '',
        title: 'Aglae',
        subTitle: '2021-06-08T23:43:43.017Z',
        image: 'https://cdn.fakercloud.com/avatars/yassiryahya_128.jpg',
    },
    {
        id: '',
        title: 'Neha',
        subTitle: '2021-06-08T08:04:26.112Z',
        image: 'https://cdn.fakercloud.com/avatars/chrisvanderkooi_128.jpg',
    },
    {
        id: '',
        title: 'Ayden',
        subTitle: '2021-06-08T14:56:34.419Z',
        image: 'https://cdn.fakercloud.com/avatars/nilshelmersson_128.jpg',
    },
    {
        id: '',
        title: 'Reanna',
        subTitle: '2021-06-08T13:14:35.218Z',
        image: 'https://cdn.fakercloud.com/avatars/nicoleglynn_128.jpg',
    },
    {
        id: '',
        title: 'Cecelia',
        subTitle: '2021-06-08T19:03:08.243Z',
        image: 'https://cdn.fakercloud.com/avatars/bowbrick_128.jpg',
    },
    {
        id: '',
        title: 'Maurine',
        subTitle: '2021-06-09T04:05:20.994Z',
        image: 'https://cdn.fakercloud.com/avatars/osmanince_128.jpg',
    },
    {
        id: '',
        title: 'Jolie',
        subTitle: '2021-06-09T01:02:12.915Z',
        image: 'https://cdn.fakercloud.com/avatars/surgeonist_128.jpg',
    },
    {
        id: '',
        title: 'Mazie',
        subTitle: '2021-06-08T11:37:47.965Z',
        image: 'https://cdn.fakercloud.com/avatars/_victa_128.jpg',
    },
    {
        id: '',
        title: 'Emmanuel',
        subTitle: '2021-06-09T01:17:07.787Z',
        image: 'https://cdn.fakercloud.com/avatars/bowbrick_128.jpg',
    },
    {
        id: '',
        title: 'Elmira',
        subTitle: '2021-06-08T14:01:52.731Z',
        image: 'https://cdn.fakercloud.com/avatars/kevinoh_128.jpg',
    },
    {
        id: '',
        title: 'Dane',
        subTitle: '2021-06-09T03:31:25.799Z',
        image: 'https://cdn.fakercloud.com/avatars/ludwiczakpawel_128.jpg',
    },
    {
        id: '',
        title: 'Luis',
        subTitle: '2021-06-09T02:32:45.880Z',
        image: 'https://cdn.fakercloud.com/avatars/dawidwu_128.jpg',
    },
    {
        id: '',
        title: 'Autumn',
        subTitle: '2021-06-09T01:57:48.989Z',
        image: 'https://cdn.fakercloud.com/avatars/bruno_mart_128.jpg',
    },
    {
        id: '',
        title: 'Maria',
        subTitle: '2021-06-08T08:30:05.630Z',
        image: 'https://cdn.fakercloud.com/avatars/samihah_128.jpg',
    },
    {
        id: '',
        title: 'Maya',
        subTitle: '2021-06-09T00:36:15.227Z',
        image: 'https://cdn.fakercloud.com/avatars/adamnac_128.jpg',
    },
    {
        id: '',
        title: 'Melvin',
        subTitle: '2021-06-08T06:17:22.055Z',
        image: 'https://cdn.fakercloud.com/avatars/noufalibrahim_128.jpg',
    },
    {
        id: '',
        title: 'Troy',
        subTitle: '2021-06-08T06:17:18.314Z',
        image: 'https://cdn.fakercloud.com/avatars/chrisstumph_128.jpg',
    },
    {
        id: '',
        title: 'Viva',
        subTitle: '2021-06-08T08:38:57.424Z',
        image: 'https://cdn.fakercloud.com/avatars/gt_128.jpg',
    },
];

export const requestRequestList = async () => {
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
    let sortedFakeData = fakeData.sort((x, y) => +new Date(y.subTitle) - +new Date(x.subTitle));
    let result: RawFriendRequest[] = [];

    for (let i = 0; i < sortedFakeData.length; i++) {
        result.push({
            ...sortedFakeData[i],
            id: i.toString(),
        });
    }

    syncAllRequests(result);
    return result.map((item) => item.id);
};
