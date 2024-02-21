import { Header } from "./header" ;
import { Leftbar} from "./sidebar" ;
import  {Rightbar , MyApp , WeatherDetail} from "./rightbar" ;
import "./app.css" ;
const App = ()=>{

    return (
        <div className ="root-container">
          <Header />
         <div className="body">
          <Leftbar />
          <Rightbar />
          <MyApp />
          <WeatherDetail/>
         </div>
        
    </div>
    )
}
export{App}