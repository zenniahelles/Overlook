import React, { useState, useEffect } from 'react';
import './Forside.scss'
import Slider from './Slider/Slider'
import Search from '../../Search/Search'
import NewsFetch from './NewsFetch'
import ShowRooms from './ShowRooms'

export default function Forside(props) {

    

    return (
        <div>
            <Search />
            <Slider className="Slider" />
            <div className="Forside">
                <NewsFetch />
                <ShowRooms />
            </div>
        </div>
    )
}
