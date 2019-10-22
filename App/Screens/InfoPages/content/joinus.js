import htmlClean from '../htmlClean';

const content = `
<div class="full-container" id="photo-container">
  <div id="join-us">
    <h2>What does the Earth sound like today?</h2>
    <p>Join with researchers involved in one of the newest scientific disciplines - Soundscape Ecology - as they map the sounds of our planet, and what they tell us about the health of the world we live in.</p>
  </div>
</div>`;


const html = `<main>${content}</main>`;

export default htmlClean(html)
