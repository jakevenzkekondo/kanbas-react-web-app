import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanTypes from "./variables/BooleanTypes";
import IfElse from "./conditionals/IfElse";
import WorkingWithFunctions from "../WorkingWithFunctions";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";


function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanTypes/>
          <IfElse/>
          <WorkingWithFunctions/>
          <WorkingWithArrays/>
          <TemplateLiterals/>
          <House/>
          <Spreading/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript