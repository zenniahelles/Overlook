import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Forside.scss'

export default function ShowRooms(props) {

const [apiData, setApiData] = useState(null);

    async function getNews() {

        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');

        try {
            const request = await fetch('https://api.mediehuset.net/overlook/rooms/by_hotel/1', { headers: fetchHeaders });
            const response = await request.json();
            console.log(response);
            setApiData(response);
        } catch (error) {
            console.log('getNews -> Error', error);
        }
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <div>
            <h2>Se udvalgte værelser</h2>
                <section className="RoomsGrid">
                    {
                        apiData && apiData.items.slice(0,3).map(room => (
                            <div key={"room-" + room.hotel_id}>
                                <Link className="links" to={"/room?id=" + room.id}>
                                <img src={room.images[0].image} />
                                <h3>{room.room_title}</h3>
                                <p>{room.description.slice(0,100)}...</p>
                                </Link>
                            </div>
                    ))}
                </section>    
            </div>
    )
}