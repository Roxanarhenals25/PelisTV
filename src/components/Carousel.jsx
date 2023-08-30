import React from 'react'
import pokemon1Image from '../assets/pokemon1.jpg';
import pokemon2Image from '../assets/pokemon2.png';
import portada2Image from '../assets/portada2.jpg';

export const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={pokemon1Image} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={pokemon2Image} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={portada2Image} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
};

