import { useState } from "react";
import Style from './difficulty.module.css'
import LeftSideComponent from "./LeftSideComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function RightSideComponent(){

    const [level , setLevel] = useState('LOW');

    const SelectLevel = (level)=>{

        setLevel(level);

    }

    return(
        <>
            <h1 className="mt-5">Difficulty Picker</h1>
            <div className={Style.Right} style={{ }}>
                <strong>Difficulty set to {level}</strong>
            </div>
            <LeftSideComponent btnClick={SelectLevel}/>
        </>
    );

}

export default RightSideComponent;