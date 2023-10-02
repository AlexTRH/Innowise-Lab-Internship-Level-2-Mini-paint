import { TPrevPosition } from '../types/types';

export const drawRect = (
  e: React.MouseEvent<HTMLCanvasElement>,
  ctx: CanvasRenderingContext2D | null,
  prevPosition: TPrevPosition,
  fillColor: boolean
) => {
  if (!fillColor) {
    return ctx!.strokeRect(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY,
      prevPosition.x - e.nativeEvent.offsetX,
      prevPosition.y - e.nativeEvent.offsetY
    );
  }
  ctx!.fillRect(
    e.nativeEvent.offsetX,
    e.nativeEvent.offsetY,
    prevPosition.x - e.nativeEvent.offsetX,
    prevPosition.y - e.nativeEvent.offsetY
  );
};

export const drawCircle = (
  e: React.MouseEvent<HTMLCanvasElement>,
  ctx: CanvasRenderingContext2D | null,
  prevPosition: TPrevPosition,
  fillColor: boolean
) => {
  ctx!.beginPath();
  const radius = Math.sqrt(
    Math.pow(prevPosition.x - e.nativeEvent.offsetX, 2) +
      Math.pow(prevPosition.y - e.nativeEvent.offsetY, 2)
  );
  ctx!.arc(prevPosition.x, prevPosition.y, radius, 0, 2 * Math.PI);
  fillColor ? ctx!.fill() : ctx!.stroke();
};

export const drawStar = (
  e: React.MouseEvent<HTMLCanvasElement>,
  ctx: CanvasRenderingContext2D | null,
  prevPosition: TPrevPosition,
  fillColor: boolean
) => {
  let rot = (Math.PI / 2) * 3;
  let x = e.nativeEvent.offsetX;
  let y = e.nativeEvent.offsetY;
  const step = Math.PI / 5;
  const outerRadius = Math.sqrt(
    Math.pow(e.nativeEvent.offsetX - prevPosition.x, 2)
  );
  ctx!.beginPath();
  ctx!.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY - outerRadius);
  for (let i = 0; i < 5; i++) {
    x = e.nativeEvent.offsetX + Math.cos(rot) * outerRadius;
    y = e.nativeEvent.offsetY + Math.sin(rot) * outerRadius;
    ctx!.lineTo(x, y);
    rot += step;

    x = e.nativeEvent.offsetX + (Math.cos(rot) * outerRadius) / 2.5;
    y = e.nativeEvent.offsetY + (Math.sin(rot) * outerRadius) / 2.5;
    ctx!.lineTo(x, y);
    rot += step;
  }
  ctx!.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY - outerRadius);
  ctx!.closePath();
  ctx!.stroke();
  fillColor ? ctx!.fill() : ctx!.stroke();
};

export const drawHexagon = (
  e: React.MouseEvent<HTMLCanvasElement>,
  ctx: CanvasRenderingContext2D | null,
  prevPosition: TPrevPosition,
  fillColor: boolean
) => {
  const shapeType = 6;
  const angle = (2 * Math.PI) / shapeType;
  const radius = Math.sqrt(Math.pow(e.nativeEvent.offsetX - prevPosition.x, 2));
  ctx!.beginPath();
  for (let i = 0; i < shapeType; i++) {
    const x = e.nativeEvent.offsetX + radius * Math.cos(angle * i);
    const y = e.nativeEvent.offsetY + radius * Math.sin(angle * i);
    ctx!.lineTo(x, y);
  }
  ctx!.closePath();
  ctx!.stroke();
  fillColor ? ctx!.fill() : ctx!.stroke();
};

export const drawTriangle = (
  e: React.MouseEvent<HTMLCanvasElement>,
  ctx: CanvasRenderingContext2D | null,
  prevPosition: TPrevPosition,
  fillColor: boolean
) => {
  ctx!.beginPath();
  ctx!.moveTo(prevPosition.x, prevPosition.y);
  ctx!.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  ctx!.lineTo(
    prevPosition.x * 2 - e.nativeEvent.offsetX,
    e.nativeEvent.offsetY
  );
  ctx!.closePath();
  fillColor ? ctx!.fill() : ctx!.stroke();
};

export const drawLine = (
  e: React.MouseEvent<HTMLCanvasElement>,
  ctx: CanvasRenderingContext2D | null,
  prevPosition: TPrevPosition
) => {
  ctx!.beginPath();
  ctx!.moveTo(prevPosition.x, prevPosition.y);
  ctx!.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  ctx!.stroke();
};

export const eraser = (
  e: React.MouseEvent<HTMLCanvasElement>,
  ctx: CanvasRenderingContext2D | null
) => {
  ctx!.strokeStyle = '#fff';
  ctx!.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  ctx!.stroke();
};

export const brush = (
  e: React.MouseEvent<HTMLCanvasElement>,
  ctx: CanvasRenderingContext2D | null,
  fillColor: boolean,
  color: string
) => {
  ctx!.strokeStyle = color;
  ctx!.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  ctx!.stroke();
  fillColor ? ctx!.fill() : ctx!.stroke();
};
