import React from 'react';
import {Select} from "antd";
import moment from "moment-timezone/moment-timezone-utils";

const { Option } = Select;
const SelectTimezones = ({input}: {input: any}) => {
    return (
        <div>
            <Select defaultValue={input.value} style={{ width: "100%" }} onChange={(data) => {
                input.onChange(timezones.find(u => u.value === data))
            }}>
                {timezones.map(u => <Option value={u.value}>{u.label}</Option>)}
            </Select>
        </div>
    );
};
const TZ = (tz: string) => moment.tz(tz).format("z");

export const timezones = [
    {
        value: "America/Anchorage",
        label: TZ("America/Anchorage") === "AKDT" ? "Alaska Daylight Time" : "Alaska Standart Time",
    },
    {
        value: "America/Chicago",
        label: TZ("America/Chicago") === "CDT" ? "Central Daylight Time" : "Central Standart Time",
    },
    {
        value: "America/New_York",
        label: TZ("America/New_York") === "EDT" ? "Eastern Daylight Time" : "Eastern Standart Time",
    },
    {
        value: "Pacific/Honolulu",
        label: "Hawaii Standard Time",
    },
    {
        value: "America/Denver",
        label: "Mountain Daylight Time",
    },
    {
        value: "America/Phoenix",
        label: "Mountain Standard Time",
    },
    {
        value: "America/Los_Angeles",
        label: TZ("America/Los_Angeles") === "PDT" ? "Pacific Daylight Time" : "Pacific Standart Time",
    },
];

export default SelectTimezones;
