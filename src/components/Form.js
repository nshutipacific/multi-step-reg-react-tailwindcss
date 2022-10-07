import React, { useState } from "react";
import CarreerInformation from "./CarreerInformation";
import ContactInformation from "./ContactInformation";
import IdentificationInformation from "./IdentificationInformation";

function Form() {
    const [page, setPage] = useState(0);
    const FormTitles = ["Identification", "Contact Info", "Career Info"];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: "",
        phone: '',
        address: '',
        bio: '',
        idNumber: '',
        experiences: '',
        yearsOfExperience: '',
    });

    const StepToDisplay = () => {
        if (page === 0) {
            return <IdentificationInformation formData = { formData } setFormData = { setFormData} />
        } else if (page === 1) {
            return <ContactInformation formData = { formData } setFormData = { setFormData} />
        } else {
            return <CarreerInformation formData = { formData } setFormData = { setFormData}/>
        }
    }

    const getProgressBarClass = () => {
        if (page === 0) {
            return "bg-gray-900 w-full h-2 p-2 rounded w-1/3"
        } else if (page === 1) {
            return "bg-gray-900 w-full h-2 p-2 rounded w-2/3"
        } else {
            return "bg-gray-900 w-full h-2 p-2 rounded w-3/3"
        }
    }

    return (
        <div className="form p-2">
            <div className="progressbar bg-gray-300 rounded">
                <div className={getProgressBarClass()} ></div>
            </div>
            <div className="form-container mt-2">
                <div className="header py-4 font-black bg-gray-200">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body mt-4 mx-4">
                    {StepToDisplay()}
                </div>
                <div className="footer mt-4 mx-4 flex justify-between mt-4">
                    <button
                        className="bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed py-1 px-4 text-white rounded"
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}>Prev</button>
                    <button
                        className="bg-blue-700 cursor-pointer py-1 px-4 text-white rounded"
                        onClick={() => {
                            if(page === FormTitles.length - 1){
                                //1. Submit Form Data on Click
                            } else {
                                setPage((currPage) => currPage + 1);
                            }                            
                        }}>
                            {page === FormTitles.length - 1 ? "Save Data" : "Next"}
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Form