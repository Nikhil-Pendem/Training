
import {useState} from "react"
function DynamicList(){
    const [items,setItems]=useState(["HTML","CSS"])
    const[input,setInput]=useState('')

    const AddItem=()=>{
        if(input.trim())
        {
            setItems([...items,input])
            setInput('')

        }
    }
    return(
        <>
        <h2>Dynamic List Generaton</h2>
        <input 
        type="text"
        placeholder="Enter Technology"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        
        <button onClick={AddItem}>Add Item</button>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
           )) }
        </ul>
        </>
    )}
    export default DynamicList