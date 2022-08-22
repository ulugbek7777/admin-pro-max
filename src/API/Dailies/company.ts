import instance from "../api";
import {message} from "antd";

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
    },
    async companyData(companyId: string | number | undefined) {
        const { data }: { data: any } = await instance(`companies/${companyId}`);
        return data;
    },
    async companyPatchData(companyData: any) {
        const key = 'updatable';
        message.loading({ content: 'Loading...', key });
        const { data }: { data: any } = await instance(`companies/${companyData.id}`,{
            method: 'PATCH',
            data: companyData
        }).then(u => {
            setTimeout(() => {
                message.success({ content: 'Loaded!', key, duration: 2 });
            }, 1000);
            return u;
        });
        return data;
    }
}