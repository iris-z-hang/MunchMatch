import Button from "./Button";
import "./endPage.css";
import image1 from './tobs.jpg'
import image2 from './image2.png'
import image3 from './image3.png'
import { useState } from 'react';


function EndPage() {

  const foodImages : string[] = []
  foodImages.push(image1);
  foodImages.push(image2);
  foodImages.push(image3);

  const [food, setFood] = useState(0);


  const css = "./endPage.css";

  //need to fix styling to space out
  //   add more filters
  //   implement button onCLick properly
  return (
    <div className="main">
      <div className="heading">Munch Match</div>

      <div className="image">
      <img src={foodImages[2]} className="logo" alt="" />

      <text className="results">restaurant description</text>

      </div>



    </div>
  );
}

export default EndPage;
