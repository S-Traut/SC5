import { Position } from "osbx/lib/src/sprite"

export type Color = {
  r: number,
  g: number,
  b: number
}

export const Color = {
  white: {r: 255, g: 255, b: 255},
  black: {r: 0, g: 0, b: 0},
  blue: {r: 30, g: 73, b: 143},
}

export const SCREENCENTER: Position = {
  x: 320,
  y: 240,
}

export const SCREENTOP: Position = {
  x: 320,
  y: 0,
}

export const SCREENBOT: Position = {
  x: 320,
  y: 480,
}