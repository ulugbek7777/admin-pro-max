export const SEARCH_DRIVER = 'SEARCH_DRIVER';

export const SearchResult = ({value, action}: {value: any, action: string}) => {
    switch (action) {
        case 'SEARCH_DRIVER': {
            return <>hello world</>
        }
        default: return <></>
    }
}