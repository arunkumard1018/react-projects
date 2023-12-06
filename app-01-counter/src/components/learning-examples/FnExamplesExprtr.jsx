import TenthFnBasedComp from './FunctionBasedComponent';
import FirstFnBasedComp from './FunctionBasedComponent';
import FourthFnBasedComp from './FunctionBasedComponent';
import { SecondFnBasedComp, ThirdFnBasedComp } from './FunctionBasedComponent' ; 

export default function FnBasedComp() {
    return (
        <div className="FnBasedComp">
            <FirstFnBasedComp />
            <SecondFnBasedComp />
            <ThirdFnBasedComp />
            <FourthFnBasedComp />  {/*if you dont use {} whatever comes will be default export */}
            <TenthFnBasedComp />
        </div>
        
    );
}