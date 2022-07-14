import React, {useEffect, useState} from "react";
import axios from "axios";
import {privateEnv} from '../../private';

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState(null);
  useEffect(() => {
    const doTranslate = async () => {
      const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text,
          target: language.value,
          key: privateEnv['google_translate_key']
        }
      });

      setTranslatedText(data.data.translations[0].translatedText);
    };
    if (language != null && text != null && text.length > 0) {
      doTranslate();
    }
  }, [language, text]);

  return (
    <div>
      {translatedText ? (
          <div>
            <h3>Translated</h3>
            <p>{translatedText}</p>
          </div>
      ): null}
    </div>
  )
}

export default Convert