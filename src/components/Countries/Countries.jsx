import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {

    //    1. state declaration
    const [countries, setCountries] = useState([]);

    // state for button
    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    // 2. use Effect (data load)
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])


    const handleVisitedCountries = country => {
        console.log('add this to your visited country list');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }


    // remove item from an array in a state 
    // use filter to select all the elements except the one you want to remove

    return (
        <div>
            <h3>Countries: {countries.length} </h3>

            {/* visited country */}
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)

                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag} ></img>)
                }
            </div>

            {/* display countries */}
            {/*3. data send to UI  */}
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlags={handleVisitedFlags}
                        ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;