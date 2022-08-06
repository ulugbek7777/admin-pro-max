import instance from "../api";

export const dailies = {
    async read() {
        const { data }: { data: object } = await instance(`dailies?filter={"where":{},"order":["id DESC"],"limit":10,"skip":0}`)
        return data
    }
}