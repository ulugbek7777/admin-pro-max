import React from 'react';
import {Button, Card, Input, Space} from "antd";

const Login: React.FC = () => {
    return (
        <div>
            <Space direction="horizontal" style={{width: '100%', position: 'absolute', top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                <Card title="Login" bordered={true} bodyStyle={{ backgroundColor: '#fafafa' }} style={{ width: 400 }}>
                    <div>
                        <Input size={'large'} placeholder={"Username"} />
                        <Input.Password size={'large'} className={'mt5'} placeholder={"Password"} />
                        <Button type="primary" size={'large'} className={'mt5'}>
                            Login
                        </Button>
                    </div>
                </Card>
            </Space>
        </div>
    );
};

export default Login;
