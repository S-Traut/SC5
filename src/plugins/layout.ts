import Plugin from "osbx/lib/src/plugin";
import { Position } from "osbx/lib/src/sprite";

type Flex = {
  position: Position,
  i: number,
}

type Grid = {
  position: Position,
  i: number,
  column: number,
  row: number,
}

type Circle = {
  position: Position,
  i: number,
  angle: number
}

interface FlexCallback {
  (Position: Flex): void
}

interface GridCallback {
  (Position: Grid): void
}

interface CircleCallback {
  (Position: Circle): void
}

export default class Layout extends Plugin {

  flex(width: number, columns: number, position: Position, callback: FlexCallback) {
    const gap = width / columns;
    let posX = position.x - (width / 2) + (gap / 2);
    for(let i = 0; i < columns; i++) {
      const new_position = {x: posX, y: position.y};
      callback({ position: new_position , i: i });      
      posX += gap;
    }
  }

  grid(width: number, height: number, rows: number, columns: number, position: Position, callback: GridCallback) {
    
    const gap_x = width / columns;
    const gap_y = height / rows ;
    let pos_x = position.x - (width / 2) + (gap_x / 2);
    let pos_y = position.y - (height / 2) + (gap_y / 2)
    let i = 0;
    const init_x = pos_x;

    for(let y = 0; y < rows; y++) {
      for(let x = 0; x < columns; x++) {
        const new_position = {x: pos_x, y: pos_y};
        callback({ position: new_position , i: i, column: x, row: y });      
        pos_x += gap_x;
        i++;
      }
      
      pos_x = init_x;
      pos_y += gap_y;
    }
  }

  circle(position: Position, radius: number, count: number, callback: CircleCallback, angle = 0) {
    const angle_step = (Math.PI * 2) / count;
    for (let i = 0; i < count; i++) {

      const circle_position = {
        x: position.x + Math.cos(angle) * radius,
        y: position.y + Math.sin(angle) * radius,
      }

      callback({ position: circle_position, i: i, angle: angle });

      angle += angle_step;
    }
  }
}