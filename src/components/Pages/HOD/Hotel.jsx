import React, { useState, useEffect } from "react";
import './HOD.scss';
import Header from '../../images/iceland.jpg'
import Search from '../../Search/Search'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaThumbsUp } from 'react-icons/fa'

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
                      <h2>{data.item.title}</h2>
                      <p className="teaser">{data.item.teaser}</p>
                      <h3>Vores værelser</h3>
                    </div>
              {data.item && data.item.rooms.items.map(room => {
                  return (
                    <div className="griditem">
                        <img key={room.id} src={room.images[0].image} /> 
                        <h4>{room.room_title}</h4>
                        <p>{room.area}. Plads til {room.num_persons} personer. </p>
                        <p>{room.description}</p>
                        <h4 className="price">Fra {room.day_price_normal} DKK</h4>
                        <button><MdKeyboardArrowDown className="arrow" size="30"/>Vis mere</button>
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
                      {data.item && data.item.facilities.map(room => {
                        return (
                          <div>
                            <p>{room.title}</p>
                            </div>
                        )
                      })}
                    <button className="like"><FaThumbsUp size="15"/> Like</button>
                </div>
              </div>
          </div>
        ) : (
          <div>Loading..</div>
        )}
      </div>
    );
  }