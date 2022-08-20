import instance from "../api";

export const companies = {
    async read(companyId: number | undefined, sort: boolean | undefined, skip: number | undefined) {
        let filter = {"where": companyId ? {id: companyId} : {},"order": sort ? ["id DESC"] : ["id ASC"],"limit":10,"skip":skip};
        let filterForCount = companyId ? {id: companyId} : {};

        const { data }: { data: object } = await instance(`companies?filter=${encodeURIComponent(JSON.stringify(filter))}`);
        console.log(companyId)
        const getCount = async () => {
            if(!companyId) {
                const count = await instance(`companies/count?where=${JSON.stringify(filterForCount)}`);
                return count.data.count;
            }
            return 0;
        }
        const count = await getCount();
        return {data, count: count};
    }
}