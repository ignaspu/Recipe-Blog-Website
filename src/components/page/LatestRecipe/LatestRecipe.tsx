import { useContext } from "react";
import Latest from "./Latest";
import CardContext from "../../../context/CardContext";

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
        <button type="button" className="btn btn-outline-secondary mt-3">Žiūrėti daugiau...</button>
      </div>
    </section>
  );
}

export default LatestRecipe;