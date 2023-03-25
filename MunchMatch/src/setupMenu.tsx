import ListGroup from "./setupMenuComponents/ListGroup";
import MultiSelectListGroup from "./setupMenuComponents/MultiSelectListGroup";
import Button from "./setupMenuComponents/Button";
import "./setupMenu.css";


function SetupMenu() {
  let neighborhoods = ["Point Grey", "Kitsilano", "Main St"];

  let cuisines = ["Japanese", "Indian", "Chinese"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const css = "./setupMenu.css";

  //need to fix styling to space out
  //   add more filters
  //   implement button onCLick properly
  return (
    <div className="main">
      <div className="heading">Munch Match</div>

      <div className="list-group">
        <ListGroup
          items={neighborhoods}
          heading="Region"
          onSelectItem={handleSelectItem}
        ></ListGroup>
      </div>

      <div className="list-group">
        <MultiSelectListGroup
          items={cuisines}
          heading="Cuisine"
          onSelectItem={handleSelectItem}
        ></MultiSelectListGroup>
      </div>

      <div className="button">
        <Button color="primary" onClick={() => console.log("Clicked")}>
          Continue
        </Button>
      </div>
    </div>
  );
}

export default SetupMenu;
