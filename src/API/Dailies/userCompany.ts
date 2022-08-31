import instance from "../api";
import {message} from "antd";


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
    },
    async addMultiUser(companyId: number | string, driverId: number | string, role: string) {
        message.loading({ content: 'Loading...', key: driverId });
        const { data } = await instance("/userCompanies", {
            method: 'POST',
            data: {
                role,
                companyId,
                userId: driverId,
            },
        }).then(u => {
            setTimeout(() => {
                message.success({ content: 'Loaded!', key: driverId, duration: 2 });
            }, 1000);
            return u;
        });
        return data;
    },
    async deleteUserCompany(id: number | string) {
        message.loading({ content: 'Loading...', key: id });
        let res;
        let error = "";
        try {
            const { data } = await instance(`/userCompanies/${id}`, {
                method: 'DELETE',
            }).then(u => {
                setTimeout(() => {
                    message.success({ content: 'Deleted!', key: id, duration: 2 });
                }, 1000);
                return u;
            });
            res = data;
        }
        catch (err) {
            error = "Oops something went wrong!";
        }
        return { data: res, error };
    }
}