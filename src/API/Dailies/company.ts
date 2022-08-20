import instance from "../api";

export const companies = {
    async read(companyId: number | undefined, sort: boolean | undefined) {
        let filter = {"where": companyId ? {id: companyId} : {},"order": sort ? ["id DESC"] : ["id ASC"],"limit":10,"skip":0};
        let filterForCount = companyId ? {id: companyId} : {};

        const { data }: { data: object } = await instance(`companies?filter=${encodeURIComponent(JSON.stringify(filter))}`);
        const count = await instance(`companies/count?where=${JSON.stringify(filterForCount)}`);

        return {data, count: count.data.count};
    }
}