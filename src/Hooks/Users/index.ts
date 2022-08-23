import {useQuery} from "react-query";
import {users} from "../../API/Dailies/user";

export const useUsersData = (companyId: undefined| number, role: undefined | string, driverId: undefined | number, skip: undefined | number = 0): object => {
    return useQuery([
            `users/${driverId || 'all'}`, companyId, role, driverId, skip],
        () => users.read(companyId, role, driverId, skip),
        { refetchOnWindowFocus: false, staleTime: 5 * 60 * 1000 })
}