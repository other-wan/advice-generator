import divider from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";
import { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => { return res.json() })
      .then(data => setQuote(data.slip))
  }, [refresh]);

  return (
    <div className="container">
      <h1 className="header">Advice #{quote.id}</h1>
      <p className="quote-text">"{quote.advice}"</p>
      <div className="divider">
        <img src={divider} alt="" />
      </div>
      <button 
        className="btn-quote"
        onClick={ () => setRefresh(!refresh) }
        ><img src={dice} alt=""/></button>
    </div>
  );
};

export default Quote;
