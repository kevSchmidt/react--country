import React from "react";

const Country = ({ data }) => {
  console.log(data);

  return (
    <div className="country-container">
      {data.map((item, index) => (
        <div key={index} className="country">
          <h2 className="country__name">{item.name}</h2>
          <img src={item.flag} alt="flag" className="country__flag" />
          <span className="country__code">{item.alpha2Code}</span>
          <h3 className="country__capital">Capital: {item.capital}</h3>
          <h3 className="country__region">Region: {item.region}</h3>
        </div>
      ))}
    </div>
  );
};

export default Country;
