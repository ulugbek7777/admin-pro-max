import React from 'react';
import {useUsersData} from "../../../Hooks/Users";
import {useParams} from "react-router-dom";

type Data = {
    data?: {
        data: Array<any>,
        count: number
    }
}
type params = {
    readonly id: any
}
const TabDrivers = () => {
    const { id } = useParams<params>();
    const companyId: number = parseInt(id);
    const { data }: Data = useUsersData(companyId, 'driver', undefined);
    console.log(data)
    return (
        <div>
            <h1>Here will be drivers list</h1>
        </div>
    );
};

export default TabDrivers;
