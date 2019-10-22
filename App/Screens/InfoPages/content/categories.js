import htmlClean from '../htmlClean';

const content = `
<div class="full-container" id="kinds-of-sounds">
  <h2>What Kind of Sounds Make a Soundscape</h2>
  <div id="sound-types">
    <div class="sound-category" id="category-bio">
      <div id="type-biophony" class="sound-bubble"></div>
      <h3>Biophony</h3>
      <p>Sounds of birds and animals</p>
    </div>
    <div class="sound-category" id="category-geo">
      <div id="type-geophony" class="sound-bubble"></div>
      <h3>Geophony</h3>
      <p>Sounds of wind and water</p>
    </div>
    <div class="sound-category" id="category-ant">
      <div id="type-anthrophony" class="sound-bubble"></div>
      <h3>Anthrophony</h3>
      <p>Sounds of vehicles and machines</p>
    </div>
  <div class="sound-category" id="category-emo">
    <div id="type-emotion" class="sound-bubble"></div>
    <h3>Emotion</h3>
    <p>Sounds that make you happy, stressed, or excited</p>
    </div>
  </div>
</div>`;


const html = `<main>${content}</main>`;

export default htmlClean(html)
