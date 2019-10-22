import htmlClean from '../htmlClean';

const content = `
<div class="full-container">
  <section>
    <h2>What does the Earth sound like today?</h2>
    <p>Join researchers and be a citizen scientist. Record the sounds of the Earth.</p>
    <p>Earth's sounds tell an amazing story. Each soundscape recording is a snapshot of a unique place and time. Record the Earth is a global citizen science initiative to record all of the sounds around the World. Join the mission and record the sounds around you then upload them to the Global Soundscapes Archive at the Purdue University Center for Global Soundscapes. Create a profile at www.recordtheearth.org where you can listen and explore all the sounds from around the world.<p>
    <h2>Citizen Science Research Participation</h2>
    <p>Record the Earth is an application for global ecological data collection.</p>
    <p>You are collecting information about the health and wellbeing of the planet through sound and helping researchers understand human's connection to soundscapes. What are sounds that you love, what are shouds that you hate. Which sounds could indicate a the arrivale of a new season. Your mission is to go out and record the sounds around the earth, describe and tag them.</p>
    <p>Then sign up online to rate, share, sort, and explore the data being collected from around the world and save your favorites sounds to your own soundscape playlist.</p>
    <h2>Recording Formats</h2>
    </h2>The default recording format is AAC-3 min maximum. While AAC recordings on certain devices playback perfectly on our website, they failed to play on the device due to differences in manufacturer specifications for this reason there is a secondary WAV-1 min recording profile. Future updates will allow changing between profiles, currently samsung devices will default to WAV-1min format.</h2>
    <h3>For more information visit:</h3>
    <ul>
    <li>The Center for Global Soundscapes</li>
    <li>Purdue University</li>
    <li><a href="https://www.centerforglobalsoundscapes.org">www.centerforglobalsoundscapes.org</a></li>
    </ul>
  </section>
</div>
`;


const html = `<main>${content}</main>`;

export default htmlClean(html)
