import React, { useState } from "react";
import { Dropdown } from "rsuite";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
// onSelect 	(eventKey: string, event) => void

const spaces = [
  { key: "HAZEM", label: "Hazem's Space" },
  { key: "MOHAMED", label: "Mohamed's Space" },
  { key: "ALI", label: "Ali's Space" },
  { key: "SALAH", label: "Salah's Space" },
  { key: "AHMED", label: "Ahmed's Space" },
  { key: "FATIMA", label: "Fatima's Space" },
  { key: "YASMIN", label: "Yasmin's Space" },
  { key: "AMR", label: "Amr's Space" },
  { key: "MELISSA", label: "Melissa's Space" },
  { key: "FAISAL", label: "Faisal's Space" },
];

function DropdownSpaces() {
  const [selected, setSelected] = useState("HAZEM 🍭");
  const changeSelected = (newish) => {
    setSelected(newish);
    console.log(newish); // this will print the selected item key
  };
  return (
    <div>
      <Dropdown
        onSelect={(ek, _) => changeSelected(ek)}
        menuStyle={{ width: "100%" }}
        size="lg"
        title={"Space of " + selected}
      >
        {spaces.map((space) => (
          <DropdownItem eventKey={space["key"]}>{space["label"]}</DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
}

export default DropdownSpaces;
