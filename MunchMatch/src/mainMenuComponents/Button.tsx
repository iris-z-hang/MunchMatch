import React from "react";
import { useState } from 'react';

// import image1 from '/Users/iriszhang/Desktop/2023-BCS-Hackathon/MunchMatch/src/tobs.jpg'
// import image2 from '/Users/iriszhang/Desktop/2023-BCS-Hackathon/MunchMatch/src/image2.png'
// import image3 from '/Users/iriszhang/Desktop/2023-BCS-Hackathon/MunchMatch/src/image3.png'

// function MyComponent() {

//   const foodImages : string[] = []
//   foodImages.push(image1);
//   foodImages.push(image2);
//   foodImages.push(image3);

//   const [food, setFood] = useState(0);

//   <div>

//   <div className="image">
//   <img src={foodImages[0]} className="logo" alt="" />
//   <img src={foodImages[1]} className="logo" alt="" />
//   <img src={foodImages[2]} className="logo" alt="" />
//   </div>


//   </div>

// };

interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};



export default Button;
