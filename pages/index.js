import React, {useState} from "react";

const InputElement = () => {
  
  const [inputText, setInputText] = useState("")
  const [historyList, setHistoryList] = useState([])

  return ( <div>
           <input 
           onChange={(e) => {
               setInputText(e.target.value)
               setHistoryList([...historyList, e.target.value])
           }}
           placeholder="Enter some text" />
           <br />
           {inputText}
           <hr /><br />
           <ul>
               {historyList.map((rec, index) => {
                  return <div key={index}>{rec}</div>
                 })}
           </ul>
           </div>
           )
};

export default InputElement;
