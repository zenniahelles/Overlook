import Forside from '../Pages/Forside/Forside';
import HOD from '../Pages/HOD/HOD';
import Login from '../Pages/Login/Login';
import Rooms from '../Pages/Rooms/Rooms';
import Reservation from '../Pages/Reservation/Reservation'
import City from '../Pages/HOD/City';
import Hotel from '../Pages/HOD/Hotel';
import Nyhed from '../Pages/Forside/Nyhed';


/**
 * Array til at styre routes med
 * @name String Navn som bliver vist i navbar
 * @path String Sti
 * @exact Bool Grad af match
 * @display Bool Angiver om punktet skal vises i navbar
 * @component Object Komponent som skal afvikles 
 */

const routes = [
{
    name: 'Forside',
    path: '/',
    exact: true,
    component: Forside
},
{
    name: 'Hoteller og destinationer',
    path: '/hoteller-og-destinationer',
    exact: true,
    display:true,
    component: HOD
},
{
    name: 'Værelser',
    path: '/Værelser',
    exact: true,
    display: true,
    component: Rooms
},
{
    name: 'Reservation',
    path: '/reservation',
    exact: true,
    display:true,
    component: Reservation
},
{
    name: 'Login',
    path: '/login',
    exact: true,
    display:true,
    component: Login
},
{
    name: 'City page',
    path: '/city',
    exact: true,
    display: false,
    component: City
},
{
    name: 'Nyhed page',
    path: '/nyhed',
    exact: true,
    display: false,
    component: Nyhed
},
{
    name: 'Hotel page',
    path: '/hotel',
    exact: true,
    display: false,
    component: Hotel
}
];

export default routes;