import React from "react";
import "./Card.css";
import userData from "../data.json"; // Adjust the path as necessary
import imageDaniel from "../image-daniel.jpg";
import imageJonathan from "../image-jonathan.jpg";
import imageJeanette from "../image-jeanette.jpg";
import imagePatrick from "../image-patrick.jpg";
import imageKira from "../image-kira.jpg";

// Create a mapping of icon names to imported images
const iconMap = {
  "image-daniel.jpg": imageDaniel,
  "image-jonathan.jpg": imageJonathan,
  "image-jeanette.jpg": imageJeanette,
  "image-patrick.jpg": imagePatrick,
  "image-kira.jpg": imageKira,
};

function Card({ userData }) {
  const cards = userData.map((card) => (
    <div
      key={card.Name}
      className={`card ${card.id}`}
      style={{ backgroundColor: `${card.backgroundColor}` }}
    >
      <div className="card-title">
        <img src={iconMap[card.Icon]} alt={card.Name} />
        <div>
          <p
            style={{
              color:
                card.backgroundColor === "hsl(0, 0%, 100%)" ? "black" : "white",
            }}
          >
            {card.Name}
          </p>
          <p style={{ color: "hsl(0, 0%, 81%)" }}>{card.Academy}</p>
        </div>
      </div>

      <div className="card-text">
        <h1
          style={{
            color:
              card.backgroundColor === "hsl(0, 0%, 100%)" ? "black" : "white",
          }}
        >
          {card.Title}
        </h1>
        <p
          style={{
            color:
              card.backgroundColor === "hsl(0, 0%, 100%)"
                ? "hsl(217, 19%, 35%)"
                : "hsl(210, 46%, 95%)",
          }}
        >
          {card.Text}
        </p>
      </div>
    </div>
  ));
  return <main>{cards}</main>;
}

export default Card;
