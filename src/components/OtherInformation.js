import React from "react";

function OtherInformation({formData, setFormData}){
    return (
        <div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Nationality</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="nationality"
                value={formData.nationality}
                onChange={(event)=> setFormData({...formData, nationality: event.target.value})}/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">City</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="city"
                value={formData.city}
                onChange={(event)=> setFormData({...formData, city: event.target.value})}/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Address</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="address"
                value={formData.address}
                onChange={(event)=> setFormData({...formData, address: event.target.value})}/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">ZIP</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="zip"
                value={formData.zip}
                onChange={(event)=> setFormData({...formData, zip: event.target.value})}/></div>

            </div>
        </div>
    );
}

export default OtherInformation;