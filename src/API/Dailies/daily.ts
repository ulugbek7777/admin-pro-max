import instance from "../api";

export const dailies = {
    async read({filter}: {filter: object | string}) {
        const { data }: { data: object } = await instance(`dailies?filter=${JSON.stringify(filter)}`)
        return data
    }
}