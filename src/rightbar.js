import React, { useState } from 'react';
import "./right-bar.css"
import { weather } from './data.js';
import Input from "./input.js"
import Chip from "./chip.js"
const experience = [
    {
        company: "z-index",
        role: "SED",
        skills: ['javascript', 'React', 'NOde.js', 'springBOOt'],
        Duration: '1Year'
    },
    {
        company: "Flex-IT-Solutiuon",
        role: "SSD",
        skills: ['javascript', 'React', 'NOde.js', 'springBOOt', 'java'],
        Duration: '1.5Year'
    }
]

const ExperienceCard = ({ details }) => {
    return (
        <div>
            <p>company : {details.company} Role : {details.role}</p>
            <ul>
                {
                    details.skills.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <div className="skills">
                <h5>{details.Duration}</h5>
            </div>
        </div>
    )
}

export const Rightbar = () => {
    return (
        <div className="right-bar-container">
            <h2>Experience</h2>
            {experience.map((item, index) => <ExperienceCard key={index} details={item} />)}
        </div>
    )
}

export function MyApp() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
            <Myinput/>
           < Pickcolor/>
           <AddTask/>
           <InputApp/>
        </div>
    );
}
  const InputApp = ()=>{
    const [skills , setskill]= useState([]) ;

      console.log('parent render')
    const Addskill = (newSkill)=>{
        setskill([...skills  ,newSkill])
    }
   const deleteSkill =(skillTobedeleted)=>{
    const remainingskill =  skills.map((item )=>item !== skillTobedeleted)
    setskill(remainingskill)
   }

    return (
        <div className='skill-container'>
           <Input Addskill ={Addskill}/>
           <div>
          {
            skills.map((ski, index) => <Chip key={index} skill={ski} deleteSkill={deleteSkill} /> )
          }
          </div>
        </div>
    )
  }












const AddTask = ()=>{
    const [inputValue , setValue] = useState('');
    const  [tasks , setTask] = useState([]);


    function onChange(e){
       let newValue = e.target.value ;
       setValue(newValue)
    }
  function addtask (){
   setTask([...tasks , inputValue]) ;
  }
    return (
        <div className='taskName'>
            <input onChange={onChange} value={inputValue}/>
            <button onClick={addtask} >AddTask</button>

            <div className='taskList'>
              {
                tasks.map((item , index)=>{
                    return <p key={index}>{item}</p>
                })
              }
            </div>

        </div>

        
    )

}



















const Pickcolor = () => {
    const [inputValue, setInputValue] = useState("");
    const [divBackgrounds, setDivBackgrounds] = useState(Array(3).fill("")); // Initialize with 3 empty strings

    const pickColor = (event) => {
        setInputValue(event.target.value);
    }

    const background = (index) => {
        const newDivBackgrounds = [...divBackgrounds];
        newDivBackgrounds[index] = inputValue;
        setDivBackgrounds(newDivBackgrounds); 
    }

    return (
        <div>
            <input type='radio' name='option' value={'red'} onChange={pickColor} />
            red
            <input type='radio' name='option' value={'blue'} onChange={pickColor} />
            blue
            <input type='radio' name='option' value={'yellow'} onChange={pickColor} />
            yellow

            <div className='div' onClick={() => background(0)} style={{ backgroundColor: divBackgrounds[0] }}>
                <p>hekoo</p>
            </div>
            <div className='div' onClick={() => background(1)} style={{ backgroundColor: divBackgrounds[1] }}>
                <p>hekoo</p>
            </div>
            <div className='div' onClick={() => background(2)} style={{ backgroundColor: divBackgrounds[2] }}>
                <p>hekoo</p>
            </div>
        </div>
    );
}


function MyButton() {
    let [count , setCount] = useState(0)

    function inc (){
        setCount(count + 4);
        setCount(count + 3);
    }

    function dec (){
        setCount(count -1 );
    }
    return (
        <>
        <button onClick={inc}>+</button>
        <p>{count}</p>
        <button onClick={dec}>-</button>
        
        </>
    )
}

const Myinput = ()=>{
    let [inputValue , setInput] = useState("")

    const onChange = (event)=>{
        setInput(event.target.value )
    }

    return (
        <div>
            <label>Enter Your Name</label>
            <input onChange={onChange}/>
            {inputValue && <p>{`hello ${inputValue}`}</p>}
        </div>
    )
}

const Temperature = () => {
    return (
      <div>
       {
        weather.map((item, index)=>{
            let text =  item.temperature > 25 ? "Too Hot Too Handle" : "Good to go but grab umbrella";
            let textColor = item.temperature > 25 ? "red" : "blue";
           
            return (
            <p key ={index}>{item.state}:<span style={{color:textColor}} >{text}</span></p>)
        })
       }
      </div>
    );
  }
  
  export const WeatherDetail = () => {
    return (
      <div>
        <Temperature /> 
      </div>
    );
  }
  
 
  

