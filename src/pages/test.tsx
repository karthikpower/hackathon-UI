import { Context, useContext } from "react";
import PlanContext from "../components/PlanContext"

export const Test: React.FC = () => { 
    const planGuid = useContext(PlanContext);
    console.log('line6', planGuid)
    return (
       <p>Hello</p>
    )
}


