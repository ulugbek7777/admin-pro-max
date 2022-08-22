import {useQuery} from "react-query";
import {companies} from "../../API/Dailies/company";


export const useCompaniesData = (companyId: number | undefined, sort: boolean | undefined, skip: number | undefined): object => {
    return useQuery([
            `companies/${companyId || 'all'}`, companyId, sort, skip],
        () => companies.read(companyId, sort, skip),
        { staleTime: 5 * 60 * 1000 })
}
export const useCompanyData = (companyId: number | string | undefined): any => {
    return useQuery([
            `companies/${companyId}`, companyId],
        () => companies.companyData(companyId),
        { staleTime: 5 * 60 * 1000 })
}