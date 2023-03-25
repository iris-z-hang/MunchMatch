import Button from "./mainMenuComponents/Button";
import "./mainMenu.css";
import image1 from './tobs.jpg'
import image2 from './image2.png'
import image3 from './image3.png'
import { useState } from 'react';


function mainMenu() {

  const foodImages : string[] = []
  foodImages.push(image1);
  foodImages.push(image2);
  foodImages.push(image3);

  const [food, setFood] = useState(0);


  const css = "./mainMenu.css";

  //need to fix styling to space out
  //   add more filters
  //   implement button onCLick properly
  return (
    <div className="main">
      <div className="heading">Munch Match</div>

      <div className="image">
      <img src={foodImages[food]} className="logo" alt="" />
      {/* <img src={foodImages[1]} className="logo" alt="" />
      <img src={foodImages[2]} className="logo" alt="" /> */}

      </div>

      <div className="like-button">
        <Button color="primary" onClick={function myFood(){setFood(food+1);}}>
          Like
        </Button>
      </div>

      <div className="dislike-button">
        <Button color="primary" onClick={function myFood(){setFood(food-1);}}>
          Dislike
        </Button>
      </div>


    </div>
  );
}

export default mainMenu;
