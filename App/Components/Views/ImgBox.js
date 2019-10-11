import React from 'react';

// TODO: FIX

export default function ImgBox(props) {
  var inner_box_style = {};
  var image_style = {};
  var outer_box_style = {};

  function set_cover_format() {
    outer_box_style = {
      display: 'flex',
      position: 'relative',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: '100vh',
      overflow: 'hidden',
    };
    inner_box_style = {
      position: 'relative',
      flex: [1, 1, '100%'],
      minWidth: '100%',
      minHeight: '100%',
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    };
    image_style = {
      position: 'relative',
      maxHeight: '100%',
      maxWidth: '100%',
      margin: '0',
      flex: [1, 1, '100%'],
    };
  }

  function set_hero_format() {
    set_cover_format();
    Object.assign(outer_box_style, { maxHeight: '80vh' });
  }
  function set_contain_format() {
    set_cover_format();
    Object.assign(outer_box_style, { overflow: 'visible' });
    Object.assign(inner_box_style, {
      minWidth: 'unset',
      minHeight: 'unset',
      maxWidth: '100%',
      maxHeight: '100%',
    });
  }

  if (props.format) {
    var format = props.format;
    // TODO: SET DEFAULT FORMAT INITIALLY
    if (format === 'hero') {
      set_hero_format();
    } else if (format === 'contain') {
      set_contain_format();
    } else {
      // format == 'cover';
      set_cover_format();
    }
  }

  if (props.label) {
    var imgLabelStyle = {
      display: 'block',
      textAlign: 'center',
      margin: [0, 0, 0, 0],
      padding: [0, 0, 0, 0],
    };
    Object.assign(outer_box_style, { flexDirection: 'column' });
  } else {
    imgLabelStyle = { display: 'none' };
  }

  if (props.style) {
    Object.assign(image_style, props.style);
  }
  return (
    <div className='imgbox' style={outer_box_style}>
      <h3 style={imgLabelStyle} className='imgbox__label'>
        {props.label}
      </h3>
      <div className='imgboxin' style={inner_box_style}>
        <img
          className='imgbox__img'
          src={props.source}
          alt={props.alt}
          style={image_style}
        />
      </div>
    </div>
  );
}

export { ImgBox };
