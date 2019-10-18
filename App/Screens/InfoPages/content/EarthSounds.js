import htmlClean from './htmlClean';

const style = `<style>
  .full-container {
    font-family: "open sans", Verdana, Geneva, sans-serif;
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
  .sound-bubble:hover{ box-shadow: 0 0 10px; }
  .sound-bubble.active{ box-shadow: 0 0 10px; }
  .sound-bubble.active:hover{ box-shadow: 0 0 10px #808080; }
  #type-biophony{background-image: url('images/icons/birdies.png'); background-color: #269926;}
  #type-geophony{background-image: url('images/icons/light-rain-icon.png'); background-color: #FFAA00 ;}
  #type-anthrophony{  background-image: url('images/icons/machines.png'); background-color: #BF3030;}
  #type-emotion{  background-image: url('images/icons/happy.png'); background-color: #4284D3;}
  #kinds-of-sounds h2{ margin: -20px 0 20px 0; }
  #kinds-of-sounds h3{ margin: 40px 0 20px 0; }
  #sound-types{ height:280px; margin: 10px auto; }
  #sound-types p{ font-size: 13px; font-style: italic; color: #BBB; margin-top:18px; }
  .sound-category{ width: 180px; text-align: center; float: left; margin-top: 20px; }
  #interactive-app { position: absolute; }
  </style>`;

const content = `
<div class="full-container" id="photo-container">
  <div id="join-us">
    <h2>What does the Earth sound like today?</h2>
    <p>Join with researchers involved in one of the newest scientific disciplines - Soundscape Ecology - as they map the sounds of our planet, and what they tell us about the health of the world we live in.</p>
  </div>
</div>`;

const html = `${style}${content}`;

export default htmlClean(html)
