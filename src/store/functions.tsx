import {Fetch} from "@/utils/fetch";
import {RawBanner} from "@/types";


export const requestGetBanner = async () => {
    const {data} = await Fetch.get<{ result: RawBanner[] }>('/banner/list');
    if (!data || !data.result) {
        return []
    }
    return data.result
};
