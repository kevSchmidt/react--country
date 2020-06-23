import React from "react";

const Country = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
    </div>
  );
};

export default Country;
