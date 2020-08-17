import React from 'react'
import './Reservation.scss'
import Form from  './Form.js'
import { FcCheckmark } from "react-icons/fc";
import Search from '../../Search/Search'
import Header from '../../images/overlook-seurahuone.jpg'
import Title from '../../images/title3.png'

export default function Reservation(props) {
    return (
        <div className="Reservation">
            <Search/>
            <div className="SiteTitle"><img src={Title} alt="site-title"/></div>
            <img className="Header" src={Header} alt='header'/>
            <section className="reservationGrid">

            <div className="griditem1">
            <h2>Reserver dit foretrukne værelse</h2>
            <p>Her kan du vælge destination, hotel og værelsestype og gennemføre din Overlook booking.</p>
            <Form/>
            </div>

            <div className="griditem2">
                <h4>Betingelser</h4>

                <p><FcCheckmark/> Reduceret pris - spar op til 25%.</p>

                <p><FcCheckmark/> Kan kun bookes online via Overlook website og app.</p>

                <p><FcCheckmark/> Bestil helt op til og med ankomstdagen.</p>

                <p><FcCheckmark/> Bookinger tilbagebetales ikke og kan ikke ændres eller annulleres.</p> 

                <p><FcCheckmark/> Beløbet debiteres kreditkort på reservationstidspunktet.</p>

                <p><FcCheckmark/> Morgenmad er inkluderet.</p>
            </div>

            </section>
        </div>
    )
}