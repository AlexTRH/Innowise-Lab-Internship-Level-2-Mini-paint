import { ToolState, TPrevPosition } from '../../types/types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ToolState = {
  tool: 'line',
  color: '#000000',
  lineThickness: 1,
  isDrawing: false,
  fillColor: false,
  prevPosition: {
    x: 0,
    y: 0,
  },
};

export const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    changeTool: (state, action: PayloadAction<string>) => {
      state.tool = action.payload;
    },
    changeToolColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    changeLineThickness: (state, action: PayloadAction<number>) => {
      state.lineThickness = action.payload;
    },
    toolIsDrawing: (state, action: PayloadAction<boolean>) => {
      state.isDrawing = action.payload;
    },
    changeFillColor: (state) => {
      state.fillColor = !state.fillColor;
    },
    changePrevPosition: (state, action: PayloadAction<TPrevPosition>) => {
      state.prevPosition = action.payload;
    },
  },
});

export const {
  changeTool,
  changeToolColor,
  changeLineThickness,
  toolIsDrawing,
  changeFillColor,
  changePrevPosition,
} = toolSlice.actions;

export default toolSlice.reducer;
