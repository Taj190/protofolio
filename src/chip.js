import { memo } from "react";

const Chip = ({skill , deleteSkill})=>{
    console.log('chip render')
    const Removeskill = ()=>{
      deleteSkill(skill)
    }
    return(
      <div>
        <p>{skill}</p>
        <button onClick={Removeskill}>remove</button>
      </div>
    )
}
export default memo (Chip)