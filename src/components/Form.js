import React, { useState, useEffect } from "react";
import OtherInformation from "./OtherInformation";
import PersonalInformation from "./PersonalInformation";
import SignUpInfo from "./SignUpInfo";

function Form() {
    const [page, setPage] = useState(0);
    const FormTitles = ["Account Information", "Personal Information", "Other Information"];

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
            return <SignUpInfo formData = { formData } setFormData = { setFormData} />
        } else if (page === 1) {
            return <PersonalInformation formData = { formData } setFormData = { setFormData} />
        } else {
            return <OtherInformation formData = { formData } setFormData = { setFormData}/>
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
                        className="bg-blue-700 py-1 px-4 text-white rounded"
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}>Prev</button>
                    <button
                        className="bg-blue-700 py-1 px-4 text-white rounded"
                        disabled={page === FormTitles.length - 1}
                        onClick={() => {
                            setPage((currPage) => currPage + 1);
                        }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Form