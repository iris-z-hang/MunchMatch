import { useState } from "react";

interface MultiSelectListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function MultiSelectListGroup({
  items,
  heading,
  onSelectItem,
}: MultiSelectListGroupProps) {
  // Hook lets us tap into built in functions in React. This says variable may change over time.
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedIndicies, setSelectedIndicies] = useState([] as number[]);
  const set = new Set(selectedIndicies);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => {
          console.log(item, index);
          console.log(set.has(index));
          return (
            <li
              className={
                set.has(index) ? "list-group-item active" : "list-group-item"
              }
              key={item}
              onClick={() => {
                const selectedIndiciesNew = [...set];
                const newSet = new Set(selectedIndiciesNew);
                if (!newSet.has(index)) {
                  newSet.add(index);
                } else {
                  newSet.delete(index);
                }
                console.log(newSet);
                const backToArray = Array.from(newSet.values());
                setSelectedIndicies(backToArray);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MultiSelectListGroup;
