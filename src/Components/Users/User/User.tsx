import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Field, Form} from "react-final-form";
import {Button, Input, Space, Spin, Switch, Tabs} from "antd";
import {AndroidOutlined, AppleOutlined, SettingOutlined} from "@ant-design/icons";
import {useUserData} from "../../../Hooks/Users";
import MainFields from "./MainFields";
import Commands from "./Commands";
import Config from "./Config";
import {users} from "../../../API/Dailies/user";

const { TabPane } = Tabs;
const User = () => {
    const [loading, setLoading] = useState<boolean>(false);
    let navigate = useNavigate();
    const { id } = useParams<{readonly id: any}>();
    const { data } = useUserData(id);
    return (
        <div>
            <Spin size="large" spinning={!data}>
                {data && <Form
                    onSubmit={async (data) => {
                        setLoading(true)
                        await users.userDataPatch(id, data);
                        setLoading(false)
                        navigate('/users')
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
                                        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                                            <MainFields data={data}/>
                                        </Space>
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span>
                                          <AndroidOutlined/>
                                          Commands
                                        </span>
                                        }
                                        key="2"
                                    >
                                        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                                            <Commands data={data} />
                                        </Space>
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span>
                                          <SettingOutlined />
                                          SETTINGS
                                        </span>
                                        }
                                        key="3"
                                    >
                                        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                                            <div>
                                                <label>enable_personal_conveyance: </label>
                                                <Field
                                                    name="settings.enable_personal_conveyance"
                                                    render={({input}: { input: any }) => (
                                                        <Switch defaultChecked={input.value} onChange={input.onChange}/>
                                                    )}
                                                />
                                            </div>
                                            <div>
                                                <label>
                                                    enable_personal_conveyance: </label>
                                                <Field
                                                    name="settings.enable_personal_conveyance"
                                                    render={({input}: { input: any }) => (
                                                        <Switch defaultChecked={input.value} onChange={input.onChange}/>
                                                    )}
                                                />
                                            </div>
                                            <div>
                                                <label>enable_ssb: </label>
                                                <Field
                                                    name="settings.enable_ssb"
                                                    render={({input}: { input: any }) => (
                                                        <Switch defaultChecked={input.value} onChange={input.onChange}/>
                                                    )}
                                                />
                                            </div>
                                        </Space>
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span>
                                          <SettingOutlined />
                                                Config
                                        </span>
                                        }
                                        key="4"
                                    >
                                        <Config />
                                    </TabPane>
                                </Tabs>
                            </Space>
                            <div className="buttons" style={{marginTop: '20px'}}>
                                <Button type="primary" htmlType="submit" disabled={loading}>
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