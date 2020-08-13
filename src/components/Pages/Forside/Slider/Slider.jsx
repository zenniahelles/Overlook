import React,{useState} from "react";
import './Slider.scss';
import ImgComp from "./ImgComp";
import i1 from "./pics/1.jpg";
import i2 from "./pics/2.jpg";
import i3 from "./pics/3.jpg";
import Title from './pics/title.png';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";


function Slider() {
let sliderArr = [
<ImgComp src={i1}/>, 
<ImgComp src={i2}/>, 
<ImgComp src={i3}/>
];
const [x, setX] = useState(0);

const goLeft=()=>{
    x === 0 ? setX(-100*(sliderArr.length-1)) : setX(x + 100);
};

const goRight=()=>{
    x === -100*(sliderArr.length-1) ? setX(0) : setX(x - 100);
};

    return (
        <div className="slider">
            {
                sliderArr.map((item,index)=> {
                    return(
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
                })}
                <div className="sliderTitle"><img src={Title} /></div>
                <button id="goLeft" onClick={goLeft}>
                    <FaChevronCircleLeft />
                </button>
                <button id="goRight" onClick={goRight}>
                <FaChevronCircleRight />
                </button>
        </div>
    );
}

export default Slider;