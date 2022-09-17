import { AxiosResponse } from "axios";
import { COIN_GECKO_BASE_URL } from "../envrionment";
import { IMarket } from "../types/market.type";
import { PAGE_LIMIT } from "../utils/constants";
import Request from "./Request";

export const getCoinMarkets = (
  pageNumber = 1
): Promise<AxiosResponse<IMarket[]>> => {
  const url = `${COIN_GECKO_BASE_URL}coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${PAGE_LIMIT}&page=${pageNumber}&sparkline=false`;
  return Request.get(url);
};

export const getCoinDetails = (id: string): Promise<AxiosResponse> => {
  const url = `${COIN_GECKO_BASE_URL}coins/${id}`;
  return Request.get(url);
};
