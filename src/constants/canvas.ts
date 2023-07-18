import { ICanvasSize, ITools } from '../types/types';
import CreateIcon from '@mui/icons-material/Create';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import {
  brush,
  drawLine,
  eraser,
  drawRect,
  drawTriangle,
  drawCircle,
  drawStar,
  drawHexagon,
} from '../utils/figures';

export const CANVAS_SIZE: ICanvasSize = {
  width: 700,
  height: 400,
};

export const TOOLS: ITools = {
  brush: {
    name: 'brush',
    command: brush,
    icon: CreateIcon,
  },
  line: {
    name: 'line',
    command: drawLine,
    icon: HorizontalRuleIcon,
  },
  rectangle: {
    name: 'rectangle',
    command: drawRect,
    icon: CropSquareIcon,
  },
  triangle: {
    name: 'triangle',
    command: drawTriangle,
    icon: ChangeHistoryIcon,
  },
  circle: {
    name: 'circle',
    command: drawCircle,
    icon: RadioButtonUncheckedIcon,
  },
  star: {
    name: 'star',
    command: drawStar,
    icon: StarBorderOutlinedIcon,
  },
  hexagon: {
    name: 'hexagon',
    command: drawHexagon,
    icon: HexagonOutlinedIcon,
  },
  eraser: {
    name: 'eraser',
    command: eraser,
    icon: AutoFixNormalIcon,
  },
};
