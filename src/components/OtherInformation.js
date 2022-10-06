import React from "react";

function OtherInformation({formData, setFormData}){
    return (
        <div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Bio</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="bio"
                value={formData.bio}
                onChange={(event)=> setFormData({...formData, bio: event.target.value})}/></div>
             </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Experiences</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="experiences"
                value={formData.experiences}
                onChange={(event)=> setFormData({...formData, experiences: event.target.value})}/></div>
             </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Years of EXP</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="years_of_experiences"
                value={formData.yearsOfExperience}
                onChange={(event)=> setFormData({...formData, yearsOfExperience: event.target.value})}/></div>
            </div>
        </div>
    );
}

export default OtherInformation;