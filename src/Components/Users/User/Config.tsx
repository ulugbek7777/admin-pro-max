import React from 'react';
import {configs} from "../../Utils/data";
import {Space, Switch} from "antd";
import {Field} from "react-final-form";

const Config = () => {
    return (
        <div>
            <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                {configs.map(config => {
                    return <div>
                        <label>{config}: </label>
                        <Field
                            name={`config.${config}`}
                            render={({input}: { input: any }) => (
                                <Switch defaultChecked={input.value} onChange={input.onChange}/>
                            )}
                        />
                    </div>
                })}
            </Space>
        </div>
    )
};

export default Config;