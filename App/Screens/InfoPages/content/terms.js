import htmlClean from '../htmlClean';

const content = `
<div class="full-container">
  <img src="./Dev/faq-icon.png"/>
  <h1>Terms</h1>
  <section class="section">
    <h2>Citizen Science Research Participation Consent</h2>
    <p>Record the Earth is an application for global ecological data collection. You are collecting information about the health and wellbeing of the planet through sound and helping researchers understand human\'s connection to soundscapes.</p>
  </section>
  <section class="section">
    <h2>Data Collection</h2>
    <p>Your mission is to go out and record the sounds around the earth, describe and tag them.</p>
    <p>The data collected by the app is anonmyized and only the data relating to the sound file, the description information, and application metrics used for issue tracking</p>

    <h3>Data Collection Summary</h3>

    <h4>Recording Properties</h4>
    <ul>
      <li><span>Audio File</span>- The recorded audio file. *We only ever record audio when the user activates the record button, never in the background.</li>
      <li><span>Timestamp</span>- Time and date of the recording</li>
      <li><span>Length</span>- Duration of the audio file</li>
      <li><span>LatLong</span>- Gps location of recoring, used to place on sound map (*Device location permissions are required)</li>
    </ul>
    <h4>Recording survey reponse</h4>
    <ul>
      <li><span>Description: </span>Short description of what can be heard in the recording</li>
      <li><span>Tags: Emotional</span>Listener's emotional response to the soundscape</li>
      <li><span>Tags: Biophony</span>Sounds from Biolgical sources</li>
      <li><span>Tags: Geophony</span>Sounds from Geological sources (rain, wind, waterfall)</li>
      <li><span>Tags: Anthrophony</span>Sounds from manmade sources (cars, planes, cityscape)</li>
    </ul>
    <h4>Application Data</h4>
    <ul>
    <li><span>app version</span>- current installed apop version</li>
    <li><span>device model</span>- Device type and model</li>
    <li><span>os version</span>- Operating system number</li>
    </ul>
  </section>
  <section class="section">
    <h2>Assist with Data Analysis</h2>
    <p>Sign up online to rate, share, and explore the data being collected from around the world and save your favorites sounds to your profile.</p>
  </section>
  <section class="section">
    <a href="href={'https://recordtheearth.org">Sign up at https://recordtheearth.org</a>
  </section>
</div>`;

const html = `<main>${content}</main>`;

export default htmlClean(html)
