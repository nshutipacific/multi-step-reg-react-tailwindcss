import React from "react";

function SignUpInfo() {
    return (
        <div>
            <div className="flex justify-between mt-2 gap-4">
                <div>Username</div>
                <div><input type="text" name="username"/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div>User Email</div>
                <div><input type="text" name="username"/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div>Password</div>
                <div><input type="text" name="username"/></div>

            </div>
            <div className="flex justify-between mt-2 gap-4">
                <div>Password to Confirm</div>
                <div><input type="text" name="username"/></div>

            </div>
        </div>
    );
}

export default SignUpInfo;