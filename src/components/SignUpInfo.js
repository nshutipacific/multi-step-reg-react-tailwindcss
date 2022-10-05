import React from "react";

function SignUpInfo({formData, setFormData}) {
    
    return (
        <div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Username</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="username"
                value={formData.userName}
                onChange={(event)=> setFormData({...formData, userName: event.target.value})}/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">User Email</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="email"
                 value={formData.email}
                 onChange={(event)=> setFormData({...formData, email: event.target.value})}
                /></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Password</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="password"
                 value={formData.password}
                 onChange={(event)=> setFormData({...formData, password: event.target.value})}
                 /></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div className="font-bold flex place-items-center">Password 2</div>
                <div><input className="bg-blue-100 rounded text-blue-700 shadow px-3 py-1 focus:outline-blue-700" type="text" name="password_confirm"
                 value={formData.passwordConfirm}
                 onChange={(event)=> setFormData({...formData, passwordConfirm: event.target.value})}
                /></div>

            </div>
        </div>
    );
}

export default SignUpInfo;