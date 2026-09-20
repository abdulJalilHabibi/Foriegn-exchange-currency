import { useState } from "react";
import Header from "./Component/Header";
import Logo from "./Component/Logo";
import CheckRate from "./Component/CheckRate";
import LiveMarket from "./Component/LiveMarket";
import Main from "./Component/Main";
import History from "./Component/History";
import Footer from "./Component/Footer";
import DropDown from "./Component/DropDown";
import Compare from "./Component/Compare";
import Favroite from "./Component/Favroite";
import Log from "./Component/Log";
import { data } from "./data/data.js";
import useCurrency from "./hooks/useCurrency.js";
function App() {
  const [selectedOption, setSelectedOption] = useState("history");
  const [selectedCountry] = useState(data);
  const [logged, setLogged] = useState([]);

  const [favorited, setFavorited] = useState([]);

  function handleFavorite(
    senderCurrency,
    receiverCurrency,
    rate,
    changePercent,
  ) {
    const newFavorite = {
      senderCurrency,
      receiverCurrency,
      rate,
      changePercent,
    };

    setFavorited((prevFavroited) => {
      const alreadyExist = prevFavroited.some(
        (favroite) =>
          favroite.senderCurrency === newFavorite.senderCurrency &&
          favroite.receiverCurrency === newFavorite.receiverCurrency,
      );
      if (alreadyExist) {
        const deleteFavroite = prevFavroited.filter(
          (favroite) =>
            favroite.senderCurrency !== newFavorite.senderCurrency ||
            favroite.receiverCurrency !== newFavorite.receiverCurrency,
        );
        return deleteFavroite;
      }
      return [...prevFavroited, newFavorite];
    });
  }

  function handleLogged(senderCurrency, receiverCurrency) {
    const newLogged = {
      senderCurrency,
      receiverCurrency,
    };

    setLogged((prevLogged) => {
      const alreadyLogged = prevLogged.some(
        (logged) =>
          logged.senderCurrency === newLogged.senderCurrency &&
          logged.receiverCurrency === newLogged.receiverCurrency,
      );
      if (alreadyLogged) {
        const deleteLogged = prevFavroited.filter(
          (logged) =>
            logged.senderCurrency !== newLogged.senderCurrency ||
            logged.receiverCurrency !== newLogged.receiverCurrency,
        );
        return deleteLogged;
      }

      return [...logged, newLogged];
    });
  }

  return (
    <>
      <Header>
        <Logo />
        <LiveMarket />
      </Header>
      <Main>
        <CheckRate
          handleLogged={handleLogged}
          logged={logged}
          setLogged={setLogged}
          selectedCountry={selectedCountry}
          favorited={favorited}
          setFavorited={setFavorited}
          handleFavorite={handleFavorite}
        />
        <DropDown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        {selectedOption === "history" && <History />}
        {selectedOption === "compare" && <Compare />}
        {selectedOption === "favroites" && <Favroite favorited={favorited} />}
        {selectedOption === "logs" && (
          <Log logged={logged} setLogged={setLogged} />
        )}
      </Main>
      <Footer className="md:hidden" />
    </>
  );
}

export default App;
