import React, { useState } from "react";
import ArrowLeft from "./Image/ArrowLeft.png";
import ArrowRight from "./Image/ArrowRight.png";
// import Slide from "./SliderApi";
import Slide1 from "./Image/Slide.jpg";
import Slide2 from "./Image/Slide2.jpg";
import Slide3 from "./Image/Slide3.jpg";
import Slide4 from "./Image/Slide4.jpg";
import Slide5 from "./Image/Slide5.jpg";

const Slider = () => {
  const [Data, setData] = useState([
    {
      HeadingText: "Shoorveer",
      Content:"Hotstar Specials- Action  ",
      ParaText:
        "When an imminent attack threatens India ,an elite unit - the Hawks - undertake a mission that will test the limits of their courage and grit .",
      Image: Slide1,
    },
    {
      HeadingText: "The Warriorr",
      Content:"Telugu Action - 2022",
      ParaText:
        " Tormented by the city's medical mafia and its kingpin, Guru, Dr Satya flees the city. However, he returns as a powerful police officer to put an end to Guru.",
      Image: Slide2,
    },
    {
      HeadingText: "Bigg Boss",
      Content:"Star Maa Telugu - Reality ",
      ParaText:
        "It's time for real entertainment ! King Nagarjuna is back with a new interesting mix of contestants who are all set to face the test of a lifetime !",
      Image: Slide3,
    },
    {
      HeadingText: "Ghum Hai Kisikey Pyaar Meiin",
      Content:"StarPlus . Hindi . Romance",
      ParaText:
        " Going beyond the chains of duty , Virat has fallen in love with Sai. But will an obsessed Pakhi let go of his broken promises ?",
      Image: Slide4,
    },
    {
      HeadingText: "Koffee With Karan",
      Content:"Star World English Talk Show",
      ParaText:
        " NEW EPISODE EVERY THURSDAY . Dig into gripping inside scoops with Karan Johar as he returns with your favourite celebs to explore what's brewing in B - Town .",
      Image: Slide5,
    }
  ]);
  const [Count, setCount] = useState(0);

  // console.log(Data.length)
  // console.log(Count);
  // console.log(typeof(Count))
  // let i = 1;
  let i = Count;
  const ArrowRightClick = () => {
    i++;
    if (i < Data.length) setCount(i);
    else {
      i = 0;
      setCount(i);
    }
    // alert(i);
    // console.log(Count)
  };

  const ArrowLeftClick = () => {
    i--;
    if (i >= 0)
     setCount(i);
    else {
      i = Data.length - 1 ;
      setCount(i);
      // i = ;
    }
    setCount(i);
  };

  return (
    <div className="Slider">
      <div className="sliderImg">
        <div className="ImageWidth">
          {/* {Slide.map((curr) => {
            return (
              <>
                <div className="text">
                  <h1>{curr.HeadingText}</h1>
                  <p>{curr.ParaText}</p>
                </div>
                <img src={curr.Image} alt="Slide" />
              </>
            );
          })} */}

          {/* <div className="text">
            <>
              <h1>{Slide[i].HeadingText}</h1>
              <p>{Slide[i].ParaText}</p>
            </>
          </div>
          <img src={Slide[i].Image} alt="Slide" /> */}
          <div className="text">
            <h1>{Data[Count].HeadingText}</h1>
            <h3>{Data[Count].Content}</h3>
            <p>{Data[Count].ParaText}</p>
          </div>
          <img src={Data[Count].Image} alt="Slide" />
        </div>
      </div>
      <img
        src={ArrowLeft}
        alt="arrowLeft"
        className="button"
        onClick={ArrowLeftClick}
        id="ArrowLeft"
        height="35px"
      />
      <img
        src={ArrowRight}
        alt="arrowRight"
        className="button"
        onClick={ArrowRightClick}
        id="ArrowRight"
        height="35px"
      />
    </div>
  );
};

export default Slider;
