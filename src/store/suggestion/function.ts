import {RawFriendRequest} from '@/types';
import {syncAllSuggestions} from '@/store/suggestion/index';

const fakeData: RawFriendRequest[] = [
    {
        id: '',
        title: 'Geoffrey',
        subTitle: 91,
        image: 'https://cdn.fakercloud.com/avatars/billyroshan_128.jpg',
    },
    {
        id: '',
        title: 'Erin',
        subTitle: 59,
        image: 'https://cdn.fakercloud.com/avatars/itsajimithing_128.jpg',
    },
    {
        id: '',
        title: 'Valentine',
        subTitle: 4,
        image: 'https://cdn.fakercloud.com/avatars/nateschulte_128.jpg',
    },
    {
        id: '',
        title: 'Eva',
        subTitle: 59,
        image: 'https://cdn.fakercloud.com/avatars/aoimedia_128.jpg',
    },
    {
        id: '',
        title: 'Godfrey',
        subTitle: 90,
        image: 'https://cdn.fakercloud.com/avatars/koridhandy_128.jpg',
    },
    {
        id: '',
        title: 'Rahul',
        subTitle: 11,
        image: 'https://cdn.fakercloud.com/avatars/gu5taf_128.jpg',
    },
    {
        id: '',
        title: 'Kieran',
        subTitle: 81,
        image: 'https://cdn.fakercloud.com/avatars/fjaguero_128.jpg',
    },
    {
        id: '',
        title: 'Granville',
        subTitle: 63,
        image: 'https://cdn.fakercloud.com/avatars/petrangr_128.jpg',
    },
    {
        id: '',
        title: 'Jack',
        subTitle: 27,
        image: 'https://cdn.fakercloud.com/avatars/svenlen_128.jpg',
    },
    {
        id: '',
        title: 'Stephania',
        subTitle: 76,
        image: 'https://cdn.fakercloud.com/avatars/themikenagle_128.jpg',
    },
    {
        id: '',
        title: 'Aida',
        subTitle: 47,
        image: 'https://cdn.fakercloud.com/avatars/fjaguero_128.jpg',
    },
    {
        id: '',
        title: 'Fern',
        subTitle: 55,
        image: 'https://cdn.fakercloud.com/avatars/VMilescu_128.jpg',
    },
    {
        id: '',
        title: 'Benton',
        subTitle: 19,
        image: 'https://cdn.fakercloud.com/avatars/alxndrustinov_128.jpg',
    },
    {
        id: '',
        title: 'Jordane',
        subTitle: 20,
        image: 'https://cdn.fakercloud.com/avatars/hasslunsford_128.jpg',
    },
    {
        id: '',
        title: 'Kayla',
        subTitle: 69,
        image: 'https://cdn.fakercloud.com/avatars/aeon56_128.jpg',
    },
    {
        id: '',
        title: 'Trinity',
        subTitle: 3,
        image: 'https://cdn.fakercloud.com/avatars/woodsman001_128.jpg',
    },
    {
        id: '',
        title: 'Dee',
        subTitle: 4,
        image: 'https://cdn.fakercloud.com/avatars/akmur_128.jpg',
    },
    {
        id: '',
        title: 'Destiney',
        subTitle: 22,
        image: 'https://cdn.fakercloud.com/avatars/collegeman_128.jpg',
    },
    {
        id: '',
        title: 'Melody',
        subTitle: 25,
        image: 'https://cdn.fakercloud.com/avatars/spedwig_128.jpg',
    },
    {
        id: '',
        title: 'Blaise',
        subTitle: 19,
        image: 'https://cdn.fakercloud.com/avatars/marakasina_128.jpg',
    },
    {
        id: '',
        title: 'Thea',
        subTitle: 85,
        image: 'https://cdn.fakercloud.com/avatars/n1ght_coder_128.jpg',
    },
    {
        id: '',
        title: 'Ilene',
        subTitle: 50,
        image: 'https://cdn.fakercloud.com/avatars/itstotallyamy_128.jpg',
    },
    {
        id: '',
        title: 'Catharine',
        subTitle: 94,
        image: 'https://cdn.fakercloud.com/avatars/envex_128.jpg',
    },
    {
        id: '',
        title: 'Lonie',
        subTitle: 82,
        image: 'https://cdn.fakercloud.com/avatars/vladyn_128.jpg',
    },
    {
        id: '',
        title: 'Hal',
        subTitle: 61,
        image: 'https://cdn.fakercloud.com/avatars/1markiz_128.jpg',
    },
    {
        id: '',
        title: 'Ashlynn',
        subTitle: 58,
        image: 'https://cdn.fakercloud.com/avatars/kolage_128.jpg',
    },
    {
        id: '',
        title: 'Mable',
        subTitle: 46,
        image: 'https://cdn.fakercloud.com/avatars/superoutman_128.jpg',
    },
    {
        id: '',
        title: 'Lance',
        subTitle: 38,
        image: 'https://cdn.fakercloud.com/avatars/barputro_128.jpg',
    },
    {
        id: '',
        title: 'Elvie',
        subTitle: 4,
        image: 'https://cdn.fakercloud.com/avatars/sterlingrules_128.jpg',
    },
    {
        id: '',
        title: 'Devante',
        subTitle: 24,
        image: 'https://cdn.fakercloud.com/avatars/alecarpentier_128.jpg',
    },
    {
        id: '',
        title: 'Claudie',
        subTitle: 14,
        image: 'https://cdn.fakercloud.com/avatars/malykhinv_128.jpg',
    },
    {
        id: '',
        title: 'Adriana',
        subTitle: 72,
        image: 'https://cdn.fakercloud.com/avatars/devinhalladay_128.jpg',
    },
    {
        id: '',
        title: 'Ernesto',
        subTitle: 47,
        image: 'https://cdn.fakercloud.com/avatars/andrewcohen_128.jpg',
    },
    {
        id: '',
        title: 'Lonzo',
        subTitle: 73,
        image: 'https://cdn.fakercloud.com/avatars/akmur_128.jpg',
    },
    {
        id: '',
        title: 'Giles',
        subTitle: 98,
        image: 'https://cdn.fakercloud.com/avatars/bobwassermann_128.jpg',
    },
    {
        id: '',
        title: 'Roberto',
        subTitle: 93,
        image: 'https://cdn.fakercloud.com/avatars/lewisainslie_128.jpg',
    },
    {
        id: '',
        title: 'Garnett',
        subTitle: 43,
        image: 'https://cdn.fakercloud.com/avatars/emsgulam_128.jpg',
    },
    {
        id: '',
        title: 'Cooper',
        subTitle: 95,
        image: 'https://cdn.fakercloud.com/avatars/nicolasfolliot_128.jpg',
    },
    {
        id: '',
        title: 'Gino',
        subTitle: 90,
        image: 'https://cdn.fakercloud.com/avatars/aroon_sharma_128.jpg',
    },
    {
        id: '',
        title: 'Angie',
        subTitle: 74,
        image: 'https://cdn.fakercloud.com/avatars/ehsandiary_128.jpg',
    },
    {
        id: '',
        title: 'Zachery',
        subTitle: 89,
        image: 'https://cdn.fakercloud.com/avatars/allthingssmitty_128.jpg',
    },
    {
        id: '',
        title: 'Effie',
        subTitle: 37,
        image: 'https://cdn.fakercloud.com/avatars/wearesavas_128.jpg',
    },
    {
        id: '',
        title: 'Amelia',
        subTitle: 58,
        image: 'https://cdn.fakercloud.com/avatars/samgrover_128.jpg',
    },
    {
        id: '',
        title: 'Abraham',
        subTitle: 72,
        image: 'https://cdn.fakercloud.com/avatars/kvasnic_128.jpg',
    },
    {
        id: '',
        title: 'Jaylon',
        subTitle: 14,
        image: 'https://cdn.fakercloud.com/avatars/hoangloi_128.jpg',
    },
    {
        id: '',
        title: 'Novella',
        subTitle: 53,
        image: 'https://cdn.fakercloud.com/avatars/el_fuertisimo_128.jpg',
    },
    {
        id: '',
        title: 'Aaliyah',
        subTitle: 19,
        image: 'https://cdn.fakercloud.com/avatars/foczzi_128.jpg',
    },
    {
        id: '',
        title: 'Mario',
        subTitle: 12,
        image: 'https://cdn.fakercloud.com/avatars/cboller1_128.jpg',
    },
    {
        id: '',
        title: 'Lenny',
        subTitle: 95,
        image: 'https://cdn.fakercloud.com/avatars/anoff_128.jpg',
    },
    {
        id: '',
        title: 'Dorian',
        subTitle: 46,
        image: 'https://cdn.fakercloud.com/avatars/allfordesign_128.jpg',
    },
];

export const requestSuggestList = async () => {
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
    let result: RawFriendRequest[] = [];

    for (let i = 0; i < fakeData.length; i++) {
        const _index = Math.floor(Math.random() * fakeData.length);

        result.push({
            ...fakeData[_index],
            id: i.toString(),
        });
    }

    syncAllSuggestions(result);
    return result.map((item) => item.id);
};
