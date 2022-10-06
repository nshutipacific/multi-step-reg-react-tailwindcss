import React, { useState }  from "react";
import axios from "axios";
import Form from "./Form";

function DevelopersOverview(){

    const [step, setStep] = useState(0);
    
    const WhatToDisplay =() =>{

        if(step === 0) {
            return <img alt="developer" src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        } else if(step === 1){
            return <Form/>;
        } else if (step === 2){
            return 'Delete Component WIP';
        } else if (step === 3){
            return 'Developers List';
        }
    }
    return (
        <div>
            <div className="bg-gray-900 p-4 text-white font-bold">Developer 🌟 Space</div>
            <div>
                {WhatToDisplay()}
            </div>
            <div className="mt-3 flex gap-4 text-xs w-full">
                <button onClick={()=> setStep(3)} className="p-2 cursor-pointer hover:bg-gray-700 bg-gray-900 rounded-lg text-white w-full">View All Developer</button>
                <button onClick={()=> setStep(2)} className="p-2 cursor-pointer hover:bg-red-700 bg-red-900 rounded-lg text-white w-full">Delete Developer</button>
                <button onClick={()=> setStep(1)} className="p-2 cursor-pointer hover:bg-gray-700 bg-gray-900 rounded-lg text-white w-full"> Register Developer</button>
            </div>
        </div>
    );
}

export default DevelopersOverview;