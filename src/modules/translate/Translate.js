import React, {useState} from "react";
import DelayedTextBar from "../shared/DelayedTextBar";
import Dropdown from "../dropdown/Dropdown";
import Convert from "./Convert";

const languages = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(null);
  const [text, setText] = useState('');

  return (
    <div className="container" style={{marginTop: '10px'}}>
      <div className="row">
        <h5>This translation component only work on localhost:3000</h5>
      </div>
      <hr/>
      <div className="row">
        <DelayedTextBar setDelayedTerm={setText} message="To translate text"></DelayedTextBar>
      </div>
      <div className="pt-3">
        <Dropdown options={languages} setDropdownOption={setLanguage} defaultText="Choose language"></Dropdown>
      </div>

      <hr />
      <Convert language={language} text={text}></Convert>
    </div>
  )
}

export default Translate