import React, {useState} from 'react';
import {Input, Select, Space, Spin, Switch} from "antd";
import {Field} from "react-final-form";
import Search from "../../Utils/Search";
import {SearchResultForCompany, SearchResultForVehicle} from "../../Utils/SearchResults";
import {useCompanyData, useVehicleData} from "../../../Hooks/Companies";

const { Option } = Select;
const MainFields = ({ data }: { data: any }) => {
    const [check, setCheck] = useState(false);
    const myComp = useCompanyData(data.companyId);
    const myVehicle = useVehicleData(data.vehicleId);
    console.log(myVehicle.data)
    return myComp.data && myVehicle.data ? (
        <div>
            <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                <div>
                    <label>Company:</label><br/>
                    <Field
                        name="companyId"
                        render={({input}: { input: any }) => (
                            <>
                                {check ? <Search SearchResult={SearchResultForCompany} onSelect={(value: any, {valId}: {valId: number | undefined}) => {
                                        input.onChange(valId)
                                    }} placeholder={"Companies"} defaultValue={myComp.data.name} /> :
                                    <div onClick={() => setCheck(true)}><h1 style={{margin: 0}}>{myComp.data.name}</h1></div>
                                }
                            </>
                        )}
                    />
                </div>
                <div>
                    <label>Role:</label><br/>
                    <Field
                        name="role"
                        render={({input}: { input: any }) => (
                            <Select defaultValue={input.value} onChange={(value, option) => {
                                input.onChange(value)
                            }}>
                                <Option key={'driver'}>Drivers</Option>
                                <Option key={'dispatcher'}>Dispatchers</Option>
                                <Option key={'admin'}>Admins</Option>
                            </Select>
                        )}
                    />
                </div>
                <div>
                    <label>Is Active: </label>
                    <Field
                        name="is_active"
                        render={({input}: { input: any }) => (
                                <Switch defaultChecked={input.value} onChange={input.onChange}/>
                        )}
                    />
                </div>
                <div>
                    <label>Is Owner: </label>
                    <Field
                        name="isOwner"
                        render={({input}: { input: any }) => (
                            <Switch defaultChecked={input.value} onChange={input.onChange}/>
                        )}
                    />
                </div>
                <div>
                    <label>Is Support: </label>
                    <Field
                        name="isSupport"
                        render={({input}: { input: any }) => (
                            <Switch defaultChecked={input.value} onChange={input.onChange}/>
                        )}
                    />
                </div>
                <div>
                    <label>First Name: </label>
                    <Field
                        name="first_name"
                        render={({input}: { input: any }) => (
                            <Input placeholder="First Name" type="text" {...input} />
                        )}
                    />
                </div>
                <div>
                    <label>Second Name: </label>
                    <Field
                        name="second_name"
                        render={({input}: { input: any }) => (
                            <Input placeholder="Second Name" type="text" {...input} />
                        )}
                    />
                </div>
                <div>
                    <label>Username: </label>
                    <Field
                        name="username"
                        render={({input}: { input: any }) => (
                            <Input placeholder="Second Name" type="text" {...input} />
                        )}
                    />
                </div>
                <div>
                    <label>Driver: </label>
                    <Field
                        name="driverId"
                        render={({input}: { input: any }) => (
                            <Input placeholder="Second Name" type="text" {...input} />
                        )}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <Field
                        name="email"
                        render={({input}: { input: any }) => (
                            <Input placeholder="Second Name" type="text" {...input} />
                        )}
                    />
                </div>
                <div>
                    <label>Email Verified: </label>
                    <Field
                        name="emailVerified"
                        render={({input}: { input: any }) => (
                            <Switch defaultChecked={input.value} onChange={input.onChange}/>
                        )}
                    />
                </div>
                <div>
                    <label>Phone: </label>
                    <Field
                        name="phone"
                        render={({input}: { input: any }) => (
                            <Input placeholder="Second Name" type="text" {...input} />
                        )}
                    />
                </div>
                <div>
                    <label>Address: </label>
                    <Field
                        name="address"
                        render={({input}: { input: any }) => (
                            <Input placeholder="Second Name" type="text" {...input} />
                        )}
                    />
                </div>
                <div>
                    <label>Vehicle: </label>
                    <Field
                        name="driverId"
                        render={({input}: { input: any }) => (
                            <Search SearchResult={(query: any) => SearchResultForVehicle(query, myComp.data.id)} onSelect={(value: any, {valId}: {valId: number | undefined}) => {
                                input.onChange(valId)
                            }} placeholder={"Companies"} defaultValue={myVehicle.data.truck_number} />
                        )}
                    />
                </div>
                <div>
                    <label>Notes: </label>
                    <Field
                        name="notes"
                        render={({input}: { input: any }) => (
                            <Input placeholder="Second Name" type="text" {...input} />
                        )}
                    />
                </div>
            </Space>
        </div>
    ) : <Spin size="large" spinning={!myComp.data}></Spin>
};

export default MainFields;