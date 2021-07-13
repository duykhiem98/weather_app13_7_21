import { RawFriend } from "@/types";
import { syncAllFiends } from "@/store/Friend/index";


const fakeData: RawFriend[] = [
  {
    id: "",
    title: "50 bạn chung",
    avatar: "https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg",
    name: "Định Pu"

  },
  {
    id: "",
    title: "50 bạn chung",
    avatar: "https://photographer.com.vn/wp-content/uploads/2020/08/1598380289_Hinh-nen-Girl-Xinh-tit-mu-tap-cho-desktop-laptop.jpg",
    name: "Duy khiêm"

  },
  {
    id: "",
    title: "50 bạn chung",
    avatar: "https://wikihow.com.vn/wp-content/uploads/2020/07/anh-gai-xinh-trung-hoc-co-so.jpg",
    name: "Hà Quang"

  },
  {
    id: "",
    title: "50 bạn chung",
    avatar: "https://th.bing.com/th/id/R859ee27e113224cb26bab1a5d69a1967?rik=Cwm5sJmsxxKNHg&pid=ImgRaw",
    name: "Sơn Tùng"

  },
  {
    id: "",
    title: "50 bạn chung",
    avatar: "https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg",
    name: "Định Pu"

  },
  {
    id: "",
    title: "50 bạn chung",
    avatar: "https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg",
    name: "Định Pu"

  },
  {
    id: "",
    title: "50 bạn chung",
    avatar: "https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg",
    name: "Định Pu"

  },
  {
    id: "",
    title: "50 bạn chung",
    avatar: "https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg",
    name: "Hiền Hồ"

  }

];
export const requestGetFriendList = async () => {
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
  let result: RawFriend[] = [];

  for (let i = 0; i < 50; i++) {
    const _index = Math.floor(Math.random() * fakeData.length);
    result.push({
      ...fakeData[_index],
      id: i.toString()
    });
  }

  syncAllFiends(result);
  return result.map(item => item.id);
};

