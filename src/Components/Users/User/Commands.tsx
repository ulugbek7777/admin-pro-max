import React, {useState} from 'react';
import {Button, Col, Row, Space, Modal, Input} from "antd";
import {users} from "../../../API/Dailies/user";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const Commands = ({ data }: { data: any }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newPassword, setNewPassword] = useState<string | number>('');
    const getCommand = async (command: string) => {
        await users.command(data.id, command)
    }
    const showPromiseConfirm = (command: string) => {
        confirm({
            title: 'Command Confirmation',
            icon: <ExclamationCircleOutlined />,
            content: 'Are you sure you want to run this command?',
            async onOk() {
                await getCommand(command);
            },
            onCancel() {},
        });
    };


    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = async () => {
        await users.changeUserPassword(newPassword, data.id)
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input type={'password'} placeholder={'New Password'} onChange={(e) => setNewPassword(e.currentTarget.value)} />
            </Modal>
            <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                <Space direction="horizontal" size="middle" style={{display: 'flex'}}>
                    <Button type="primary" style={{backgroundColor: 'rgb(254, 149, 38)', borderColor: 'rgb(254, 149, 38)', width: '100%'}} onClick={() => showPromiseConfirm('reset_eld')}>RESET ELD</Button>
                    <Button type="primary" style={{backgroundColor: 'rgb(255, 203, 47)', borderColor: 'rgb(255, 203, 47)', width: '100%'}} onClick={() => showPromiseConfirm('disconnect_eld')}>DISCONNECT ELD</Button>
                    <Button type="primary" style={{backgroundColor: 'rgb(83, 216, 106)', borderColor: 'rgb(83, 216, 106)', width: '100%'}} onClick={() => showPromiseConfirm('restart_bluetooth')}>RESTART BLUETOOTH</Button>
                    <Button type="primary" onClick={() => showPromiseConfirm('update_user_info')}>UPDATE USER INFO</Button>
                    <Button type="primary" style={{backgroundColor: 'rgb(253, 61, 57)', borderColor: 'rgb(253, 61, 57)', width: '100%'}} onClick={() => showPromiseConfirm('clear_database')}>CLEAR DATABASE</Button>
                </Space>
                <Space direction="horizontal" size="middle" style={{display: 'flex'}}>
                    <Button type="primary" onClick={() => showPromiseConfirm('rebirth')}>REBIRTH</Button>
                    <Button type="primary" onClick={showModal}>CHANGE PASSWORD</Button>
                    {/*<Button type="primary">LETTER</Button>*/}
                    {/*<Button type="primary">MALFUNCTION</Button>*/}
                </Space>
            </Space>
        </div>
    )
};

export default Commands;