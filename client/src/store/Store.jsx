import { create } from "zustand";

const useBusDataStore = create((set) => ({
  busData: [],
  activeStep: 0,
  busSelection: null,
  userID: 0,
  setBusData: (newBusData) => set({ busData: newBusData }),
  setActiveStep: (newActiveStep) => set({ activeStep: newActiveStep }),
  setBusSelection: (newBusSelection) => set({ busSelection: newBusSelection }),
  setUserID: (newUserID) => set({ userID: newUserID }),
}));

export default useBusDataStore;
