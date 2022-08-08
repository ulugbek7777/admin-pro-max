import {useQuery} from "react-query";
import {dailies} from "../../API/Dailies/daily";

export const useDailiesData = ({ date, filter }: {date: string | null, filter: object}): object => {
    return useQuery([
        `dailies/${date}`, date, filter],
        () => dailies.read({filter}),
        { staleTime: 5 * 60 * 1000 })
}