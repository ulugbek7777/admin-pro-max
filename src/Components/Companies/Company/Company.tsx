import React, {useEffect, useState} from "react";
import { render } from "react-dom";
import { Form, Field } from "react-final-form";
import {Button, Input, Space, Spin, Switch, Tabs} from "antd";
import {AndroidOutlined, AppleOutlined} from "@ant-design/icons";
import {useParams} from "react-router-dom";
import {useCompanyData} from "../../../Hooks/Companies";
import SelectTimezones from "./SelectTimezones";
import {Value} from "react-query/types/devtools/Explorer";
import {companies} from "../../../API/Dailies/company";
type inpTypStrNm = number | string | null | undefined;
type inpBln = boolean | undefined | null;

type Data = {
    data?: {
        data: Array<any>,
        count: number
    }
}

interface Values {
    name?: string;
    usdot?: inpTypStrNm;
    chatId?: inpTypStrNm;
    is_active?: inpBln;
    payForDriver?: inpBln;
    tz?: string;
    phone?: inpTypStrNm;
    terminal_address?: inpTypStrNm;
    address?: inpTypStrNm;
    state?: inpTypStrNm;
    post_code?: inpTypStrNm;
    ownerId?: inpTypStrNm;
    stripeCustomerId?: inpTypStrNm;
    paymentMethodId?: inpTypStrNm;
    price?: inpTypStrNm;
    subscriptionId?: inpTypStrNm;
    quantity?: inpTypStrNm;
    stripe?: any;
}
const { TabPane } = Tabs;
type params = {
    readonly id: any
}
export const Company: React.FC = () => {
    const [companyData, setCompanyData] = useState<any>();
    const { id } = useParams<params>();
    const { data }: Data = useCompanyData(id);
    const onSubmit = async (values: Values) => {
        values = {
            ...values,
            stripe: {
                ...values.stripe,
                paymentMethodId: values.paymentMethodId,
                price: values.price,
                subscription: {
                    ...values.stripe.subscription,
                    id: values.subscriptionId,
                    quantity: values.quantity
                }
            }
        }
        delete values.paymentMethodId;
        delete values.price;
        delete values.subscriptionId;
        delete values.quantity;
        const data = companies.companyPatchData(values);
    };
    useEffect(() => {
        if(data) {
            setCompanyData(data)
        }
    }, [data])
    return <div>
        <Spin size="large" spinning={!data}>
            {companyData && <Form
                onSubmit={onSubmit}
                initialValues={{
                    ...companyData,
                    paymentMethodId: companyData.stripe.paymentMethodId,
                    price: companyData.stripe.price,
                    subscriptionId: companyData.stripe.subscription.id,
                    quantity: companyData.stripe.subscription.quantity
            }}
                render={({handleSubmit, values}) => (
                    <form onSubmit={handleSubmit}>
                        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                            <Tabs defaultActiveKey="1">
                                <TabPane
                                    tab={
                                        <span>
                                          <AppleOutlined/>
                                          Tab 1
                                        </span>
                                    }
                                    key="1"
                                >
                                    <Space direction="vertical" size="middle" style={{display: 'flex', width: '50%'}}>
                                        <div>
                                            <label>Name</label>
                                            <Field
                                                name="name"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="Name" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>Usdot</label>
                                            <Field
                                                name="usdot"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="Usdot" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>chatId</label>
                                            <Field
                                                name="chatId"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="Usdot" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>is_active</label>
                                            <Field
                                                name="is_active"
                                                render={({input}: { input: any }) => (
                                                    <div>
                                                        <Switch defaultChecked={input.value} onChange={input.onChange}/>
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>payForDriver</label>
                                            <Field
                                                name="payForDriver"
                                                render={({input}: { input: any }) => (
                                                    <div>
                                                        <Switch defaultChecked={input.value} onChange={input.onChange}/>
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>tz</label>
                                            <Field
                                                name="tz"
                                                render={({input}: { input: any }) => (
                                                    <SelectTimezones input={input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>phone</label>
                                            <Field
                                                name="phone"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="Usdot" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>terminal_address</label>
                                            <Field
                                                name="terminal_address"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="Usdot" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>address</label>
                                            <Field
                                                name="address"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="Usdot" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>state</label>
                                            <Field
                                                name="state"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="Usdot" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>post_code</label>
                                            <Field
                                                name="post_code"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="Usdot" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>ownerId</label>
                                            <Field
                                                name="ownerId"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="Usdot" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                    </Space>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>
                                          <AndroidOutlined/>
                                          Tab 2
                                        </span>
                                    }
                                    key="2"
                                >
                                    <Space direction="vertical" size="middle" style={{display: 'flex', width: '50%'}}>
                                        <div>
                                            <label>stripeCustomerId</label>
                                            <Field
                                                name="stripeCustomerId"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="stripeCustomerId" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>paymentMethodId</label>
                                            <Field
                                                name="paymentMethodId"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="paymentMethodId" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>price</label>
                                            <Field
                                                name="price"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="price" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>subscriptionId</label>
                                            <Field
                                                name="subscriptionId"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="subscriptionId" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label>quantity</label>
                                            <Field
                                                name="quantity"
                                                render={({input}: { input: any }) => (
                                                    <Input placeholder="quantity" type="text" {...input} />
                                                )}
                                            />
                                        </div>
                                    </Space>
                                </TabPane>
                            </Tabs>
                            <div className="buttons">
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </div>
                        </Space>
                    </form>
                )}
            />}
        </Spin>
    </div>
};
