```css

/*
 *  .starRate {position:relative; overflow:hidden; zoom:1; background-color:rgba(255,255,255,0.9);}

.starRate ul {width:160px; margin:0; padding:0;}
.starRate li {display:inline; list-style:none;}
.starRate a, .starRate b {background:url(images/star_rate.gif) left top repeat-x;}
.starRate a {float:right; margin:0 80px 0 -144px; width:80px; height:16px; background-position:left 16px; color:#000; text-decoration:none;}
.starRate a:hover {background-position:left -32px;}
.starRate b {position:absolute; z-index:5; width:80px; height:16px; background-position:left -16px;}
.starRate div b {left:0px; bottom:0px; background-position:left top;}
.starRate a span {position:absolute; left:-300px;}
.starRate a:hover span {left:90px; width:100%;}
*/
/*
  margin      : 0;
  padding     : 1.5em;
  font-family : sans-serif;
  line-height : 1.5;
}
p{
  margin  : 0 0 1.5em;
  padding : 0;
}
a{
  color           : #9c3;
  text-decoration : none;
}
*/

.starRating:not(old){
  position		 : relative;
  display        : inline-block;
  width          : 7.5em;
  height         : 1.5em;
  /*overflow       : hidden;*/
  vertical-align : bottom;
}
.starRating:not(old) > input{
  margin-right : -20%;
  opacity      : 0;
}
.starRating:not(old) > label{
  display         : block;
  float           : right;
  position        : relative;
  background      : url('/img/star-white.png');
  background-size : contain;
}
.starRating:not(old) > label:before{
  content         : '';
  display         : block;
  width           : 1.5em;
  height          : 1.5em;
  background      : url('/img/yellow_star.png');
  background-size : contain;
  opacity         : 0;
  transition      : opacity 0.2s linear;
}
.starRating:not(old) > label:hover:before,
.starRating:not(old) > label:hover ~ label:before,
.starRating:not(:hover) > :checked ~ label:before{
  opacity : 1;
}
```


```html
<div id="sound-ratings" class="up-info">
  <h4>Rate this Soundscape</h4>
  <fieldset class="rating">
  <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
  <input type="radio" id="star4half" name="rating" value="4.5" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
  <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
  <input type="radio" id="star3half" name="rating" value="3.5" /><label class="half" for="star3half" title="Better than Average - 3.5 stars"></label>
  <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Average - 3 stars"></label>
  <input type="radio" id="star2half" name="rating" value="2.5" /><label class="half" for="star2half" title="Less than Average - 2.5 stars"></label>
  <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Poor quality - 2 stars"></label>
  <input type="radio" id="star1half" name="rating" value="1.5" /><label class="half" for="star1half" title="Very Poor - 1.5 stars"></label>
  <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Bad Quality - 1 star"></label>
  <input type="radio" id="starhalf" name="rating" value="0.5" /><label class="half" for="starhalf" title="Very Bad Quality - 0.5 stars"></label>
  </fieldset>
</div>

```
