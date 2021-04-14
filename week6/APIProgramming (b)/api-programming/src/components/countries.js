import React, { useEffect, useState } from "react";
import { render, screen } from "@testing-library/react";

// import { render, screen } from "@testing-library/react";
export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((response) => setCountries(response))
      .catch((error) => console.log({ error }));
  };
  console.log(countries);
  return (
    <div className="country-container">
      <h3 className="header">Countries</h3>
      <div className="country-body">
        {countries.map((country) => {
          return (
            <div className="country" key={country.name}>
              <p className="name">{country.name}</p>
              <p>Capital: {country.capital}</p>
              <p>
                {" "}
                <img src={country.flag} alt={country.name} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// //testler

// test("test head element in the document ", () => {
//   render(<Countries/>);
//   const headElement = screen.getByRole("heading");
//   expect(headElement).toBeInTheDocument();
// });

// test("test head element have a class", () => {
//   render(<Countries />);
//   const headElement = screen.getByRole("heading");
//   expect(headElement).toHaveClass("header");
// });

// test('test "Friends" to be in the document', () => {
//   render(<Countries/>);
//   screen.debug();
//   expect(screen.getByText("Countries")).toBeInTheDocument();
// });

