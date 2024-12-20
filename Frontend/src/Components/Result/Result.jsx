import React, { useState, useEffect } from "react";
import "./result.css";

const Result = ({ disease, sym = [], doctors = [], updateList, trackList }) => {
  const [isScreenLarge, setIsScreenLarge] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsScreenLarge(window.innerWidth > 1083);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container1">
      <h2>{disease}</h2>
      <p>Symptoms of {disease}:</p>
      <div className="flex">
        {Array.isArray(sym) &&
          sym.map((item, index) => {
            const isInList = trackList.includes(item);
            return (
              <button
                className={isInList ? "selectContainer2" : "container2"}
                onClick={updateList}
                data-value={item}
                key={index}
              >
                {item}
              </button>
            );
          })}
      </div>

      {/* Doctors Section */}
      {doctors && doctors.length > 0 ? (
        <div className="doctorInfo">
          <h4>Recommended Doctors:</h4>
          <div className="doctorList">
            {doctors.length > 2 ? (
              <div className="scrollableDoctors">
                {doctors.map((doctor, index) => (
                  <div key={index} className="doctorCard">
                    <p className="doctorName">{doctor.name}</p>
                    <p className="doctorLocation">{doctor.city}</p>
                    <p className="doctorSpecialty">{doctor.contact}</p>

                  </div>
                ))}
              </div>
            ) : (
              doctors.map((doctor, index) => (
                <div key={index} className="doctorCard">
                  <p className="doctorName">{doctor.name}</p>
                  <p className="doctorLocation">{doctor.city}</p>
                  <p className="doctorSpecialty">{doctor.specialty}</p>
                 
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="noDoctorsMessage">
          <p>No doctors available for this disease in Nagpur.</p>
        </div>
      )}
    </div>
  );
};

export default Result;
