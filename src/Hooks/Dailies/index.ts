import {useQuery} from "react-query";
import {dailies} from "../../API/Dailies/daily";

export const useDailiesData = ({ date }: {date: string | null}): object => {
    return useQuery([
        `dailies/${date}`, date],
        () => dailies.read({'filter': {"where":{},"order":["id DESC"],"limit":10,"skip":0}}),
        { staleTime: 5 * 60 * 1000 })
}