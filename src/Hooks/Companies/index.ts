import {useQuery} from "react-query";
import {companies} from "../../API/Dailies/company";


export const useCompaniesData = (companyId: number | undefined, sort: boolean | undefined): object => {
    return useQuery([
            `companies/${companyId || 'all'}`, companyId, sort],
        () => companies.read(companyId, sort),
        { staleTime: 5 * 60 * 1000 })
}