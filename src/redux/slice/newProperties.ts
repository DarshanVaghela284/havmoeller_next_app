import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCityWithSubdivAPI, getCommunityByNameAPI } from "@/api/request";
import {
  getPropertiesAPI,
  getPropertiesCountAPI,
  getPropertiesForMapAPI,
  getPropertyByIdAPI,
  getRecentUpdatesAPI,
} from "@api/properties";
import { createSelector } from "@reduxjs/toolkit";
import { DEFAULT_PAGE_LIMIT } from "@/utils/constants";

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async (queryParams: any) => {
    const response = await getPropertiesAPI(queryParams);
    return response;
  }
);

export const fetchPropertiesForMap = createAsyncThunk(
  "properties/fetchPropertiesForMap",
  async (queryParams: any) => {
    const response = await getPropertiesForMapAPI(queryParams);
    return response;
  }
);

export const fetchPropertiesCount = createAsyncThunk(
  "properties/fetchPropertiesCount",
  async (queryParams: any) => {
    const response = await getPropertiesCountAPI(queryParams);
    return response;
  }
);

export const fetchPropertyById = createAsyncThunk(
  "properties/fetchPropertyById",
  async ({ id, queryParam }: { id: string; queryParam: any }) => {
    const response = await getPropertyByIdAPI(id, queryParam);
    return response;
  }
);

export const fetchCityWithSubdiv = createAsyncThunk(
  "properties/fetchCityWithSubdiv",
  async (name: string) => {
    const response = await getCityWithSubdivAPI(name);
    return response;
  }
);

export const fetchSubDiv = createAsyncThunk(
  "properties/fetchSubDiv",
  async (name: string) => {
    const response = await getCommunityByNameAPI(name);
    return response;
  }
);

export const fetchRecentSiteUpdates = createAsyncThunk(
  "properties/fetchRecentSiteUpdates",
  async (queryParam: any) => {
    const response = await getRecentUpdatesAPI(queryParam);
    return response;
  }
);

const initialState: any = {
  properties: [],
  property: [],
  mapProperties: [],
  paginationData: {
    from: 0,
    to: 0,
    page: 1,
    links: [],
    total: 0,
    totalPageNumber: 0,
    next_page_url: null,
    prev_page_url: null,
    items_per_page: 0,
  },
  singlepaginationData: {
    previousId: "",
    nextId: "",
    total: 0,
    current: 0,
  },
  queryParam: {
    page: 1,
    perPage: DEFAULT_PAGE_LIMIT,
    id: "",
    keyword: "",
    location: "",
    community: "",
    city_zip: [],
    address: "",
    condo_complex: "",
    mls: "",
    school: "",
    price: "",
    propertyType: ["Single Family Residence"],
    sqft: "",
    bedrooms: "",
    fullbath: "",
    yearblt: "",
    listStatus: 1,
    soldDateBetween: [],
    primaryBed: "",
    lotSize: "",
    garages: "",
    schoolRate: "",
    propFeatures: [],
    neighborFeatures: [],
    specialType: [],
    sortby: "",
    sortvalue: "",
    just_listed: "",
    coming_soon: "",
    just_reduced: "",
    back_on_market: "",
    street_number: "",
    street_name: "",
    street_type: "",
    county: "",
    commute_radius: "",
    commute_radius_lat: "",
    commute_radius_lng: "",
  },
  searchType: {},
  cityData: { name: "", state: "", html_content: "", sud_divisions: [] },
  subDivData: { name: "", city: "", html_content: "" },
  isCityFiltered: false,
  isSubDivFiltered: false,
  loading: false,
  countLoading: false,
  idLoading: false,
  totalCount: 0,
  currentPropAddress: "",
  siteUpdates: {
    just_listed: 0,
    coming_soon: 0,
    just_reduced: 0,
    just_reduced_signle_family: 0,
    back_on_market: 0,
    back_on_market_signle_family: 0,
  },
};

export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.queryParam.id = action.payload;
    },
    setKeyword: (state, action) => {
      state.queryParam.keyword = action.payload;
    },
    setLocation: (state, action) => {
      state.queryParam.location = action.payload;
    },
    setCityZip: (state, action) => {
      state.queryParam.city_zip = action.payload;
    },
    setCommunity: (state, action) => {
      state.queryParam.community = action.payload;
    },
    setAddress: (state, action) => {
      state.queryParam.address = action.payload;
    },
    setCondo: (state, action) => {
      state.queryParam.condo_complex = action.payload;
    },
    setMLS: (state, action) => {
      state.queryParam.mls = action.payload;
    },
    setSchool: (state, action) => {
      state.queryParam.school = action.payload;
    },
    setPrice: (state, action) => {
      state.queryParam.price = action.payload;
    },
    setPropertyType: (state, action) => {
      state.queryParam.propertyType = action.payload;
    },
    setSqfeet: (state, action) => {
      state.queryParam.sqft = action.payload;
    },
    setBedRooms: (state, action) => {
      state.queryParam.bedrooms = action.payload;
    },
    setFullBath: (state, action) => {
      state.queryParam.fullbath = action.payload;
    },
    setYearBlt: (state, action) => {
      state.queryParam.yearblt = action.payload;
    },
    setListStatus: (state, action) => {
      state.queryParam.listStatus = action.payload;
    },
    setSoldDateBetween: (state, action) => {
      state.queryParam.soldDateBetween = action.payload;
    },
    setPrimaryBed: (state, action) => {
      state.queryParam.primaryBed = action.payload;
    },
    setLotSize: (state, action) => {
      state.queryParam.lotSize = action.payload;
    },
    setGarageBays: (state, action) => {
      state.queryParam.garages = action.payload;
    },
    setSchoolRate: (state, action) => {
      state.queryParam.schoolRate = action.payload;
    },
    setPropFeatures: (state, action) => {
      state.queryParam.propFeatures = action.payload;
    },
    setNeighborFeatures: (state, action) => {
      state.queryParam.neighborFeatures = action.payload;
    },
    setSpecialType: (state, action) => {
      state.queryParam.specialType = action.payload;
    },
    setSortBy: (state, action) => {
      state.queryParam.sortby = action.payload;
    },
    setSortValue: (state, action) => {
      state.queryParam.sortvalue = action.payload;
    },
    setJustListed: (state, action) => {
      state.queryParam.just_listed = action.payload;
    },
    setComingSoon: (state, action) => {
      state.queryParam.coming_soon = action.payload;
    },
    setJustReduced: (state, action) => {
      state.queryParam.just_reduced = action.payload;
    },
    setBackOnMarket: (state, action) => {
      state.queryParam.back_on_market = action.payload;
    },
    setPage: (state, action) => {
      state.queryParam.page = action.payload;
    },
    setIsCityFiltered: (state, action) => {
      state.isCityFiltered = action.payload;
    },
    setIsSubDivFiltered: (state, action) => {
      state.isSubDivFiltered = action.payload;
    },
    setIsLoading: (state) => {
      state.loading = !state.loading;
    },
    resetState: (state) => {
      // Reset state to initial values
      Object.assign(state, initialState);
    },
    setCurrentPropAddress: (state, action) => {
      state.currentPropAddress = action.payload;
    },
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },
    setStNumber: (state, action) => {
      state.queryParam.street_number = action.payload;
    },
    setStName: (state, action) => {
      state.queryParam.street_name = action.payload;
    },
    setStType: (state, action) => {
      state.queryParam.street_type = action.payload;
    },
    setCounty: (state, action) => {
      state.queryParam.county = action.payload;
    },
    setCommuteRadius: (state, action) => {
      state.queryParam.commute_radius = action.payload;
    },
    setCommuteRadiusLat: (state, action) => {
      state.queryParam.commute_radius_lat = action.payload;
    },
    setCommuteRadiusLng: (state, action) => {
      state.queryParam.commute_radius_lng = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProperties.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProperties.fulfilled, (state, action) => {
      state.properties = action.payload.responseData;
      state.paginationData = action.payload.payload;
      state.loading = false;
    });
    builder.addCase(fetchProperties.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchPropertiesForMap.pending, (state) => {
      state.mapProperties = [];
    });
    builder.addCase(fetchPropertiesForMap.fulfilled, (state, action) => {
      state.mapProperties = action.payload.responseData;
    });
    builder.addCase(fetchPropertiesCount.pending, (state) => {
      state.countLoading = true;
    });
    builder.addCase(fetchPropertiesCount.fulfilled, (state, action) => {
      state.totalCount = action.payload.responseData.totalRecords;
      state.countLoading = false;
    });
    builder.addCase(fetchPropertiesCount.rejected, (state) => {
      state.countLoading = false;
    });
    builder.addCase(fetchPropertyById.pending, (state) => {
      state.idLoading = true;
    });
    builder.addCase(fetchPropertyById.fulfilled, (state, action) => {
      state.property = action.payload.responseData;
      state.singlepaginationData = action.payload.payload;
      state.idLoading = false;
    });
    builder.addCase(fetchPropertyById.rejected, (state) => {
      state.idLoading = false;
    });
    builder.addCase(fetchCityWithSubdiv.pending, (state) => {
      // state.loading = true;
    });
    builder.addCase(fetchCityWithSubdiv.fulfilled, (state, action) => {
      state.cityData.name = action.payload.responseData?.name;
      state.cityData.state = action.payload.responseData?.state?.name;
      state.cityData.html_content = action.payload.responseData?.html_content;
      state.cityData.sud_divisions = action.payload.responseData?.community;
      // state.loading = false;
    });
    builder.addCase(fetchCityWithSubdiv.rejected, (state) => {
      // state.loading = false;
    });
    builder.addCase(fetchSubDiv.pending, (state) => {
      // state.loading = true;
    });
    builder.addCase(fetchSubDiv.fulfilled, (state, action) => {
      state.subDivData.name = action.payload.responseData?.name;
      state.subDivData.html_content = action.payload.responseData?.html_content;
      // state.loading = false;
    });
    builder.addCase(fetchSubDiv.rejected, (state) => {
      // state.loading = false;
    });
    builder.addCase(fetchRecentSiteUpdates.fulfilled, (state, action) => {
      state.siteUpdates = action.payload.responseData;
    });
  },
});

export const {
  setId,
  setKeyword,
  setLocation,
  setCityZip,
  setCommunity,
  setAddress,
  setCondo,
  setMLS,
  setSchool,
  setPrice,
  setPropertyType,
  setSqfeet,
  setBedRooms,
  setFullBath,
  setYearBlt,
  setListStatus,
  setSoldDateBetween,
  setPrimaryBed,
  setLotSize,
  setGarageBays,
  setSchoolRate,
  setPropFeatures,
  setNeighborFeatures,
  setSpecialType,
  setSortBy,
  setSortValue,
  setJustListed,
  setComingSoon,
  setJustReduced,
  setBackOnMarket,
  setPage,
  setIsCityFiltered,
  setIsSubDivFiltered,
  setIsLoading,
  resetState,
  setCurrentPropAddress,
  setSearchType,
  setStNumber,
  setStName,
  setStType,
  setCounty,
  setCommuteRadius,
  setCommuteRadiusLat,
  setCommuteRadiusLng,
} = propertiesSlice.actions;

export const selectFiltersAppliedCount = createSelector(
  [(state) => state.properties_new.queryParam],
  (queryParam) => {
    let count = 0;
    Object.keys(queryParam).forEach((key) => {
      if (!["propertyType", "page"].includes(key)) {
        if (Array.isArray(queryParam[key])) {
          if (queryParam[key].length > 0) {
            count++;
          }
        } else {
          if (
            initialState.queryParam[key] !== queryParam[key]
            //  && queryParam[key] !== ""
          ) {
            count++;
          }
        }
      }
    });
    return count;
  }
);

// This selector returns only the applied filters
export const selectAppliedFilters = createSelector(
  [(state) => state.properties_new.queryParam],
  (queryParam: any) => {
    let appliedFilters: Record<string, any> = {};
    Object.keys(queryParam).forEach((key: any) => {
      if (Array.isArray(queryParam[key])) {
        // Check if the array is not empty
        if (queryParam[key].length > 0) {
          appliedFilters[key] = queryParam[key];
        }
      } else if (
        typeof queryParam[key] === "object" &&
        queryParam[key] !== null
      ) {
        // Check if the object has any keys
        if (Object.keys(queryParam[key]).length > 0) {
          appliedFilters[key] = queryParam[key];
        }
      } else {
        // Check if the value is not an empty string and differs from the initial state
        if (
          queryParam[key] !== "" &&
          queryParam[key] !== initialState.queryParam[key]
        ) {
          appliedFilters[key] = queryParam[key];
        }
      }
    });
    return appliedFilters;
  }
);

export default propertiesSlice.reducer;
