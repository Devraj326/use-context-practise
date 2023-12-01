import React,{useContext} from "react";
import {UseContext } from "../App";

const Name = () => {

    const userName = useContext(UseContext);
    return(
        <div>
            <h2>{userName}</h2>
        </div>
    )
}

export default Name