import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

import imageUrl from '../assets/icons.svg';


storiesOf('Welcome', module)
  .addParameters({
    assets: [
      'https://via.placeholder.com/300/09f/fff.png', // link to an external image
    ],
  })
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  // .addParameters({
  //   assets: [
  //     'https://via.placeholder.com/300/09f/fff.png', // link to an external image
  //   ],
  // })
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

function ThemeImage(props) {
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


storiesOf('Theme', module)
  // .addParameters({
  //   assets: [
  //     imageUrl,                                      // link to a file imported
  //     'https://via.placeholder.com/300/09f/fff.png', // link to an external image
  //     'https://www.example.com',                     // link to a webpage
  //     'https://www.example.com?id={id}',             // link to a webpage with the current story's id in the url
  //   ],
  // })
  .add('icons', () => <ThemeImage label="Theme Icons" source={imageUrl} />);
