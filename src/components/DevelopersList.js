import React, { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8000/api/developers/`,
});

function DevelopersList() {
    const [developerList, setDeveloperList] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        api
            .get("/")
            .then((response) => setDeveloperList(response.data))
            .catch((error) => setError(error.message))
            .finally(() => setLoaded(true));
    }, []);

    return (
        <div>
            {!loaded && <div>Loading...</div>}
            {loaded && developerList !== null ? (
                developerList.map((developer) => {
                    return (
                        <div key={developer.id} className="mt-3 border-b border-b-gray-900 flex gap-2 text-xs text-left">
                            <div className=" mb-2 text-left">
                                <div className="whitespace-nowrap">{developer.first_name}</div>
                                <div className="whitespace-nowrap">{developer.last_name}</div>
                            </div>
                            <div className="w-full mb-2 text-left">
                                <div>{developer.years_of_experiences} Years {developer.bio}</div>
                                <div> Using {developer.experiences}</div>
                            </div>
                            <div className="w-full mb-2 text-left">
                                <div> Lives at {developer.address}</div>
                                <div className="whitespace-nowrap">Contact: {developer.email}</div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div> Error: {error}</div>
            )}
        </div>
    );
}

export default DevelopersList;
