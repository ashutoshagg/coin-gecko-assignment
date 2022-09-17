import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoinDetails } from "../../api/coingecko.api";
import AppToolBar from "../../components/AppToolBar";
import { ICoin } from "../../types/coin.type";
import Text from "../../components/Text";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState<ICoin>();

  useEffect(() => {
    if (id) {
      getCoinDetails(id).then(
        (apiResponse) => {
          setCoin(apiResponse.data);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, []);
  return (
    <>
      <AppToolBar name={`${coin?.name} (${coin?.symbol})`} />
      <div style={{ margin: 20 }}>
        <Text label={"Hashing:"} value={coin?.hashing_algorithm} />
        <Text label={"Genesis Date:"} value={coin?.genesis_date} />
        <Text
          label={"Market Cap (in euro):"}
          value={coin?.market_data?.market_cap["eur"]}
        />
        <Text label={"HomePage Link:"} value={coin?.links?.homepage[0]} />
      </div>
    </>
  );
};

export default CoinDetails;
