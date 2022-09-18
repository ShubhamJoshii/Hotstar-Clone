import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Slider from "./Slider"
import SliderPoster from "./SliderPoster"
import SliderRecommended from "./SliderRecommededImg"

import PosterImg from "./SliderPosterImg";

const App = ()=>{
    return(
        <>
            <Header />
            <Slider />
            <SliderPoster 
            key = {PosterImg}
            Topic='Latest & Trending' 
                PosterImg= {PosterImg}
            />
            <SliderPoster Topic='Movies Recommended For You' PosterImg= {SliderRecommended}/>
            <div className="Container">
                <Footer />
            </div>
        </>
    )
}

export default App;