const Subsection =({title , points})=>{
    return(
        <div className="subsection">
            <h5 id="title" >{title}</h5>
            <ul>
                {
                    points.map((point , index)=>{
                      return  <li key = {index}>{point}</li>
                    })
                }
            </ul>
        </div>
    )
}

const data={
    Computerlanguage : ['javascript' , 'java'],
    language : ['punjabi', 'Hindi' ,'English','Greek(A2)'],
    Achievement : ['Staying all way up always'],
    Framework : ['Bootstrap', 'springboot', 'Angular']

}
const education =[
    {
    field : 'SED',
    institue : 'AcicoJob',
    Year : "2024",
    Grade : '7.5'
} ,
{
    field : 'BBA',
    institue : 'BIS',
    Year : "2015",
    Grade : '5.5'
} ,

{
    field : 'Arts',
    institue : 'SAS',
    Year : "2011",
    Grade : '7.2'
} ,

]

const Education = ({item})=>{
    return (
        <div className="education-container">
         <h4>Institute : {item.institue}</h4>
         <p>Study-Field : {item.field}</p>
         <p>Passing-Year : {item.Year}</p>
         <p>Grade : {item.Grade}</p>
        </div>
    )
}
export const Leftbar = ()=>{
    return (
        <div className="leftbar-container">

            <div className="education-card">
                <h2>Education</h2>
                {
                    education.map((item ,index)=> {
                        return <Education key = {index}  item={item}/>
                    })
                }
            </div>

         <Subsection title="language" points ={data.language}   />
         <Subsection title="ComputerLanguage" points ={data.Computerlanguage}   />
         <Subsection title="Achievements" points ={data.Achievement}   />
         <Subsection title=" Framework" points ={data.Framework}   />
        </div>
    )
} ;