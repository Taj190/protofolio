import { useState } from "react"


export default function Input ({Addskill}){
    const[inputValue, setValue] = useState('')
   
    console.log('input render')
    const InputHandler =(e)=>{
        setValue(e.target.value)
       
    }
    const KeyUpHandler = (e)=>{
        let skill = e.target.value.trim()
        if(e.key === 'Enter' && skill){
            Addskill(skill)
            setValue("")
        }
    }

    return (
        <div>
            <input 
            onChange={InputHandler} 
             value={inputValue} 
             onKeyUp={KeyUpHandler} 
              />
         
        </div>
    )
}