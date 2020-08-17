import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Rooms.scss'
import Header from '../../images/iceland.jpg'
import Search from '../../Search/Search'
import  Room1  from '../../images/room1.jpg'
import  Room2  from '../../images/room2.jpg'
import  Room3  from '../../images/room3.jpg'
import  Room4  from '../../images/room4.jpg'
import Person from '../../images/person-icon.svg'
import Bed from '../../images/bed-icon.svg'
import { FcCheckmark } from "react-icons/fc";
import Title from '../../images/title2.png'


export default function Rooms(props) {

    // Komponent til divs med lande og hoteller
    const [CountryData, setCountryData] = useState(null);
    return (
        <div className="Rooms">
        <Search/>
        <div className="SiteTitle"><img src={Title} alt="site-title"/></div>
        <img className="Header" src={Header} alt='header'/>
        <div className="RoomsGrid">

        <div className="griditem1">
                <RoomView data={CountryData} />
            </div>
            <div className="griditem2">
                <RoomList setCountryData={setCountryData} />
            </div>

        </div>
        </div>
    )
}

// Komponent til at loope array med byer
const RoomView = props => {
    const {data} = props;

    return (
<div>
{data ? (
          <div>
                    <h3>{data.item.title}</h3>
                    <div className="ImagesGrid">
                    {data.item && data.item.images.map(room => {
                        return (
                          <div>
                            <img src={room.image}/>
                            </div>
                        )
                      })}
                    </div>
                    <br/>
                    <p>{data.item.description}</p>
                    <p><img className="SVG" src={Bed}/>{data.item.area}.</p>
                    <p><img className="SVG" src={Person}/>Plads til {data.item.num_persons} personer.</p>
                    <h4>Værelset er udstyret med:</h4>
                    <div className="FaciliteterBox">
                    {data.item && data.item.facilities.map(facilities => {
                        return (
                          
                          <p><FcCheckmark size="20" className="checkmark"/> {facilities.title}</p>
                       )
                      })}
                       </div>
                      <h4>Priser:</h4>
                      <p><span>NORMAL Pris - inkl. morgenmad - Kan ikke ændres eller afbestilles</span><span className="price">{data.item.day_price_normal} DKK/nat</span></p>
                    <p><span>FLEX Pris - inkl. morgenmad - Kan ændres eller afbestilles</span><span className="price">{data.item.day_price_flex} DKK/nat</span></p>
          </div>
        ) : (
          <div>

<h2>Se vores udvalg af værelser</h2>
                        <p>Hos Overlook handler den gode hoteloplevelse helt enkelt om at give dig en bedre service, en bedre søvn og en bedre start på dagen, så du tager videre med en god fornemmelse og får lyst til at komme tilbage.</p>

                        <p>Når du træder indenfor på Overlooks hoteller, oplever du det med det samme. Det er her, store øjeblikke deles med venner og familie, og nye relationer opstår. Hvor fremtiden formes, vigtige møder finder sted, og en god middag måske fører til kærlighed. Her sker altid noget.</p>

                        <p>Med 31 hoteller på 29 destinationer i syv lande har alle vores hoteller deres egen unikke personlighed og atmosfære. Men nogle ting er en selvfølge, når du vælger at bo hos os.</p>

                        <p>Du vil opleve værelser af god komfort og høj kvalitet når du bor på et af vores hoteller. Vi har nemlig hentet hjælp fra de bedste eksperter på området.  Overlook har et tæt samarbejde med den legendariske hotelkonge, Bjarne Rother, som anses for at være en af verdens mest erfarne indenfor værelsesudlejning omkring Østersøen. Og han har flere gange givet Overlook’s hoteller mere end fem stjerner.</p>

                        <p>Du kan se de forskellige værelsestyper ved at klikke dig rundt i menuen til højre.</p>
                    
                        <div className="ImagesGrid">
                        <img src={Room1}/>
                        <img src={Room2}/>
                        <img src={Room3}/>
                        <img src={Room4}/>
                        </div>

          </div>
        )}

</div>
    )
}

// Komponent til at fetche værelse liste og detaljer
const RoomList = props => {
    const { setCountryData } = props;
    const [apiData, setApiData] = useState(null);

    // Henter liste af værelser
    useEffect(() => {
        if(!apiData) {
            fetch('https://api.mediehuset.net/overlook/rooms/by_hotel/1')
                .then((res) => res.json())
                .then((data) => setApiData(data));
        }
    }, [apiData, setApiData]);

    // Henter værelse detaljer ved klik på et værelse fra listen
    const fetchCountryData = id => {
        fetch('https://api.mediehuset.net/overlook/rooms/' + id)
            .then((res) => res.json())
            .then((data) => {
                setCountryData(data);
        })
    }

    return (
        <div>
            <div>
            <h4>Værelsestyper</h4>
            <div className="RoomListGrid">
                {apiData && apiData?.items.map((item) => {
                    return (
                        <span key={item.id}>
                            <Link className="links" onClick={e => fetchCountryData(item.id)}>
                                <img className="roomListImg" src={item.images[0].image}/>
                                <p>{item.room_title}</p>
                            </Link>
                        </span>
                    )
                })}  </div>
            </div>
        </div>
    )
}
