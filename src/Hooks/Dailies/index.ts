import {useQuery} from "react-query";
import {dailies} from "../../API/Dailies/daily";

export const useDailiesData = ({ date, filter, countFilter }: {date: string | null, filter: object, countFilter: object}): object => {
    return useQuery([
        `dailies/${date}`, date, filter],
        () => dailies.read({filter, countFilter}),
        { staleTime: 5 * 60 * 1000 })
}

export const useDailiesFindCompany = async ({ name, id }: {name: string | undefined, id: string | number | undefined}) => {
    name = '%' + name + '%';
    return await dailies.companyFinder({name, id})
}