import React from "react";
function Image(props) {
    console.log(props)
 return (
   <div
     role="img"
     onClick={() => props.handleClick(props.id)}
     style={{ backgroundImage: `url(${props.image})` 
            ,width: "100px", height: "100px"}}
   />
 );
}

export default Image;