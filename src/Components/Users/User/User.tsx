import React from 'react';
import {useParams} from "react-router-dom";
import {Field, Form} from "react-final-form";
import {Button, Input, Space, Spin, Switch, Tabs} from "antd";
import {AndroidOutlined, AppleOutlined, WindowsOutlined} from "@ant-design/icons";
import {useUserData} from "../../../Hooks/Users";
import MainFields from "./MainFields";

const { TabPane } = Tabs;

const User = () => {
    const { id } = useParams<{readonly id: any}>();
    const { data } = useUserData(id);
    return (
        <div>
            <Spin size="large" spinning={!data}>
                {data && <Form
                    onSubmit={(data) => {
                        debugger
                    }}
                    initialValues={data}
                    render={({handleSubmit, values}) => (
                        <form onSubmit={handleSubmit}>
                            <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane
                                        tab={
                                            <span>
                                          <AppleOutlined/>
                                          MAIN FIELDS
                                        </span>
                                        }
                                        key="1"
                                    >
                                        <Space direction="vertical" size="middle" style={{display: 'flex', width: '50%'}}>
                                            <MainFields data={data}/>
                                        </Space>
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span>
                                          <AndroidOutlined/>
                                          STRIPE
                                        </span>
                                        }
                                        key="2"
                                    >
                                        <Space direction="vertical" size="middle" style={{display: 'flex', width: '50%'}}>
                                            wefewfwefewf
                                        </Space>
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span>
                                          <WindowsOutlined />
                                          DRIVERS
                                        </span>
                                        }
                                        key="3"
                                    >
                                        wefewfwef
                                    </TabPane>
                                </Tabs>
                            </Space>
                            <div className="buttons" style={{marginTop: '20px'}}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    )}
                />}
            </Spin>
        </div>
    )
};

export default User;