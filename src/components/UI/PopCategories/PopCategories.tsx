const PopCategories = () => {
  return (
    <section>
      <p className="h1 p-3 text-center">Populiariausios kategorijos</p>
      <div className="container text-center">
        <div className="row row-cols-2 justify-content-md-center p-3">
          <div className="col"><img src="https://www.lamaistas.lt/uploads/modules/recipes/without-watermark/37888.jpg" style={{width: 150, height: 150}} className="border border-light rounded-circle" alt="Makaronai"/><br/><p className="h5">Makaronai</p></div>
          <div className="col"><img src="https://www.lamaistas.lt/uploads/modules/recipes/thumb920x573/14535.jpg" style={{width: 150, height: 150}} className="border border-light rounded-circle" alt="Picos"/><br/><p className="h5">Picos</p></div>
          <div className="col"><img src="https://www.lamaistas.lt/uploads/modules/articles/original/2020/12/45297.jpg" style={{width: 150, height: 150}} className="border border-light rounded-circle" alt="Desertai"/><br/><p className="h5">Desertai</p></div>
          <div className="col"><img src="https://www.lamaistas.lt/uploads/modules/recipes/without-watermark/28709.jpg" style={{width: 150, height: 150}} className="border border-light rounded-circle" alt="Veganiški"/><br/><p className="h5">Veganiški</p></div>
        </div>
      </div>
    </section>
  );
}

export default PopCategories;