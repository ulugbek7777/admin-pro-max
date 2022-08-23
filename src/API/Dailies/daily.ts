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
    async driverFinder({name, companyId, role}: {name: string, companyId: number | undefined, role: string | undefined}) {
        const firstAndLast = name.split(' ');

        const nameFliter = (): any => {
            if(firstAndLast.length == 2) {
                return [
                    {'and': [{'first_name': {"ilike": firstAndLast[0]}}, {'second_name': {"ilike": firstAndLast[1]}}, ]},
                    {'and': [{'first_name': {"ilike": firstAndLast[1]}}, {'second_name': {"ilike": firstAndLast[0]}}, ]}
                ]
            } else {
                return [
                    {'and': [{'first_name': {"ilike": firstAndLast[0]}}, ]},
                    {'and': [{'second_name': {"ilike": firstAndLast[0]}}, ]}
                ]
            }
        }
        let query: any = {
            "where":{
                "and": [
                    {role},
                    {"is_active": true},
                    {companyId},
                    {or: nameFliter()}
                ]

            }
        }
        // if(companyId) {
        //     query = {
        //         ...query,
        //         where: {
        //             ...query.where
        //         }
        //     }
        // }
        const { data }: { data: Array<any> } = await instance(`users?filter=${encodeURIComponent(JSON.stringify({
            ...query
        }))}`)
        return data;
    }
}