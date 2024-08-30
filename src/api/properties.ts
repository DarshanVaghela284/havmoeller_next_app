import { serializeParams } from "@/utils/constants";
import axios from "axios";

const API_URL = process.env.VITE_API_URL;
const Properties_URL = `${API_URL}/properties`;

const getPropertiesAPI = async (query:Record<string, string | number | boolean>) => {
  const queryString = serializeParams(query);
  const d = await axios.get(`${Properties_URL}?${queryString}`);
  return d?.data;
};

const getPropertiesForRecentSoldAPI = async (query:Record<string, string | number | boolean>) => {
  const queryString = serializeParams(query);
  const d = await axios.get(`${Properties_URL}/getRecentSold?${queryString}`);
  return d?.data;
};

const getPropertiesForMapAPI = async (query:Record<string, string | number | boolean>) => {
  const queryString = serializeParams(query);
  const d = await axios.get(`${Properties_URL}/map?${queryString}`);
  return d?.data;
};

const getPropertiesCountAPI = async (query:Record<string, string | number | boolean>) => {
  const queryString = serializeParams(query);
  const d = await axios.get(`${Properties_URL}/counts?${queryString}`);
  return d?.data;
};

const getPropertyByIdAPI = async (id:string, query:Record<string, string | number | boolean>) => {
  const queryString = query ? serializeParams(query) : null;
  let url = queryString
    ? `${Properties_URL}/${id}?${queryString}`
    : `${Properties_URL}/${id}`;
  const d = await axios.get(url);
  return d?.data;
};

const getRecentUpdatesAPI = async (query:Record<string, string | number | boolean>) => {
  const queryString = query ? serializeParams(query) : null;
  let d = null
  if(queryString){
    d = await axios.get(`${Properties_URL}/getRecentUpdates?${queryString}`);
  }else{
    d = await axios.get(`${Properties_URL}/getRecentUpdates`);
  }
  return d?.data;
};

const getFetchPlaces = async (query:Record<string, string | number | boolean>) => {
  const queryString = serializeParams(query);
  const d = await axios.get(`${Properties_URL}/fetchPlace?${queryString}`);
  return d?.data;
};

const getFetchCondoComplexPlaces = async (query:Record<string, string | number | boolean>) => {
  const queryString = serializeParams(query);
  const d = await axios.get(`${Properties_URL}/getCCZByGooglePlaceApi?${queryString}`);
  return d?.data;
};


const getFetchPlacesDetails = async (query:Record<string, string | number | boolean>) => {
  const queryString = serializeParams(query);
  const d = await axios.get(`${Properties_URL}/fetchPlaceDetails?${queryString}`);
  return d?.data;
};

export {
  getPropertiesAPI,
  getPropertiesForMapAPI,
  getPropertiesCountAPI,
  getPropertyByIdAPI,
  getRecentUpdatesAPI,
  getFetchPlaces,
  getFetchPlacesDetails,
  getPropertiesForRecentSoldAPI,
  getFetchCondoComplexPlaces
};
