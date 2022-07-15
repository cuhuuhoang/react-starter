import React, {useEffect, useState} from "react";

const DelayedTextBar = ({setDelayedTerm, message}) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const delayTime = setTimeout(() => {
      setDelayedTerm(term);
    }, 500);
    return () => {
      clearTimeout(delayTime);
    }
  }, [term]);

  return (
    <div className="form-group rounded">
      <input type="text" className="form-control" placeholder={message} value={term}
         onChange={e => setTerm(e.target.value)}/>
    </div>
  );
}

export default DelayedTextBar