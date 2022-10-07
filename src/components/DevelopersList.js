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
            <div key={developer.id}>
              <div> {developer.id}</div>
              <div> {developer.first_name}</div>
              <div> {developer.last_name}</div>
              <div> {developer.username}</div>
              <div> {developer.email}</div>
              <div> {developer.address}</div>
              <div> {developer.bio}</div>
              <div> {developer.experiences}</div>
              <div> {developer.years_of_experiences}</div>
              
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
