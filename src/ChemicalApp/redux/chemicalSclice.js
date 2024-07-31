import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chemicals: JSON.parse(localStorage.getItem('chemicals')) || [
    { id: 1, name: 'Hydrochloric Acid', formula: 'HCL' },
    { id: 2, name: 'Sodium Chloride', formula: 'NaCl' },
    { id: 3, name: 'Sulfuric Acid', formula: 'H2SO4' },
    { id: 4, name: 'Ammonia', formula: 'NH3' },
    { id: 5, name: 'Ethanol', formula: 'C2H5OH' },
  ]
};

const chemicalSlice = createSlice({
  name: "chemicals",
  initialState,
  reducers: {
    addChemical(state, action) {
      state.chemicals = [...state.chemicals, { id: state.chemicals.length + 1, name: action.payload.name, formula: action.payload.formula }];
    },
    deleteChemical(state, action) {
      state.chemicals = state.chemicals.filter(item => item.id !== action.payload);
    },
    editChemical(state, action) {
      const chemicalIndex = state.chemicals.findIndex((chemical) => chemical.id === action.payload.id);
      if (chemicalIndex !== -1) {
        state.chemicals[chemicalIndex] = { ...state.chemicals[chemicalIndex], ...action.payload };
      }
    },
    searchChemical(state, action) {
      state.searchKeyword = action.payload;
      state.searchResult = state.chemicals.filter(item => item.name.toLowerCase().includes(action.payload)
        || item.formula.toLowerCase().includes(action.payload));
    }
  },
});

export const { addChemical, deleteChemical, editChemical, searchChemical } = chemicalSlice.actions;
export default chemicalSlice.reducer;