import React from 'react';
import {useParams} from "react-router-dom";
import {Field, Form} from "react-final-form";
import {Button, Input, Space, Spin, Switch, Tabs} from "antd";
import {AndroidOutlined, AppleOutlined, WindowsOutlined} from "@ant-design/icons";

const { TabPane } = Tabs;

const User = () => {
    const { id } = useParams<{readonly id: any}>();
    return (
        <div>
            <Spin size="large" spinning={false}>
                {<Form
                    onSubmit={() => {}}
                    initialValues={{}}
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
                                            sdvgsdhjvgdhsjg
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
                        </form>
                    )}
                />}
            </Spin>
        </div>
    )
};

export default User;