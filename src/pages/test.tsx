import { Context, useContext } from "react";
import MyContext from "../components/MyContext"

export const Test: React.FC = () => { 
    const planGuid = useContext(MyContext);
    console.log('line6', planGuid)
    return (
       <p>Hello</p>
    )
}


