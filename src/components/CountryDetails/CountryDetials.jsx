import Country from "../Country/Country";
import CountryData from "../CountryData/CountryData";

const CountryDetials = (props) => {
    // const { country, handleVisitedCountries, handleVisitedFlags } = props

    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
                       
            ></CountryData> */}

            <CountryData
            {...props}
            ></CountryData>


        </div>
    );
};

export default CountryDetials;