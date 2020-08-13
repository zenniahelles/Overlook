import React, { useState, useEffect } from "react";
import Header from '../../images/iceland.jpg'
import Search from '../../Search/Search'
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

export default function Nyhed(props) {
    const { id } = getParams(props.location.search);
    const [data, setData] = useState(null);

    useEffect(() => {
      if (!data && id) {
        fetch("https://api.mediehuset.net/overlook/news/" + id)
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
            <div className=" Nyhed">
                    <img key={data.item.id} className="NyhedImg" src={data.item.image} /> 
                    <h3 key={data.item.id}>{data.item.title}</h3>
                    <p key={data.item.id}>{data.item.content}</p>
                    <Link to={"/"}>Tilbage</Link>
              </div>
          </div>
        ) : (
          <div>Loading..</div>
        )}
      </div>
    );
  }