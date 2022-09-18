import React from "react";
// import PosterImg from "./SliderPosterImg";
import Arrowleft from "./Image/ArrowLeft.png";
import Arrowright from "./Image/ArrowRight.png";

const SliderPoster = (props) => {
  // console.log(PosterImg[0]);
  let PosterImg = props.PosterImg;
  return (
    <div className="PosterContainer">
      <h1>{props.Topic}</h1>
      <div className="PosterOuter">
        <div className="buttonsPoster">
          <button >
            <img src={Arrowleft} alt="LeftArrow" id="leftBtn" width="25px" />
          </button>
          <button className="RightPosterBtn">
            <img src={Arrowright} alt="ArrowRight" id="rightBtn" width="25px" />
          </button>
        </div>

        {PosterImg.map((curr) => {
          return(

          <div className="PosterInner">
            <div className="PosterText">
              <h4>{curr.Name}</h4>
              <p>{curr.Timing}</p>
              <p>{curr.Description}</p>
              <button>WATCH MOVIE</button>
              <button>ADD TO WATCHLIST</button>
            </div>
            <img src={curr.Image} alt="Image" width="165px" />
          </div>
          )
        })}

        {/* <div className="PosterInner">
          <div className="PosterText">
            <h4>{PosterImg[0].Name}</h4>
            <p>{PosterImg[0].Timing}</p>
            <p>{PosterImg[0].Description}</p>
            <button>WATCH MOVIE</button>
            <button>ADD TO WATCHLIST</button>
          </div>
          <img src={PosterImg[0].Image} alt="Image" width="165px" />
        </div>
        <div className="PosterInner">
          <div className="PosterText">
            <h4>{PosterImg[1].Name}</h4>
            <p>{PosterImg[1].Timing}</p>
            <p>{PosterImg[1].Description}</p>
            <button>WATCH MOVIE</button>
            <button>ADD TO WATCHLIST</button>
          </div>
          <img src={PosterImg[1].Image} alt="Image" width="165px" />
        </div>
        <div className="PosterInner">
          <div className="PosterText">
            <h4>{PosterImg[2].Name}</h4>
            <p>{PosterImg[2].Timing}</p>
            <p>{PosterImg[2].Description}</p>
            <button>WATCH MOVIE</button>
            <button>ADD TO WATCHLIST</button>
          </div>
          <img src={PosterImg[2].Image} alt="Image" width="165px" />
        </div>
        <div className="PosterInner">
          <div className="PosterText">
            <h4>{PosterImg[3].Name}</h4>
            <p>{PosterImg[3].Timing}</p>
            <p>{PosterImg[3].Description}</p>
            <button>WATCH MOVIE</button>
            <button>ADD TO WATCHLIST</button>
          </div>
          <img src={PosterImg[3].Image} alt="Image" width="165px" />
        </div>
        <div className="PosterInner">
          <div className="PosterText">
            <h4>{PosterImg[4].Name}</h4>
            <p>{PosterImg[4].Timing}</p>
            <p>{PosterImg[4].Description}</p>
            <button>WATCH MOVIE</button>
            <button>ADD TO WATCHLIST</button>
          </div>
          <img src={PosterImg[4].Image} alt="Image" width="165px" />
        </div>
        <div className="PosterInner">
          <div className="PosterText">
            <h4>{PosterImg[5].Name}</h4>
            <p>{PosterImg[5].Timing}</p>
            <p>{PosterImg[5].Description}</p>
            <button>WATCH MOVIE</button>
            <button>ADD TO WATCHLIST</button>
          </div>
          <img src={PosterImg[5].Image} alt="Image" width="165px" />
        </div>
        <div className="PosterInner">
          <div className="PosterText">
            <h4>{PosterImg[6].Name}</h4>
            <p>{PosterImg[6].Timing}</p>
            <p>{PosterImg[6].Description}</p>
            <button>WATCH MOVIE</button>
            <button>ADD TO WATCHLIST</button>
          </div>
          <img src={PosterImg[6].Image} alt="Image" width="165px" />
        </div>
        <div className="PosterInner">
          <div className="PosterText">
            <h4>{PosterImg[7].Name}</h4>
            <p>{PosterImg[7].Timing}</p>
            <p>{PosterImg[7].Description}</p>
            <button>WATCH MOVIE</button>
            <button>ADD TO WATCHLIST</button>
          </div>
          <img src={PosterImg[7].Image} alt="Image" width="165px" />
        </div>
        <div className="PosterInner">
          <div className="PosterText">
            <h4>{PosterImg[8].Name}</h4>
            <p>{PosterImg[8].Timing}</p>
            <p>{PosterImg[8].Description}</p>
            <button>WATCH MOVIE</button>
            <button>ADD TO WATCHLIST</button>
          </div>
          <img src={PosterImg[8].Image} alt="Image" width="165px" />
        </div>
        <div className="PosterInner">
          <div className="PosterText">
            <h4>{PosterImg[9].Name}</h4>
            <p>{PosterImg[9].Timing}</p>
            <p>{PosterImg[9].Description}</p>
            <button>WATCH MOVIE</button>
            <button>ADD TO WATCHLIST</button>
          </div>
          <img src={PosterImg[9].Image} alt="Image" width="165px" />
        </div>

        <div className="PosterInner">
          <div className="PosterText">
            <h4>{PosterImg[10].Name}</h4>
            <p>{PosterImg[10].Timing}</p>
            <p>{PosterImg[10].Description}</p>
            <button>WATCH MOVIE</button>
            <button>ADD TO WATCHLIST</button>
          </div>
          <img src={PosterImg[10].Image} alt="Image" width="165px" />
        </div> */}
      </div>
    </div>
  );
};

export default SliderPoster;
