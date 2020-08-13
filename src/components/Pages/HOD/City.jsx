import React, { useState, useEffect } from "react";
import './HOD.scss';
import Header from '../../images/iceland.jpg'
import Search from '../../Search/Search'
import StarRating from './StarRating'
import { Link } from 'react-router-dom'

const getParams = (url) => {
  return url
    .split("?")[1]
    .split("&")
    .reduce((obj, keyvals) => {
      const [key, val] = keyvals.split("=");
      obj[key] = val;
      return obj;
    }, {});
};

export default function City(props) {
    const { id } = getParams(props.location.search);
    const [data, setData] = useState(null);
    useEffect(() => {
      if (!data && id) {
        fetch("https://api.mediehuset.net/overlook/hotels/by_city/" + id)
          .then((res) => res.json())
          .then((apidata) => setData(apidata));
      }
    }, [data, setData, id]);
    return (
      <div>
        {data ? (
          <div className="HOD">
              <Search/>
            <img className="Header" src={Header} alt='header'/>
            <div className="locationGrid">
              {data.items && data.items.map(hotel => {
                  return (
                      <div className="griditem">
                        <Link className="links" to={"/hotel?id=" + hotel.id}>
                    <img key={hotel.id} src={hotel.image} /> 
                      <h3 key={hotel.id}>{hotel.title}</h3>
                      </Link>
                      <StarRating/>
                      </div>
                  )
              })}
              </div>
          </div>
        ) : (
          <div>Loading..</div>
        )}
      </div>
    );
  }