import instance from "../api";


export const users = {
    async read(companyId: undefined| number, role: undefined | string, driverId: undefined | string | number, skip: undefined | number = 0) {
        let where = {};
        where = companyId ? {...where, companyId} : where;
        where = role ? {...where, role} : where;
        where = driverId ? {...where, id: driverId} : where;

        let filter = {"where": where, "limit":10,"skip":skip};

        const { data }: { data: object } = await instance(`users?filter=${encodeURIComponent(JSON.stringify(filter))}`);
        const getCount = async () => {
            if(!driverId) {
                const count = await instance(`users/count?where=${JSON.stringify(where)}`);
                return count.data.count;
            }
            return 0;
        }
        const count = await getCount();
        return {data, count: count};
    }
}