import React from "react";

export default function TendenciasCard({ title, numberTweets }) {
  return (
    <div className="tendenciaCard">
      <h3 className="tendenciaTitle">#{title}</h3>
      <p className="tendenciaInfo">{numberTweets}</p>
      <hr />
    </div>
  );
}
