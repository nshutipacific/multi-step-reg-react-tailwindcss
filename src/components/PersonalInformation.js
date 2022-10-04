import React from "react";

function PersonalInformation(){
    return (
        <div>
            <div className="flex justify-between mt-2 gap-4">
                <div>First Name</div>
                <div><input type="text" name="username"/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div>Last Name</div>
                <div><input type="text" name="username"/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div>Phone</div>
                <div><input type="text" name="username"/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div>ID Number</div>
                <div><input type="text" name="username"/></div>

            </div>
        </div>
    );
}

export default PersonalInformation;