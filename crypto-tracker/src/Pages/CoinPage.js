import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';

const CoinPage = () => { 
  const { id } = useParams();//will only get id from the app.js which is the link id
  const [coin,setCoin] = useState();

  const {currency,symbol} = CryptoState(); //destruct currency and symbol

  const fetchCoin = async() => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data); //set data into coin
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  },[]);

  const useStyles = makeStyles(() => ({
  }));

  const classes = useStyles();

  return (
    <div className = {classes.container}>
      <div className = {classes.sidebar}>
        {/*sidebar*/}
      </div>
      {/*Chart*/}
      <CoinInfo coin = {coin} />
    </div>
    )
}

export default CoinPage