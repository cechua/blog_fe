import React, { useState } from "react";
import { motion } from "framer-motion";
const Card = ({
  imageSrc,
  imageSrcHover,
  cardText,
  cardSecondaryText,
  onClickHandler,
}) => {
  const [image, setImage] = useState(imageSrc);
  return (
    <div
      className="card"
      onClick={onClickHandler}
      onMouseOver={() => setImage(imageSrcHover)}
      onMouseOut={() => setImage(imageSrc)}
    >
      <div className="image-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={image}
        >
          <img src={image} alt={cardText} className="card-image" />
        </motion.div>
      </div>
      <div className="card-text-container">
        <p className="card-text card-text-name">{cardText}</p>
        <p className="card-text card-secondaryText-name">
          ${cardSecondaryText}
        </p>
      </div>
    </div>
  );
};

export default Card;
