import Dropdown from "./Dropdown";
import {useState} from "react";

const options = [
  {
    label: "The Color Red",
    value: "red",
    display: "danger"
  },
  {
    label: "The Color Green",
    value: "green",
    display: "success"
  },
  {
    label: "A Shade of Blue",
    value: "blue",
    display: "primary"
  },
];

const DropdownMain = () => {
  const [option, setOption] = useState(null);

  const renderedBadge = () => {
    if (option == null) {
      return <span className="badge bg-secondary">Nothing</span>;
    } else {
      return <span className={`badge bg-${option.display}`}>{option.label}</span>
    }
  }

  return (
    <div className="container" style={{marginTop: '10px'}}>
      <Dropdown options={options} setDropdownOption={setOption} defaultText="Choose a color" />
      <hr />
      <h2>Selected {renderedBadge()}</h2>
    </div>
  );
}

export default DropdownMain