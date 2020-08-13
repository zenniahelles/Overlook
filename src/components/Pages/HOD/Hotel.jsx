import React, { useState, useEffect } from "react";
import './HOD.scss';
import Header from '../../images/iceland.jpg'
import Search from '../../Search/Search'

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

export default function Hotel(props) {
    const { id } = getParams(props.location.search);
    const [data, setData] = useState(null);
    useEffect(() => {
      if (!data && id) {
        fetch("https://api.mediehuset.net/overlook/hotels/" + id)
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
                      

        <div className="RoomGrid">
            <div className="griditem1">
            <div className="RoomSubGrid">
                    <div>
                      <h3>{data.item.title}</h3>
                      <p>{data.item.teaser}</p>
                      <h3>Vores værelser</h3>
                    </div>
              {data.item && data.item.rooms.items.map(room => {
                  return (
                    <div className="griditem">
                        <img key={room.id} src={room.images[0].image} /> 
                        <h3>{room.room_title}</h3>
                    </div>
                        )
              })}
              </div>
              </div>
              <div className="griditem2">
                  <h4>Hotel Information</h4>
                    <p>{data.item.address}</p>
                      <p>{data.item.phone}</p>
                      <h4>Faciliteter:</h4>
                    <button>Like</button>
                </div>
              </div>
          </div>
        ) : (
          <div>Loading..</div>
        )}
      </div>
    );
  }