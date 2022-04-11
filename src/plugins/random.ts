import { Animation } from "dotosb";
import Plugin from "osbx/lib/src/plugin";
import { Position } from "osbx/lib/src/sprite";

export default class Random extends Plugin {

  public range(min: number, max: number): number {
    return min + Math.random() * max;
  }

  public rangeInt(min: number, max: number): number {
    return Math.round(this.range(min, max));
  }
}