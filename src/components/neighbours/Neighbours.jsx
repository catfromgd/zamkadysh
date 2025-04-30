import React, { useEffect } from "react";
import { useState } from "react";
import data from "./data.json";
import importedNotes from "./notesData.json";

const Neighbours = () => {
  const [neighbours, setNeighbours] = useState([]);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [countriesNotes, setCountriesNotes] = useState([]);

  useEffect(() => {
    setCountries(Object.keys(data));
  }, []);

  const countryInfo = (id) => {
    const selectedCountry = countries[id];
    const selectedNeighbours = Object.values(data)[id];

    setCountry(selectedCountry);
    setNeighbours(selectedNeighbours);

    // Фильтруем соседей, у которых есть примечания
    const notesForNeighbours = selectedNeighbours.filter(neighbour => 
      importedNotes.hasOwnProperty(neighbour)
    );
    setCountriesNotes(notesForNeighbours);
  };

  return (
    <div style={{ fontFamily: "JetBrains Mono" }}>
      <div className="container" style={{ display: "flex", marginTop: "40px" }}>
        <div className="buttons" style={{ width: "60vw" }}>
          {countries.map((country, id) => (
            <button
              key={country}
              style={{
                width: "200px",
                height: "70px",
                border: "1px solid rgb(194, 194, 194)",
                borderRadius: "10px",
                margin: "3px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => countryInfo(id)}
            >
              <p style={{ fontSize: "larger" }}>{country}</p>
            </button>
          ))}
        </div>
        <div
          className="countryInfoContainer"
          style={{
            width: "35vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "5vw"
          }}
        >
          <div className="" style={{ textAlign: "center" }}>
            <h1>{country}</h1>
            {country && (
              <img
                src={`/Europe_flags/Flag_of_${country}.svg.webp`}
                alt={`Flag of ${country}`}
                className="countryFlag"
                style={{ marginTop: "20px" }}
              />
            )}
            <h2>Neighbours:</h2>
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                border: "1px solid black",
                marginTop: "20px",
              }}
            >
              <tbody>
                {neighbours.length > 0 ? (
                  neighbours.map((el, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          border: "1px solid black",
                          padding: "10px",
                          textAlign: "center",
                        }}
                      >
                        <h3>{el}</h3>
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                          padding: "10px",
                          textAlign: "center",
                        }}
                      >
                        <img
                          src={`/Europe_flags/Flag_of_${el}.svg.webp`}
                          alt={`Flag of ${el}`}
                          style={{ width: "50px" }}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="2"
                      style={{
                        border: "1px solid black",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      <h2>Country has no neighbours</h2>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <h2 style={{marginTop: "20px"}}>Notes:</h2>
            {countriesNotes.length > 0 ? (
              countriesNotes.map((countryName) => (
                <div key={countryName}>
                  <h3>{countryName}: </h3>
                  <p>{importedNotes[countryName]}</p>
                </div>
              ))
            ) : (
              <p>None</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neighbours;