import htmlClean from '../htmlClean';

const content = `
<div class="full-container" id="header">
  <section class="inner">
    <div id="upload-stats">
      <h1>Join the Mission</h1>
      <div class="upload-stats"><h2><span id="soundscape-count" style="color:#F00">3,832</span> SOUNDSCAPES</h2></div>
      <div class="upload-stats"><h2><span id="minute-count" style="color:#279951">6,944</span> MINUTES</h2></div>
      <div class="upload-stats"><h2><span id="participant-count" style="color:#25B5FF">1,932</span> PARTICIPANTS</h2></div>
    </div>
    <img class="record-app" src="images/record-earth-app-small.png">
  </section>
</div>
`;


const html = `<main>${content}</main>`;


export default htmlClean(html)
