import { memo } from 'react';
import List from './List';

const ListItem = (props) => {
    const {data} = props

    console.log(props)
    return (
        <div>
            {data.todo}
        </div>
    )
}

export default memo(ListItem);
// export default memo(ListItem, (prevProps, newProps) => {
//     if (prevProps.todo !== newProps.todo) {
//         return false;
//     }
//     return true;
// });