import instance from "../api";

export const dailies = {
    async read({filter, countFilter}: {filter: object | string, countFilter: object | string}) {
        const { data }: { data: object } = await instance(`dailies?filter=${JSON.stringify(filter)}`)
        const count = await instance(`dailies/count?where=${JSON.stringify(countFilter)}`)
        return {data, count: count.data.count}
    },
    async companyFinder({name, id}: {name: string | undefined, id: number | string | undefined}) {
        const { data }: { data: Array<any> } = await instance(`companies?filter=${encodeURIComponent(JSON.stringify({
            "where":{"name": {"ilike":name}}
        }))}`);
        return data;
    }
}