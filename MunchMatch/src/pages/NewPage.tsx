import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import SetupMenu from "../components/SetupMenu";
import MainMenu from "../components/MainMenu";

function NewPage() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);

  const handleClick = () => {
    setPage(page + 1);
  };

  const handleClickMinus = () => {
    setPage(page - 1);
  };
  return (
    <>
      <h1>Hello World</h1>
      <div>
        {page === 1 && <SetupMenu />}
        {page === 2 && <MainMenu />}
      </div>
      <div>
        page count: {page}
        <br />
        <Button colorScheme="blue" onClick={handleClickMinus}>
          Last Page
        </Button>
        <Button colorScheme="blue" onClick={handleClick}>
          Next Page
        </Button>
      </div>
    </>
  );
}

export default NewPage;
