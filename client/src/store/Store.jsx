import { create } from "zustand";

const useBusDataStore = create((set) => ({
  busData: [],
  activeStep: 0,
  setBusData: (newBusData) => set({ busData: newBusData }),
  setActiveStep: (newActiveStep) => set({ activeStep: newActiveStep }),
}));

export default useBusDataStore;
