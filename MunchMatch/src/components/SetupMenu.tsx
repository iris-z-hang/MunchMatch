import React from 'react'
import ListGroup from "../components/ListGroup";
import MultiSelectListGroup from "../components/MultiSelectListGroup";
import Button from "../components/Button";
import axios, { AxiosResponse } from "axios";
import "./setupMenu.css";

function SetupMenu() {
  const css = "./setupMenu.css";
  let neighborhoods = ["Point Grey", "Kitsilano", "Main St"];
  let radii = ["1", "3", "5"];
  let cuisines = ["Japanese", "Indian", "Chinese"];
  let selectedNeighborhood = "";
  let selectedRadius = 0;
  let selectedCuisines = new Set();
  let output = {
    "User Results": {
      neighborhood: "",
      radius: 0,
      cuisines: new Set(),
    },
  };

  const handleSelectNeighborhood = (item: string) => {
    selectedNeighborhood = item;
    output["User Results"].neighborhood = selectedNeighborhood;
  };

  const handleSelectRadius = (item: string) => {
    selectedRadius = parseInt(item);
    output["User Results"].radius = selectedRadius;
  };

  const handleSelectCuisine = (item: string) => {
    selectedCuisines.add(item);
    output["User Results"].cuisines = selectedCuisines;
  };

  function clickContinue() {
    console.log("continuing...")
    if (
      output["User Results"].neighborhood == "" ||
      output["User Results"].radius == 0 ||
      output["User Results"].cuisines.size == 0
    ) {
      console.log("Not enough options selected!");
    } else {
      const jsonString = JSON.stringify(output);

      axios
        .post("http://127.0.0.1:5000/<get_user_data>", { jsonString })
        .then((response: AxiosResponse<any, any>) => {
          //run mainMenu tsx object? entered response type as string
          //can JSON.stringify(response)
          console.log(response);
        })
        .catch((error: any) => {
          console.log("Error: " + error);
        });
    }
  }

  return (
    <div className="main">
      <div className="heading">Munch Match</div>

      <div className="list-group">
        <ListGroup
          items={neighborhoods}
          heading="Region"
          onSelectItem={handleSelectNeighborhood}
        ></ListGroup>
      </div>

      <div className="list-group">
        <ListGroup
          items={radii}
          heading="Radius (km)"
          onSelectItem={handleSelectRadius}
        ></ListGroup>
      </div>

      <div className="list-group">
        <MultiSelectListGroup
          items={cuisines}
          heading="Cuisine"
          onSelectItem={handleSelectCuisine}
        ></MultiSelectListGroup>
      </div>

      <div className="button">
        <Button
          color="primary"
          onClick={clickContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

// function writeJSON(output: any) {
//   const jsonString = JSON.stringify(output);
//   const link = document.createElement("a");
//   const file = new Blob([jsonString], { type: "text/plain" });
//   link.href = URL.createObjectURL(file);
//   link.download = "new-user-results.json";
//   link.click();
//   URL.revokeObjectURL(link.href);

// // Create blob object with file content
// var blob = new Blob(["This is a sample file content."], {
//   type: "text/plain;charset=utf-8",
// });
// // Create and save the file using the FileWriter library
// saveAs(Content, fileName);
// }

export default SetupMenu;
