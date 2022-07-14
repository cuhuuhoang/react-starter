import React, {useEffect, useState, useRef} from "react";

const Dropdown = ({options, setDropdownOption, defaultText}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef()

  const renderedOptions = options.map(option => {
    return (
      <li key={option.value} onClick={() => {setSelected(option); setDropdownOption(option)}}>
        <a className="dropdown-item">{option.label}</a>
      </li>
    );
  });

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    }
    document.body.addEventListener("click", onBodyClick, {capture: true});
    return () => {
      document.body.removeEventListener("click", onBodyClick, {capture: true});
    }
  }, []);

  return (
    <div ref={ref} className="btn-group" onClick={() => {setOpen(!open)}} >
      <button type="button" className={`btn btn-secondary dropdown-toggle ${open ? 'show' : ''}`} data-bs-toggle="dropdown">
        {selected == null ? defaultText : selected.label}
      </button>
      <ul className={`dropdown-menu ${open ? 'show' : ''}`} style={ open ? { position: 'absolute', transform: 'translate(0px, 40px)'} : {}}>
        {renderedOptions}
      </ul>
    </div>
  );
}

export default Dropdown