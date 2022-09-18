import React from "react";
import DisneyLogo from "./DisneyLogo";
import HindiEnglish from "./HindiEnglish";



const Header = () => {
  const Search = () => {
    document.getElementById("search").style.width = "300px";
  };

  const TvArr = [
    "Other Show",
    "Hotstar Special",
    "Quix",
    "Star Jalsha",
    "Star Vijay",
    "Star Bharat",
    "Asianet",
    "more..",
  ];
  const MovieArr = [
    "Odia",
    "Hindi",
    "Bengali",
    "Telugu",
    "Malayalam",
    "Tamil",
    "Marathi",
    "English",
    "Kannada",
    "Korean",
    "Japanese",
  ];
  const SportsArr = [
    "Cricket",
    "Football",
    "Formula 1",
    "Kabaddi",
    "Hockey",
    "Formula E",
    "Martial Arts",
    "Tennis",
    "Khelo India",
    "American Football",
    "Athletics",
    "Golf",
  ];
  const BurgerArr = ["Channel", "Languages", "Genres"];
  return (
    <header className="Header">
      <ul>
        <div className="burgerOuter">
          <div className="burger">
            <div className="burgerLine"></div>
            <div className="burgerLine burgerMiddle"></div>
            <div className="burgerLine"></div>
          </div>
          <div className="HoverDropDownOuter">
          <div className="HoverDropDownInner">

          <ul className="HoverDropDownMenu">
            {BurgerArr.map((curr) => {
              return (
                <div id="DropDownCont">
                  <a href="#,">
                  {/* <FontAwesomeIcon icon="fa-regular fa-language" /> */}
                  {/* <HindiEnglish /> */}
                    <h4>{curr}</h4>
                  </a>
                </div>
              );
            })}
          </ul>
          </div>
          </div>
        </div>
      </ul>
      <DisneyLogo />
      <ul className="HeaderMenu">
        <li>
          TV
          <ul className="HoverDropDown">
            {TvArr.map((curr) => {
              return (
                <>
                  <a href="#">
                    <h4>{curr}</h4>
                  </a>
                </>
              );
            })}
          </ul>
        </li>
        <li>
          Movies
          <ul className="HoverDropDown">
            {MovieArr.map((curr) => {
              return (
                <>
                  <a href="#">
                    <h4>{curr}</h4>
                  </a>
                </>
              );
            })}
          </ul>
        </li>
        <li>
          Sports
          <ul className="HoverDropDown">
            {SportsArr.map((curr) => {
              return (
                <>
                  <a href="#">
                    <h4>{curr}</h4>
                  </a>
                </>
              );
            })}
          </ul>
        </li>
        <li>Disney+</li>
        <li id="liKids">KiDS</li>
      </ul>

      <ol>
        <li>
          <input
            type="search"
            name="search"
            onClick={Search}
            id="search"
            placeholder="Search"
          />
        </li>
        <li className="suBtn">SUBSCRIBE</li>
        <li>LOGIN</li>
      </ol>
    </header>
  );
};

export default Header;
