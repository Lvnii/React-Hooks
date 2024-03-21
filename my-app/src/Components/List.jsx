import { useCallback, useEffect, useState } from "react"
import ListItem from "./ListItem"
import Test from "./Test";

const List = () => {
    const [rawData, setRawData] = useState([]);
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);

    const getData = useCallback (async () => {
        const result = await fetch('https://dummyjson.com/todos')
        const data = await result.json()
        setRawData(data.todos)
        setList(data.todos)
        console.log(data)
    }, []);

    const handleChange = useCallback((e) => {
        setInputValue(e.target.value)
        setList([...rawData.filter((item) => item.todo.toLowerCase().includes(e.target.value.toLowerCase()))])
    }, [rawData]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <div>
                <p>{value}</p>
                <button className="first number"
                onClick={() => {setValue((prevState) => prevState + 1)}}>Click</button>
            </div>
            <div>
                <p>{value1}</p>
                <button className="second number" 
                onClick={() => {setValue1((prevState) => prevState + 1)}}>
                    Click
                </button>
            </div>
            <Test 
                numberOne={value}
                numberTwo={value1}
            />
            {/* <ul>
                {list.map((item) => {
                    return (
                        <li key={item.id}>
                            <ListItem data={item}/>
                        </li>
                    )
                })}
            </ul> */}
        </div>
    )
}

export default List;