import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HOD.scss'
import Header from '../../images/iceland.jpg'
import Search from '../../Search/Search'
import Title from '../../images/title1.png'


export default function Destinations(props) {

    // Komponent til divs med lande og hoteller
    const [CountryData, setCountryData] = useState(null);
    return (
        <div className="Destinations">
            <div className="countrylist">
                <CountryList setCountryData={setCountryData} />
            </div>
            <div className="citylist">
                <CityList data={CountryData} />
            </div>
        </div>
    )
}

// Komponent til at loope array med byer
const CityList = props => {
    const {data} = props;

    return (
        <div className="locationGrid">
            {data && data.map(city => (
                <div key={"city-" + city.id}>
                    <div className="gridItem">
                        <Link className="citylinks" to={"/city?id=" + city.id}>
                            <img alt={city.name} src={city.image} />
                            <h4>{city.name}</h4>
                            <p>{city.description.slice(0,100)}...</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

// Komponent til at fetche lande liste og detaljer
const CountryList = props => {
    const { setCountryData } = props;
    const [apiData, setApiData] = useState(null);

    // Henter liste af lande
    useEffect(() => {
        if(!apiData) {
            fetch('https://api.mediehuset.net/overlook/countries')
                .then((res) => res.json())
                .then((data) => setApiData(data));
        }
    }, [apiData, setApiData]);

    // Henter land detaljer ved klik på et land fra listen
    const fetchCountryData = id => {
        fetch('https://api.mediehuset.net/overlook/countries/' + id)
            .then((res) => res.json())
            .then((data) => {
                setCountryData(data.item.cities.items);
        })
    }

    return (
        <div className="HOD">
             <Search/>
             <div className="SiteTitle"><img src={Title} alt="page title"/></div>
            <img className="Header" src={Header} alt='header'/>
            <div className="Menu">
                {apiData && apiData?.items.map((item) => {
                    return (
                        <span key={item.id}>
                            <Link className="links" onClick={e => fetchCountryData(item.id)}>
                                {item.name}
                            </Link>
                        </span>
                    )
                })}  
            </div>
            <div className="shadow"></div>
            
        </div>
    )
}
