import React from "react";

function PropsComponent({ person }) {
  return (
    <div>
      <h2>Person Details</h2>
      <p>
        <strong>Name:</strong> {person.name}
      </p>
      <p>
        <strong>Age:</strong> {person.info.age}
      </p>
      <p>
        <strong>City:</strong> {person.info.city}
      </p>
      <p>
        <strong>Job:</strong> {person.info.job}
      </p>
      <div>
        <strong>Hobbies:</strong>
        <ul>
          {person.info.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PropsComponent;
