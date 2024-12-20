import React from 'react';
import './shortdisease.css'; // Optional: For custom styling

const ShortDisease = ({ disease, symptoms, updateList, trackList, doctors }) => {
  return (
    <div className="short-disease">
      <p>
        <strong className='diseasename'>{disease}</strong>: {symptoms.join(', ')}
      </p>
      
      {/* Display doctors if available, else show a message */}
      {doctors && doctors.length > 0 ? (
        <div className="doctorInfo">
          <h4>Recommended Doctors:</h4>
          <div className="doctorList">
            {doctors.map((doctor, index) => (
              <div key={index} className="doctorCard">
                <p className="doctorName">{doctor.name}</p>
                <p className="doctorSpecialty">{doctor.specialty}</p>
                <p className="doctorLocation">{doctor.city}</p>
                <p className="doctorContact">{doctor.contact}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="noDoctorsMessage">
          <p>No doctors available for this disease in Nagpur .</p>
        </div>
      )}
    </div>
  );
};

export default ShortDisease;
