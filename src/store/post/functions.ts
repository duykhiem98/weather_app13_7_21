import {Fetch} from "@/utils/fetch";
import {syncAllCategories} from "@/store/categories";
import {RawCategory, RawPost} from "@/types";
import {syncAllPosts} from "@/store/post/index";
import {getPreviewData} from "@/utils/preview";


const fakeData: RawPost[] = [
    {
        avatar: 'https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg',
        content: `- Ca bệnh BN8751, BN8753-BN8754, BN8757-BN8758, NB8761 tại tỉnh Bắc Ninh: 4 ca liên quan đến ổ dịch Khu công nghiệp Quế Võ, 2 ca liên quan đến ổ dịch Khu công nghiệp Khắc Niệm. Kết quả xét nghiệm dương tính với SARS-CoV-2.
                        - Ca bệnh BN8769, BN8779 tại tỉnh Hà Nam: là các trường hợp F1, đã được cách ly. Kết quả xét nghiệm ngày 6/6dương tính với SARS-CoV-2.
                        - Ca bệnh BN8780-BN8791 tại TPHCM: liên quan đến Nhóm truyền giáo Phục Hưng. Kết quả xét nghiệm dương tính với SARS-CoV-2.
                        Như vậy, tính đến 6h ngày 7/6, Việt Nam có tổng cộng 7.235 ca ghi nhận trong nước và 1.556 ca nhập cảnh. Số lượng ca mắc mới tính từ ngày 27/4 đến nay: 5.656 ca.
                        Có 15 tỉnh (Yên Bái, Quảng Ngãi, Đồng Nai, Nghệ An, Quảng Ninh, Quảng Nam, Quảng Trị, Thừa Thiên Huế, Đắk Lắk, Nam Định, Hòa Bình, Tuyên Quang, Phú Thọ, Sơn La, Ninh Bình) đã qua 14 ngày không có trường hợp mắc mới.`,
        id: '',
        images: [
            "https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg",
            "https://th.bing.com/th/id/R859ee27e113224cb26bab1a5d69a1967?rik=Cwm5sJmsxxKNHg&pid=ImgRaw"
        ],
        link: ''
    },
    {
        avatar: 'https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg',
        content: `Như vậy, tính đến 6h ngày 7/6, Việt Nam có tổng cộng 7.235 ca ghi nhận trong nước và 1.556 ca nhập cảnh. Số lượng ca mắc mới tính từ ngày 27/4 đến nay: 5.656 ca.
         Có 15 tỉnh (Yên Bái, Quảng Ngãi, Đồng Nai, Nghệ An, Quảng Ninh, Quảng Nam, Quảng Trị, Thừa Thiên Huế, Đắk Lắk, Nam Định, Hòa Bình, Tuyên Quang, Phú Thọ, Sơn La, Ninh Bình) đã qua 14 ngày không có trường hợp mắc mới.`,
        id: '',
        images: [
            "https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg",
            "https://photographer.com.vn/wp-content/uploads/2020/08/1598380289_Hinh-nen-Girl-Xinh-tit-mu-tap-cho-desktop-laptop.jpg"
        ],
        link: ''
    },
    {
        avatar: 'https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg',
        content: `Như vậy, tính đến 6h ngày 7/6, Việt Nam có tổng cộng 7.235 ca ghi nhận trong nước và 1.556 ca nhập cảnh. Số lượng ca mắc mới tính từ ngày 27/4 đến nay: 5.656 ca.
        Có 15 tỉnh (Yên Bái, Quảng Ngãi, Đồng Nai, Nghệ An, Quảng Ninh, Quảng Nam, Quảng Trị, Thừa Thiên Huế, Đắk Lắk, Nam Định, Hòa Bình, Tuyên Quang, Phú Thọ, Sơn La, Ninh Bình) đã qua 14 ngày không có trường hợp mắc mới.`,
        id: '',
        images: [
            "https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg",
            "https://photographer.com.vn/wp-content/uploads/2020/08/1598380289_Hinh-nen-Girl-Xinh-tit-mu-tap-cho-desktop-laptop.jpg",
            "https://wikihow.com.vn/wp-content/uploads/2020/07/anh-gai-xinh-trung-hoc-co-so.jpg",
            "https://th.bing.com/th/id/R859ee27e113224cb26bab1a5d69a1967?rik=Cwm5sJmsxxKNHg&pid=ImgRaw"
        ],
        link: ''
    },
    {
        avatar: 'https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg',
        content: `Tin tuc dan tri https://dantri.com.vn/suc-khoe/sang-76-them-44-ca-covid19-viet-nam-co-8791-benh-nhan-20210607060659035.htm`,
        id: '',
        images: [],
        link: ''
    },
    {
        avatar: 'https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg',
        content: `Tin tuc dan tri`,
        id: '',
        images: [
            "https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg",
            "https://photographer.com.vn/wp-content/uploads/2020/08/1598380289_Hinh-nen-Girl-Xinh-tit-mu-tap-cho-desktop-laptop.jpg",
            "https://wikihow.com.vn/wp-content/uploads/2020/07/anh-gai-xinh-trung-hoc-co-so.jpg",
            "https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg",
            "https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg",
            "https://th.bing.com/th/id/R859ee27e113224cb26bab1a5d69a1967?rik=Cwm5sJmsxxKNHg&pid=ImgRaw"
        ],
        link: ''
    },
];
export const requestGetPostList = async () => {
    // const {data} = await Fetch.get<{ result: RawCategory[] }>('category/list', {
    //     params: {
    //         limit: 99999,
    //         level: 0,
    //         active: 1,
    //         page: 1,
    //     }
    // });
    // if (!data || !data?.result || !data?.result) {
    //     return []
    // }
    let result: RawPost[] = [];

    for (let i = 0; i < 50; i++) {
        const _index = Math.floor(Math.random() * fakeData.length);
        result.push({
            ...fakeData[_index],
            id: i.toString()
        })
    }

    syncAllPosts(result);
    return result.map(item => item.id)
};

