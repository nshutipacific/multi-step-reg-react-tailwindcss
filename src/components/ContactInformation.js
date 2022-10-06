import React from "react";

function ContactInformation({formData, setFormData}){
    return (
        <div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Email</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="email" name="email"
                value={formData.email}
                onChange={(event)=> setFormData({...formData, email: event.target.value})}/></div>
            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Phone</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="phone"
                value={formData.phone}
                onChange={(event)=> setFormData({...formData, phone: event.target.value})}/></div>
            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Address</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="address"
                value={formData.address}
                onChange={(event)=> setFormData({...formData, address: event.target.value})}/></div>
            </div>
        </div>
    );
}

export default ContactInformation;