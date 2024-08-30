import axios from "axios";

const API_URL = process.env.VITE_API_URL;
const Cities_URL = `${API_URL}/cities`;
const Communities_URL = `${API_URL}/communities`;
const States_URL = `${API_URL}/states`;
const Email_URL = `${API_URL}/email`;
const Testimonials_URL = `${API_URL}/testimonials`;
const Properties_URL = `${API_URL}/properties`;
const Complex_URL = `${API_URL}/complexes`;
const Content_URL = `${API_URL}/content`;
const GOOGLE_MAP_API_KEY = process.env.VITE_GOOGLE_MAP_API_KEY;

const getCitiesAPI = async (name:string, status = 1, page:number, perPage:number) => {
  let url = `${Cities_URL}`;
  const params = [];

  if (name) {
    params.push(`name=${encodeURIComponent(name)}`);
  }
  if (status) {
    params.push(`status=${encodeURIComponent(status)}`);
  }
  if (page) {
    params.push(`page=${encodeURIComponent(page)}`);
  }
  if (perPage) {
    params.push(`perPage=${encodeURIComponent(perPage)}`);
  }

  if (params.length) {
    url += `?${params.join("&")}`;
  }

  const response = await axios.get(url);
  return response?.data;
};

const getCCZAPI = async (search:string) => {
  let url = `${Properties_URL}/getCCZ?search=${search}`;
  const response = await axios.get(url);
  return response?.data;
};

const getCityWithSubdivAPI = async (name:string) => {
  const d = await axios.get(`${Cities_URL}/${name}`);
  return d?.data;
};

const getCommunitiesAPI = async (name:string, status = 1, page:number, perPage:number) => {
  let url = `${Communities_URL}`;
  const params = [];

  if (name) {
    params.push(`name=${encodeURIComponent(name)}`);
  }
  if (status) {
    params.push(`status=${encodeURIComponent(status)}`);
  }
  if (page) {
    params.push(`page=${encodeURIComponent(page)}`);
  }
  if (perPage) {
    params.push(`perPage=${encodeURIComponent(perPage)}`);
  }

  if (params.length) {
    url += `?${params.join("&")}`;
  }

  const response = await axios.get(url);
  return response?.data;
};

const getCommunitiesOptionsAPI = async (search:string) => {
  let url = `${Communities_URL}/getCommunitiesOptions`;
  const params = [];

  if (search) {
    params.push(`search=${encodeURIComponent(search)}`);
  }

  if (params.length) {
    url += `?${params.join("&")}`;
  }

  const response = await axios.get(url);
  return response?.data;
};

const getCommunityByNameAPI = async (name:string) => {
  const d = await axios.get(`${Communities_URL}/${name}`);
  return d?.data;
};

const getStatesAPI = async (name:string) => {
  const d = await axios.get(`${States_URL}?name=${name}`);
  return d?.data;
};

const getAddressesAPI = async (address:string, page:number, perPage:number) => {
  let url = `${Properties_URL}/getAddresses`;
  const params = [];

  if (address) {
    params.push(`address=${encodeURIComponent(address)}`);
  }

  if (page) {
    params.push(`page=${encodeURIComponent(page)}`);
  }
  if (perPage) {
    params.push(`perPage=${encodeURIComponent(perPage)}`);
  }

  if (params.length) {
    url += `?${params.join("&")}`;
  }

  const response = await axios.get(url);
  return response?.data;
};

const getSchoolsAPI = async (school:string, page:number, perPage:number) => {
  let url = `${Properties_URL}/getSchools`;
  const params = [];

  if (school) {
    params.push(`school=${encodeURIComponent(school)}`);
  }

  if (page) {
    params.push(`page=${encodeURIComponent(page)}`);
  }
  if (perPage) {
    params.push(`perPage=${encodeURIComponent(perPage)}`);
  }

  if (params.length) {
    url += `?${params.join("&")}`;
  }

  const response = await axios.get(url);
  return response?.data;
};

const getMlsAPI = async (mls:string, listStatus:number, soldDateBetween:string[], page:number, perPage:number) => {
  let url = `${Properties_URL}/getMls`;
  const params = [];

  if (mls) {
    params.push(`mls=${encodeURIComponent(mls)}`);
  }

  if (listStatus) {
    params.push(`listStatus=${encodeURIComponent(listStatus)}`);
  }

  if (soldDateBetween) {
    soldDateBetween.forEach((item) => {
      params.push(`soldDateBetween=${item}`);
    });
  }

  if (page) {
    params.push(`page=${encodeURIComponent(page)}`);
  }
  if (perPage) {
    params.push(`perPage=${encodeURIComponent(perPage)}`);
  }

  if (params.length) {
    url += `?${params.join("&")}`;
  }

  const response = await axios.get(url);
  return response?.data;
};

const getComplexAPI = async (
  search:string,
  listStatus:number,
  soldDateBetween:string[],
  page:number,
  perPage:number
) => {
  let url = `${Complex_URL}/getComplexOptions`;
  const params = [];

  if (search) {
    params.push(`search=${encodeURIComponent(search)}`);
  }

  if (listStatus) {
    params.push(`listStatus=${encodeURIComponent(listStatus)}`);
  }

  if (soldDateBetween) {
    soldDateBetween.forEach((item) => {
      params.push(`soldDateBetween=${item}`);
    });
  }

  if (page) {
    params.push(`page=${encodeURIComponent(page)}`);
  }
  if (perPage) {
    params.push(`perPage=${encodeURIComponent(perPage)}`);
  }

  if (params.length) {
    url += `?${params.join("&")}`;
  }

  const response = await axios.get(url);
  return response?.data;
};

const sendEmailToOwner = async (data:any) => {
  const response = await axios.post(`${Email_URL}/sendEmailToOwner`, data);
  return response.data;
};

const sendEmailToFriend = async (data:any) => {
  const response = await axios.post(`${Email_URL}/sendEmailToFriend`, data);
  return response.data;
};

const getTestimonialsAPI = async (isFeatured:boolean, page:number, perPage:number, random=null) => {
  let url = `${Testimonials_URL}`;
  const params = [];

  if (isFeatured) {
    params.push(`is_featured=${encodeURIComponent(isFeatured)}`);
  }
  if (page) {
    params.push(`page=${encodeURIComponent(page)}`);
  }
  if (perPage) {
    params.push(`perPage=${encodeURIComponent(perPage)}`);
  }

  if (random) {
    params.push(`random=${encodeURIComponent(random)}`);
  }

  if (params.length) {
    url += `?${params.join("&")}`;
  }

  const response = await axios.get(url);
  return response?.data;
};

const getPageContentAPI = async (pageName:string) => {
  let url = `${Content_URL}/${pageName}`;
  const response = await axios.get(url);
  return response?.data;
};

const fetchCityBoundaries = async (city:{name:string}) => {
  const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];relation["name"="${city.name}"]["boundary"="administrative"]["admin_level"="8"];out geom;`;

  const response = await axios.get(overpassUrl);
  const data = response.data;

  if (data.elements.length === 0) {
    return [];
  }

  const relation = data.elements.find((element:{type:string}) => element.type === "relation");

  if (!relation) {
    return [];
  }

  const coordinates: any[] = [];

  relation.members.forEach((member: {type: string; geometry: {lat:string; lon:string}[] }) => {
    if (member.type === "way" && member.geometry) {
      coordinates.push(
        ...member.geometry.map((point) => ({ lat: point.lat, lng: point.lon }))
      );
    }
  });

  return coordinates;
};

const fetchCityPlaceDetails = async (city:{name:string; state:string}) => {
  const placeSearchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${city.name},${city.state}&inputtype=textquery&fields=place_id&key=${GOOGLE_MAP_API_KEY}`;

  try {
    const placeSearchResponse = await axios.get(placeSearchUrl);
    const data = placeSearchResponse.data;

    if (!data.candidates || data.candidates.length === 0) {
      console.warn(`No place found for ${city.name}, ${city.state}`);
      return [];
    }

    const placeId = data.candidates[0].place_id;

    const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,geometry&key=${GOOGLE_MAP_API_KEY}`;
    const placeDetailsResponse = await axios.get(placeDetailsUrl);
    const placeDetailsData = placeDetailsResponse.data;

    if (!placeDetailsData.result || !placeDetailsData.result.geometry) {
      console.warn(`No geometry found for ${city.name}, ${city.state}`);
      return [];
    }

    const { location, viewport } = placeDetailsData.result.geometry;

    // If viewport is available, use it to create the polygon
    if (viewport) {
      const bounds = [
        { lat: viewport.northeast.lat, lng: viewport.northeast.lng },
        { lat: viewport.southwest.lat, lng: viewport.southwest.lng },
      ];

      return bounds;
    }

    // Fallback to the location point if viewport is not available
    return [{ lat: location.lat, lng: location.lng }];
  } catch (error) {
    console.error(
      `Failed to fetch place details for ${city.name}, ${city.state}:`,
      error
    );
    return [];
  }
};

export {
  getCitiesAPI,
  getCCZAPI,
  getCommunitiesAPI,
  getStatesAPI,
  getCityWithSubdivAPI,
  getCommunityByNameAPI,
  sendEmailToOwner,
  getTestimonialsAPI,
  sendEmailToFriend,
  getAddressesAPI,
  getPageContentAPI,
  getSchoolsAPI,
  getCommunitiesOptionsAPI,
  getMlsAPI,
  getComplexAPI,
  fetchCityBoundaries,
  fetchCityPlaceDetails,
};
