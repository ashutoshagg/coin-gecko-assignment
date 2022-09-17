import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCoinMarkets } from "../../api/coingecko.api";
import AppToolBar from "../../components/AppToolBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useHistory } from "react-router-dom";
import { IMarket } from "../../types/market.type";

const CoinListing = () => {
  const [page, setPage] = useState(1);
  const [markets, setMarkets] = useState<IMarket[]>([]);
  const history = useHistory();

  useEffect(() => {
    getCoinMarkets(page).then(
      (apiResponse) => {
        setMarkets(apiResponse.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [page]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleNavigation = (id: string) => history.push(`/coin/${id}`);

  const displayMarket = (market: IMarket) => {
    return (
      <Card style={{ margin: 20 }} sx={{ minWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            width="140"
            image={market?.image}
            alt="green iguana"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {market?.name} ({market?.symbol})
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {market?.current_price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Todays High: {market?.high_24h} </label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Todays low: {market?.low_24h} </label>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => handleNavigation(market?.id)}
          >
            See Details
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
      }}
    >
      <AppToolBar name="Coin Markets" />
      <div style={{ marginTop: 20 }}>
        {markets.map((market: IMarket) => {
          return (
            <div
              key={market?.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {displayMarket(market)}
            </div>
          );
        })}
      </div>
      <Pagination
        count={10}
        page={page}
        onChange={handlePageChange}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
};

export default CoinListing;
