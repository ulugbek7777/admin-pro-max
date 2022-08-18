import instance from "../api";

export const dailies = {
    async read({filter, countFilter, date}: {filter: object | string, countFilter: object, date: string | undefined}) {
        const { data }: { data: object } = await instance(`dailies?filter=${JSON.stringify(filter)}`)
        const count = await instance(`dailies/count?where=${JSON.stringify({...countFilter, date})}`)
        return {data, count: count.data.count}
    },
    async companyFinder({name, id}: {name: string | undefined, id: number | string | undefined}) {
        const { data }: { data: Array<any> } = await instance(`companies?filter=${encodeURIComponent(JSON.stringify({
            "where":{"name": {"ilike":name}}
        }))}`);
        return data;
    },
    async driverFinder({name, companyId}: {name: string, companyId: number | undefined}) {
        let query: any = {
            "where":{
                "role":"driver",
                "is_active":true,
                "first_name": {"ilike":name}
            }
        }
        if(companyId) {
            query = {
                ...query,
                where: {
                    ...query.where,
                    companyId
                }
            }
        }
        const { data }: { data: Array<any> } = await instance(`users?filter=${encodeURIComponent(JSON.stringify({
            ...query
        }))}`)
        return data;
    }
}