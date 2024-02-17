import { FC } from "react";

interface LatestData {
  data: any;
}

const Latest: FC<LatestData> = ({ data }) => {
  return (
    <div className="card border-info" style={{ maxWidth: "18rem" }}>
      <div className="card-header">{data.category}</div>
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

export default Latest;