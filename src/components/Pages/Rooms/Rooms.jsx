import React from 'react'
import './Rooms.scss'
import Search from '../../Search/Search'
import Header from '../../images/room.jpg'
import  Room1  from '../../images/room1.jpg'
import  Room2  from '../../images/room2.jpg'
import  Room3  from '../../images/room3.jpg'
import  Room4  from '../../images/room4.jpg'


export default function Rooms(props) {
    return (
        <div className="Rooms">
            <Search/>
            <img className="Header" src={Header} alt='header'/>
                <div className="RoomsGrid">
                    <div className="griditem1">
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

                    <div className="griditem2">
                        <h4>Værelsestyper</h4>
                    </div>

                </div>
                    
        </div>
    )
}
