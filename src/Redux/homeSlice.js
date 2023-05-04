import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIClient } from "../Utils/Api/Api";


export const fetchAsynchome = createAsyncThunk(
  'home/fetchAsynchome',
  async () => {
    const response = await APIClient.get(`/findHomeImagesByEnglish`);
    const data = await response.data.data;
    return data;
  }
);
export const fetchAsynchomeaccessories = createAsyncThunk(
  'home/fetchAsynchomeaccessories',
  async (cur) => {
    const response = await APIClient.get(`/findlimtProductbyCategoryid?cur=${cur}&category_id=99`);
    const data = await response.data.data;
    return data;
  }
);
export const fetchAsynchomecomputers = createAsyncThunk(
  'home/fetchAsynchomecomputers',
  async (cur) => {
    const response = await APIClient.get(`/findlimtProductbyCategoryid?cur=${cur}&category_id=98`);
    const data = await response.data.data;
    return data;
  }
);
export const fetchAsynchomemobiles = createAsyncThunk(
  'home/fetchAsynchomemobiles',
  async (cur) => {
    const response = await APIClient.get(`/findlimtProductbyCategoryid?cur=${cur}&category_id=82`);
    const data = await response.data.data;
    return data;
  }
);
export const fetchAsynchometablets = createAsyncThunk(
  'home/fetchAsynchometablets',
  async (cur) => {
    const response = await APIClient.get(`/findlimtProductbyCategoryid?cur=${cur}&category_id=89`);
    const data = await response.data.data;
    return data;
  }
);



export const fetchAsynchomehome = createAsyncThunk(
  'home/fetchAsynchomehome',
  async (cur) => {
    const response = await APIClient.get(`/findlimtProductbyCategoryid?cur=${cur}&category_id=120`);
    const data = await response.data.data;
    return data;
  }
);
export const fetchAsynchomewatches = createAsyncThunk(
  'home/fetchAsynchomewatches',
  async (cur) => {
    const response = await APIClient.get(`/findlimtProductbyCategoryid?cur=${cur}&category_id=124`);
    const data = await response.data.data;
    return data;
  }
);
export const fetchAsynchometravel = createAsyncThunk(
  'home/fetchAsynchometravel',
  async (cur) => {
    const response = await APIClient.get(`/findlimtProductbyCategoryid?cur=${cur}&category_id=128`);
    const data = await response.data.data;
    return data;
  }
);
export const fetchAsynchomepersonalcare = createAsyncThunk(
  'home/fetchAsynchomepersonalcare',
  async (cur) => {
    const response = await APIClient.get(`/findlimtProductbyCategoryid?cur=${cur}&category_id=133`);
    const data = await response.data.data;
    return data;
  }
);
export const fetchAsynccamera = createAsyncThunk(
  'home/ffetchAsynccamera',
  async (cur) => {
    const response = await APIClient.get(`/findlimtProductbyCategoryid?cur=${cur}&category_id=139`);
    const data = await response.data.data;
    return data;
  }
);
export const fetchAsynchomeofferzone = createAsyncThunk(
  'home/fetchAsynchomeofferzone',
  async (cur) => {
    const response = await APIClient.get(`/findlimtProductbyCategoryid?cur=${cur}&category_id=153`);
    const data = await response.data.data;
    return data;
  }
);
export const fetchAsynchomegame = createAsyncThunk(
  'home/fetchAsynchomegame',
  async (cur) => {
    const response = await APIClient.get(`/findlimtProductbyCategoryid?cur=${cur}&category_id=166`);
    const data = await response.data.data;
    return data;
  }
);

const initialState = {
  homeslider: [],
  homeaccessories: [],
  homecomputer: [],
  homemobiles: [],
  hometablets: [],
  homehome: [],
  homewatches: [],
  hometravel: [],
  homepersonalcare: [],
  homecamera: [],
  homeoffer: [],
  homegame: [],
}
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder



      .addCase(fetchAsynchome.fulfilled, (state, action) => {
        state.homeslider = action.payload;
      })
      .addCase(fetchAsynchome.rejected, () => {
        console.log('rejected');
      })


      .addCase(fetchAsynchomeaccessories.fulfilled, (state, action) => {
        state.homeaccessories = action.payload;
      })
      .addCase(fetchAsynchomeaccessories.rejected, () => {
        console.log('rejected');
      })


      .addCase(fetchAsynchomecomputers.fulfilled, (state, action) => {
        state.homecomputer = action.payload;
      })
      .addCase(fetchAsynchomecomputers.rejected, () => {
        console.log('rejected');
      })

      .addCase(fetchAsynchomemobiles.fulfilled, (state, action) => {
        state.homemobiles = action.payload;
      })
      .addCase(fetchAsynchomemobiles.rejected, () => {
        console.log('rejected');
      })

      .addCase(fetchAsynchometablets.fulfilled, (state, action) => {
        state.hometablets = action.payload;
      })
      .addCase(fetchAsynchometablets.rejected, () => {
        console.log('rejected');
      })
      // .addCase(fetchAsynchome.fulfilled, (state, action) => {
      //   state.homeslider = action.payload;
      // })
      // .addCase(fetchAsynchome.rejected, () => {
      //   console.log('rejected');
      // })

      .addCase(fetchAsynchomehome.fulfilled, (state, action) => {
        state.homehome = action.payload;
      })
      .addCase(fetchAsynchomehome.rejected, () => {
        console.log('rejected');
      })

      .addCase(fetchAsynchomewatches.fulfilled, (state, action) => {
        state.homewatches = action.payload;
      })
      .addCase(fetchAsynchomewatches.rejected, () => {
        console.log('rejected');
      })



      .addCase(fetchAsynchometravel.fulfilled, (state, action) => {
        state.hometravel = action.payload;
      })
      .addCase(fetchAsynchometravel.rejected, () => {
        console.log('rejected');
      })






      .addCase(fetchAsynccamera.fulfilled, (state, action) => {
        state.homecamera = action.payload;
      })
      .addCase(fetchAsynccamera.rejected, () => {
        console.log('rejected');
      })


      .addCase(fetchAsynchomeofferzone.fulfilled, (state, action) => {
        state.homeoffer = action.payload;
      })
      .addCase(fetchAsynchomeofferzone.rejected, () => {
        console.log('rejected');
      })

      .addCase(fetchAsynchomegame.fulfilled, (state, action) => {
        state.homegame = action.payload;
      })
      .addCase(fetchAsynchomegame.rejected, () => {
        console.log('rejected');
      })

      .addCase(fetchAsynchomepersonalcare.fulfilled, (state, action) => {
        state.homepersonalcare = action.payload;
      })
      .addCase(fetchAsynchomepersonalcare.rejected, () => {
        console.log('rejected');
      })







  }
},)

export const getHomeslider = (state) => state.home.homeslider
export const getHomeaccessories = (state) => state.home.homeaccessories;
export const getHomecomputer = (state) => state.home.homecomputer;
export const getHomemobiles = (state) => state.home.homemobiles;
export const getHometablets = (state) => state.home.hometablets;
export const gethomehome = (state) => state.home.homehome;
export const getHomewatches = (state) => state.home.homewatches;
export const getHometravel = (state) => state.home.hometravel;
export const getHomepersonalcare = (state) => state.home.homepersonalcare;
export const getHomecamera = (state) => state.home.homecamera;
export const getHomeoffer = (state) => state.home.homeoffer;
export const getHomegame = (state) => state.home.homegame;

export default homeSlice.reducer



















