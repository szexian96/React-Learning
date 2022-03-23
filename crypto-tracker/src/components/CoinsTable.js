import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CryptoState } from "../CryptoContext";
import { CoinList } from "../config/api";
import axios from "axios";
import {
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]); //setCoins z
  const [loading, setLoading] = useState(false);

  const { currency } = CryptoState(); //for currency state

  const fetchCoins = async () => {
    // and async
    setLoading(true);
    const { data } = await axios.get(CoinList(currency)); //use api and destructuring { data } and get the currnectno need to write data.data

    setCoins(data); //data receive from api
    setLoading(false);
  };

  const darkTheme = createTheme({
    //dark theme provider
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  useEffect(() => {
    fetchCoins(); //everytime got changes then fetchCoins
  }, [currency]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h4" style = {{ margin:18, letterSpacing:2, fontFamily: "Roboto"}}>
          Cryptocurrency Prices by Market Cap
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
