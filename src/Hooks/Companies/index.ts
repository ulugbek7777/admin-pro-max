import {useQuery} from "react-query";
import {companies} from "../../API/Dailies/company";


export const useCompaniesData = (companyId: number | undefined, sort: boolean | undefined, skip: number | undefined): object => {
    return useQuery([
            `companies/${companyId || 'all'}`, companyId, sort, skip],
        () => companies.read(companyId, sort, skip),
        { refetchOnWindowFocus: false, staleTime: 5 * 60 * 1000 })
}
export const useCompanyData = (companyId: number | string | undefined): any => {
    return useQuery([
            `companies/${companyId}`, companyId],
        () => companies.companyData(companyId),
        { refetchOnWindowFocus: false, staleTime: 5 * 60 * 1000 })
}
export const useVehicleData = (vehicleId: number | string | undefined): any => {
    return useQuery([
            `vehicles/${vehicleId}`, vehicleId],
        () => companies.vehicleData(vehicleId),
        { refetchOnWindowFocus: false, staleTime: 5 * 60 * 1000, retry: false })
}
export const useVehicleSearch = async (truck_number: string | number, companyId: string | number | undefined) => {
    return await companies.searchVehicleData(truck_number, companyId)
}