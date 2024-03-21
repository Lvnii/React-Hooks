import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import List from './Components/List';

function App() {
  // const numberRef = useRef(0);
  // const timerRef = useRef();
  // const [number, setNumber] = useState(0);
  // const [inputValue, setInputValue] = useState('');
  // const inputRef = useRef();
  // const [names, setNames] = useState(['levani', 'ani', 'irakli', 'nino', 'tamari', 'avto']);
  // const [time, setTime] = useState(60)

  // const handleSave = () => {
  //   console.log(inputRef.current.value)
  // }

  // const handleChange = (e) => {
  //   if (e.target.value.length > 10) return
  //   setInputValue(e.target.value)
  // }

  // const handleSearch = (e) => {
  //   setNames((prevState) => {
  //     return [...prevState.filter((item) => item.toLowerCase().includes(e.target.value.toLowerCase()))]
  //   })
  // }

  // const startTimer = () => {
  //   const interval = setInterval(() => {
  //     setTime((prevState) => prevState - 1)
  //   }, 1000)
  //   timerRef.current = interval
  // }

  // const stopTimer = () => {
  //   clearInterval(timerRef.current)
  // }

  return (
    // <div className="App">
    //   <p>{number}</p>
    //   <button 
    //   onClick={() => {setNumber((prevState) => prevState + 1)}} >
    //     Increase
    //   </button>

    //   <button
    //     onClick={() => { 
    //       numberRef.current++;
    //       console.log(numberRef.current)
    //     }}
    //   >
    //     Increase Current
    //   </button>
    //   <div>
    //     <p>{inputValue.length} /10</p>
    //     <input type='text'
    //       ref={inputRef} 
    //       value={inputValue} 
    //       onChange={handleChange} />
    //     <button onClick={handleSave}>Save</button>
    //   </div>
    //   <div>
    //   <input type='text'
    //       onChange={handleSearch} />
    //   </div>
    //   <div>
    //     {names.map((item, index) => {
    //       return (
    //         <div key={index}>
    //           {item}
    //         </div>
    //       )
    //     })}
    //   </div>
    //   <div>{time}</div>
    //   <div>
    //     <button onClick={startTimer}>Start Timer</button>
    //     <button onClick={stopTimer}>Stop Timer</button>
    //   </div>
    // </div>
      <div className='App'>
        <List />
      </div>
    );
}

export default App;
