import React from "react";

const Country = ({ data }) => {
  console.log(data);

  return (
    <div className="country-container">
      {data.map((item, index) => (
        <div key={index} className="country">
          <img src={item.flag} alt="flag" className="country__flag" />
          <span className="country__code">{item.alpha2Code}</span>

          <h1 className="country__name">{item.name}</h1>

          <h3 className="country__capital">Capital: {item.capital}</h3>
          <h3 className="country__language">
            Language: {item.languages[0].name}
          </h3>
          <h3 className="country__currencies">
            Currencies: {item.currencies[0].name}
          </h3>
          <h3 className="country__region">Region: {item.region}</h3>
          <h3 className="country__population">Population: {item.population}</h3>
        </div>
      ))}
    </div>
  );
};

export default Country;
