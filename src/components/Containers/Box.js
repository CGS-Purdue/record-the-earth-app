import React from 'react';


export default function Box({ children }, props) {
   return (
     <div class="box" style={props.style}>
       <div class="theme_image">
         {children}
       </div>
     </div>
   );
 }

 export { Box };
