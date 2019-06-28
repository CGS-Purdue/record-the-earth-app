import React from 'react';

export default function ImageBox(props) {
  return (
    <div class="theme_image_container">
      <div class="theme_image">
        <h3 class="theme_image__label">{props.label}</h3>
        <img className="theme_image__img"
            src={props.source}
            alt={props.label}
        />
      </div>
    </div>
  );
}

export { ImageBox };
