import React, {useEffect, useState} from "react";
import axios from "axios";
import DelayedTextBar from "../shared/DelayedTextBar";

const WikiSearch = () => {
  const [delayedTerm, setDelayedTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: delayedTerm
        },
      });
      setResults(data.query.search);
    };
    if (delayedTerm) {
      search();
    }
  }, [delayedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className="card" key={result.pageid}>
        <div className="card-body">
          <h5 className="card-title">{result.title}</h5>
          <p className="card-text"><span dangerouslySetInnerHTML={{__html: result.snippet}}></span></p>
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="btn btn-primary" target="_blank">Go</a>
        </div>
      </div>
    );
  });

  return (
    <div className="container" style={{marginTop: '10px'}}>
      <DelayedTextBar setDelayedTerm={setDelayedTerm} message="Search term" />
      <div className="list">
        {renderedResults}
      </div>
    </div>
  );
}

export default WikiSearch