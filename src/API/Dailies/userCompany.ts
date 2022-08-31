import instance from "../api";


export const userCompany = {
    async read(companyId: undefined| number, role: undefined | string, driverId: undefined | string | number, skip: undefined | number = 0) {
        let where = {};
        where = companyId ? {...where, companyId} : where;
        where = role ? {...where, role} : where;
        where = driverId ? {...where, userId: driverId} : where;
        let filter = {"where": where, "include":["user","company"], "limit":10,"skip":skip};
        const { data }: { data: object } = await instance(`userCompanies?filter=${encodeURIComponent(JSON.stringify(filter))}`);
        const getCount = async () => {
            const count = await instance(`userCompanies/count?where=${JSON.stringify(where)}`);
            return count.data.count;
        }
        const count = await getCount();
        return {data, count: count};
    }
}