import React, {useState} from 'react';
import {Button, Card, Input, Space} from "antd";
import {LoginApi} from "../../API/auth/Login";

const Login: React.FC = () => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string | number>('');

    const handleLogin = async () => {
        await LoginApi({userName, password});
    }
    return (
        <div>
            <Space direction="horizontal" style={{width: '100%', position: 'absolute', top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                <Card title="Login" bordered={true} bodyStyle={{ backgroundColor: '#fafafa' }} style={{ width: 400 }}>
                    <div>
                        <Input size={'large'} placeholder={"Username"} onChange={e => setUserName(e.currentTarget.value)} />
                        <Input.Password size={'large'} className={'mt5'} placeholder={"Password"} onChange={e => setPassword(e.currentTarget.value)} />
                        <Button type="primary" size={'large'} className={'mt5'} onClick={handleLogin}>
                            Login
                        </Button>
                    </div>
                </Card>
            </Space>
        </div>
    );
};

export default Login;
