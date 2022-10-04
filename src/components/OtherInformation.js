import React from "react";

function OtherInformation(){
    return (
        <div>
            <div className="flex justify-between mt-2 gap-4">
                <div>Nationality</div>
                <div><input type="text" name="username"/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div>City</div>
                <div><input type="text" name="username"/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div>Address</div>
                <div><input type="text" name="username"/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div>ZIP</div>
                <div><input type="text" name="username"/></div>

            </div>
        </div>
    );
}

export default OtherInformation;