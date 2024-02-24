const Hero = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://api.delfi.lt/media-api-image-cropper/v1/7c9ad940-7b4b-11ed-b50f-6fa38dc383a6.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://priekavos.lt/wp-content/uploads/2015/11/maistas.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://s1.15min.lt/images/photos/2018/08/17/original/kepsnineje-keptas-veganiskas-maistas-5b76bce4872f5.jpg" className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hero;