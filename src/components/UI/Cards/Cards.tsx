import { useContext } from "react";
import CardContext from "../../../context/CardContext";
import Card from "../Card/Card";

const Cards = () => {

  const { cards } = useContext(CardContext);

  return (
    <section className="bg-body-secondary pb-3">
      <p className="h1 p-3 text-center">Skaniausi receptai</p>
      <div className="d-flex justify-content-center gap-2 flex-wrap">
        {cards.map((item: any) => {
          return (
            <Card key={item.id} data={item} />
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-outline-secondary mt-3">Žiūrėti daugiau...</button>
      </div>
    </section>
  );
}

export default Cards;