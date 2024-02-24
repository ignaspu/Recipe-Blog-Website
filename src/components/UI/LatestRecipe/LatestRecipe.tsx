import { useContext } from "react";
import Latest from "./Latest";
import CardContext from "../../../context/CardContext";
import { Link } from "react-router-dom";

const LatestRecipe = () => {

  const { cards } = useContext(CardContext);

  return (
    <section className="bg-body mb-3">
      <p className="h1 p-3 text-center">Naujausi receptai</p>
      <div className="d-flex justify-content-center gap-2 flex-wrap">
        {cards.map((item: any) => {
          return (
            <Latest key={item.id} data={item} />
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <Link to="receptai"><button type="button" className="btn btn-outline-secondary mt-3">Žiūrėti daugiau...</button></Link>
      </div>
    </section>
  );
}

export default LatestRecipe;