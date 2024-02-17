import { FC } from "react";

interface CardsData {
  data: any;
}

const Card: FC<CardsData> = ({ data }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={data.image} className="card-img-top" alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
        <a className="icon-link" href="#">
          Skaityti receptą
        </a>
      </div>
    </div>
  );
}

export default Card;