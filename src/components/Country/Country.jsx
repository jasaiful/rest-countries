import { useState } from "react";
import Countries from "../Countries/Countries";
import './Country.css'
import CountryDetials from "../CountryDetails/CountryDetials";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {

    const { name, flags, population, area, capital, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }



    return (
        <div className={`country ${visited && `visited`}`}>
            <h2 style={{ color: visited ? 'red' : 'white' }}>Country Name: {name.common} </h2>
            <h4>Code: {cca3}</h4>
            <img src={flags.png} alt="" />
            <h4>Capital City: {capital}</h4>
            <h4>Population: {population} </h4>
            <h4>Area: {area} km2</h4>

            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <br />

            <button onClick={() => handleVisitedFlags(country.flags.png)} >Add Flag</button>

            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>

            {visited ? 'I have visited this country.' : 'I want to visit'}
            <hr />
            <CountryDetials
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}

            ></CountryDetials>

        </div>
    );
};

export default Country;