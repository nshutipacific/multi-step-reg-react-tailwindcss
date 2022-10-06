import React from "react";

function IdentificationInformation({formData, setFormData}) {
    
    return (
        <div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Fistname</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="username"
                value={formData.firstName}
                onChange={(event)=> setFormData({...formData, firstName: event.target.value})}/></div>
            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Last Name</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="email"
                 value={formData.lastName}
                 onChange={(event)=> setFormData({...formData, lastName: event.target.value})}
                /></div>
            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Username</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="password"
                 value={formData.userName}
                 onChange={(event)=> setFormData({...formData, userName: event.target.value})}
                 /></div>
            </div>
        </div>
    );
}

export default IdentificationInformation;