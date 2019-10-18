import htmlClean from './htmlClean';
import * as assets from './infoEntryAssets';

const style = `<style>
  .full-container {
    font-size: 14px;
    color: #FFF;
    width: 100%;
    padding: 100px 0;
    margin-left: auto;
    margin-right: auto;
    background-size: cover;
    background-position: center center;
  }
  .sound-bubble{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50%;
    border: 1px solid #5A5A5A;
    border-radius: 100px;
    padding: 20px;
    float: left;
    position: relative;
    width: 100px;
    height:100px;
    margin: 0 0 20px 20px;
    text-align: center;
    cursor: pointer;
    cursor: hand;
  }
  #type-biophony{background-image: url('${assets.birdImg}'); background-color: #269926;}
  #type-geophony{background-image: url('${assets.rainImg}'); background-color: #FFAA00 ;}
  #type-anthrophony{background-image: url('${assets.machinesImg}'); background-color: #BF3030;}
  #type-emotion{background-image: url('${assets.happyImg}'); background-color: #4284D3;}
  .sound-bubble:hover{ box-shadow: 0 0 10px; }
  .sound-bubble.active{ box-shadow: 0 0 10px; }
  .sound-bubble.active:hover{ }
  #kinds-of-sounds h2{ margin: -20px 0 20px 0; }
  #kinds-of-sounds h3{ margin: 40px 0 20px 0; }
  #sound-types{ height:280px; margin: 10px auto; }
  #sound-types p{ font-size: 13px; font-style: italic; color: #BBB; margin-top:18px; }
  .sound-category{ width: 180px; text-align: center; float: left; margin-top: 20px; }
  #interactive-app { position: absolute; }
  </style>`;

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

const html = `${style}${content}`;

export default htmlClean(html)
