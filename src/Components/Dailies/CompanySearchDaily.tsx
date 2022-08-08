import { AutoComplete, Input } from 'antd';
import React, {useCallback, useState} from 'react';

const getRandomInt = (max: any, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: any) => {
    console.log(query)
    return [<></>]
}
    // new Array(getRandomInt(5))
    //     .join('.')
    //     .split('.')
    //     .map((_, idx) => {
    //         const category = `${query}${idx}`;
    //         return {
    //             value: category,
    //             label: (
    //                 <div
    //                     style={{
    //                         display: 'flex',
    //                         justifyContent: 'space-between',
    //                     }}
    //                 >
    //         <span>
    //           Found {query} on{' '}
    //             <a
    //                 href={`https://s.taobao.com/search?q=${query}`}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //             {category}
    //           </a>
    //         </span>
    //                     <span>{getRandomInt(200, 100)} results</span>
    //                 </div>
    //             ),
    //         };
    //     });

const CompanySearchDaily = () => {
    const [options, setOptions] = useState<Array<any>>([]);
    const debounce = (func: any) => {
        let timer: any;
        return function (...args: any) {
            // const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func(args[0])
            }, 500);
        };
    };
    const handleSearch = (value: any) => {
        if(value) {
            let data = searchResult(value);
            setOptions(data);
        } else {
            setOptions([]);
        }

    };
    const optimizedFn = useCallback(debounce(handleSearch), []);
    const onSelect = (value: any) => {
        console.log('onSelect', value);
    };

    return (
        <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
                width: 300,
            }}
            options={options}
            onSelect={onSelect}
            onSearch={optimizedFn}
        >
            <Input.Search size="large" placeholder="input here" enterButton />
        </AutoComplete>
    );
};

export default CompanySearchDaily;