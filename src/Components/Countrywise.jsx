import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import CountUp from "react-countup";
import { fetchCounrty, fetchcountrydata } from "../API/index";

const Countrywise = () => {
  const [country, setcountry] = useState("");
  const [FetchCountries, setFetchCountries] = useState([]);
  useEffect(() => {
    const fetchcountries = async () => {
      setFetchCountries(await fetchCounrty(setFetchCountries));
    };
    fetchcountries();
  }, [setFetchCountries]);
  useEffect(()=>{
      const fetchbyCountry = async ()=>{
          setcountry(await fetchcountrydata(setcountry));
      };
      fetchbyCountry();
  },[setcountry]);

  const handerChanges = async (country) => {
    console.log(country);
  };
  return (
    <div className="country-div py-5" id="country">
      <h1 className="text-center text-white">Country wise daily Record</h1>
      <div className="row">
        <div className=" mt-4 form-control d-flex bg-transparent border-0">
          <select
            class="form-select form-control m-auto col-6 form-select-lg mb-3"
            aria-label=".form-select-lg example"
            defaultValue=""
            onChange={(e) => handerChanges(e.target.value)}
          >
            <option selected>Open Your Country</option>
            {FetchCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="card">
            <ul className="list-group list-group-flush">
                <li className="text-center list-group-item">Last 24 hr Update: Infected</li>
                <li className="text-center list-group-item">Last 24 hr Update: Deaths</li>
                <li className="text-center list-group-item">Last 24 hr Update: Recovered</li>
              </ul>
              <img className="card-img-top" src="" alt="Country Flag" />
              <div className="card-body">
                <h3 className="card-title text-center">Country Name</h3>
              </div>
              <ul className="list-group list-group-flush">
              <li className="text-center list-group-item">Total Infected</li>
                <li className="text-center list-group-item">Total Deaths</li>
                <li className="text-center list-group-item">Total Recovered</li>
              </ul>
            </div>
          </div>


          
        </div>
      </div>
    </div>
  );
};

export default Countrywise;
