import {Fetch} from "@/utils/fetch";
import {syncAllCategories} from "@/store/categories";
import {RawCategory} from "@/types";

export const requestGetCategoryList = async () => {
    const {data} = await Fetch.get<{ result: RawCategory[] }>('category/list', {
        params: {
            limit: 99999,
            level: 0,
            active: 1,
            page: 1,
        }
    });
    if (!data || !data?.result || !data?.result) {
        return []
    }
    syncAllCategories(data?.result || []);
    return data?.result.map(item => item.id);
};

