import React, { FC, memo, useCallback, useMemo } from 'react';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import {
  changeTool,
  changeToolColor,
  changeLineThickness,
  changeFillColor,
} from '../../../store/slice/toolSlice';
import { TOOLS } from '../../../constants/canvas';
import { lineThicknessSelect } from '../../../constants/lineThickness';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Checkbox,
  SelectChangeEvent,
  Button,
} from '@mui/material';
import {
  ToolBarContainer,
  ToolButtonsContainer,
  ToolButtonsControlContainer,
  Input,
} from './ToolBar.styles';

export const ToolBar: FC = memo(() => {
  const dispatch = useTypedDispatch();
  const { tool, color, fillColor, lineThickness } = useTypedSelector(
    (state) => state.tool
  );

  const setToolIconColor = useMemo(
    () => (selectedTool: string) => {
      return tool === selectedTool ? 'primary' : 'info';
    },
    [tool]
  );

  const setFillColor = useCallback(
    () => dispatch(changeFillColor()),
    [dispatch]
  );

  const setToolColor = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(changeToolColor(e.target.value));

  const setLineThickness = (e: SelectChangeEvent<number>) =>
    dispatch(changeLineThickness(+e.target.value));

  return (
    <ToolBarContainer>
      <ToolButtonsContainer>
        {Object.values(TOOLS).map((item) => {
          const { name, icon: Icon } = item;
          return (
            <Button
              key={name}
              onClick={() => dispatch(changeTool(name))}
              color={setToolIconColor(name)}
              sx={{ m: 1 }}
              variant="contained"
            >
              <Icon />
            </Button>
          );
        })}
      </ToolButtonsContainer>
      <ToolButtonsControlContainer>
        <Box>Fill color:</Box>
        <Checkbox checked={fillColor} onChange={setFillColor} />
        <Box>Color:</Box>
        <Input value={color} onChange={setToolColor} type="color" />
        <Box>Line thickness:</Box>
        <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth size="medium">
            <Select value={lineThickness || ''} onChange={setLineThickness}>
              {lineThicknessSelect.map((thickness) => {
                return (
                  <MenuItem key={thickness} value={thickness}>
                    {thickness}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </ToolButtonsControlContainer>
    </ToolBarContainer>
  );
});

ToolBar.displayName = 'ToolBar';
