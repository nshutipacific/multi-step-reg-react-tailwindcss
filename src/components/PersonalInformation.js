import React from "react";

function PersonalInformation({formData, setFormData}){
    return (
        <div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">First Name</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="firstname"
                value={formData.firstName}
                onChange={(event)=> setFormData({...formData, firstName: event.target.value})}/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Last Name</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="lastname"
                value={formData.lastName}
                onChange={(event)=> setFormData({...formData, lastName: event.target.value})}/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Phone</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="phone"
                value={formData.phoneNumber}
                onChange={(event)=> setFormData({...formData, phoneNumber: event.target.value})}/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">ID Number</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="id_number"
                value={formData.idNumber}
                onChange={(event)=> setFormData({...formData, idNumber: event.target.value})}/></div>

            </div>
        </div>
    );
}

export default PersonalInformation;