import * as assets from './assets';
import htmlClean from '../htmlClean';

const style = `
html {margin:0; padding:0;}
body {background:rgba(0,0,0,.2); font-family:"Open Sans",sans-serif; font-size: 14px;}
main {color: #ffffff;}
section { }
a { color: white; font-weight: bold; }
h2{font-size:24px; font-weight: 200; }
.full-container { width: 100%; padding: 20px 0 40px 0; margin: 0 auto; }
#recording-map{
  background-color: #101010;
  position:relative;
  right: 0;
  overflow:hidden;
  margin: 0 auto;
  border-radius: 250px;
  background-position-y: -40px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#time-bar{
  display:none;
  height: 60px;
  position: absolute;
  bottom: -40px;
  left: 0;
  border: 1px solid #808080;
  background-color: rgba(189, 189, 189, 0.71);
  width: 100%;
}
#time-bar text.value{
  display:none;
}
.time-title{
  text-align: center;
  font-size: 16px;
  margin: 0px 0 0px 0;
  font-style: normal;
  text-decoration: none;
  position: relative;
  top: 10px;
}
#type-biophony{  background-color: #269926;}
#type-geophony{  background-color: #FFAA00 ;}
#type-anthrophony{ background-color: #BF3030;}
#type-emotion{ background-color: #4284D3;}
#header h1{
  font-size: 34px;
  color: #FFF;
  padding:0;
  font-weight: normal;
  margin: 0;
}
.inner{
  position: relative;
  margin: 0 auto;
}
#upload-stats{
  position: relative;
}
.upload-stats{
  margin: 20px auto;
  width: 95%;
  border-radius: 50px;
  padding: 0 10px;
  background: rgba(8,8,8,.8);
  text-align: center;
}
.upload-stats h2{
  color:#fff;
  padding: 10px 0;
  font-size: 24px;
  font-weight: normal;
}
.link{
  width: 130px;
  border-radius: 23px;
  padding: 3px;
  background: rgba(0,0,0, .8);
  color: #fff;
  text-align: center;
  font-size: 18px;
}
.sound-bubble{
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50%;
  border: 1px solid #5A5A5A;
  border-radius: 50%;
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
#kinds-of-sounds h2{ margin: 0 0 20px 0; }
#kinds-of-sounds h3{ margin: 40px 0 20px 0; }
#sound-types{ display: flex; flex-wrap: wrap; margin: 10px auto; }
#sound-types p{ font-size: 13px; font-style: italic; color: #BBB; margin-top:18px; }
.sound-category{ width: 50%; flex: 1; text-align: center; margin-top: 20px; }
`;


const html = `<style>${style}</style>`;

export default htmlClean(html)
