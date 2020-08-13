import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Forside.scss'

export default function NewsFetch(props) {

const [apiData, setApiData] = useState(null);

    async function getNews() {

        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');

        try {
            const request = await fetch('https://api.mediehuset.net/overlook/news', { headers: fetchHeaders });
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
            <h2>Se vores nyheder</h2>
                <section className="NyhederGrid">
                    {
                        apiData && apiData.items.slice(0,3).map(nyhed => (
                            <div key={"nyhed-" + nyhed.id}>
                                <Link className="links" to={"/nyhed?id=" + nyhed.id}>
                                <img src={nyhed.image} />
                                <h3>{nyhed.title}</h3>
                                <p>{nyhed.teaser.slice(0,100)}...</p>
                                </Link>
                            </div>
                    ))}
                </section>    
            </div>
    )
}