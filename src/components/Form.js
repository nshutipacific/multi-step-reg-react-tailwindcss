import React, {useState} from "react";
import OtherInformation from "./OtherInformation";
import PersonalInformation from "./PersonalInformation";
import SignUpInfo from "./SignUpInfo";

function Form() {
    const [page, setPage] = useState(0);
    const FormTitles = ["Account Information", "Personal Information", "Other Information"];

    const StepToDisplay = ()=> {
        if(page == 0){
            return <SignUpInfo/>
        } else if ( page == 1){
            return <PersonalInformation/>
        }else{
            return <OtherInformation/>
        }
    }
    return (
        <div className="form">
            <div className="progressbar"></div>
            <div className="form-container">
                <div className="header bg-gray-900 p-4 text-white font-black w-full">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body mt-4">
                {StepToDisplay()}
                </div>
                <div className="footer mt-4v flex justify-between mt-4">
                    <button
                    className="bg-blue-700 py-1 px-4 text-white rounded"
                    disabled={page == 0}
                    onClick={()=> {
                        setPage((currPage) => currPage - 1);
                    }}>Prev</button>
                    <button
                    className="bg-blue-700 py-1 px-4 text-white rounded"
                    disabled={page == FormTitles.length -1}
                    onClick={()=> {
                        setPage((currPage) => currPage + 1);
                    }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Form