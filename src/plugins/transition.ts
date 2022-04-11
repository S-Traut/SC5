import { Easing } from "dotosb";
import Plugin from "osbx/lib/src/plugin";
import { Layers, Origins } from "osbx/lib/src/sprite";
import { Color } from "../utils";

export default class Transition extends Plugin {

  bars(start: number, color: Color) {
    const end = start + (16 * 20) + 100;
    let bar_width = 854 / 16;
    let x = 747 - (bar_width / 2);
    for (let i = 0; i < 16; i++) {
      const position = {x: x, y: 240};
      const bar = this.createSprite('sb/p.png', Layers.Foreground, Origins.Centre, position);
      const bar_start = start + (i * 20);
      bar.add('C', bar_start, [color.r, color.g, color.b]);
      bar.add('V', [bar_start, bar_start + 100], [0, 480, bar_width, 480]);
      bar.add('F', [bar_start, end], [1, 1]);
      x -= bar_width;
    }
  }

  static_crab() {
    const sprites = [
      this.createSprite('sb/c0.png'),
      this.createSprite('sb/c1.png'),
      this.createSprite('sb/c2.png'),
      this.createSprite('sb/c3.png'),
    ]

    let start_time = 84362;
    for (const sprite of sprites) {
      sprite.fade([start_time, start_time + (84842 - 84362)], [1, 1]);
      sprite.scale([start_time, start_time + 300], [0.3, 0.6], Easing.ExpoOut);
      start_time += 84842 - 84362;
    }
  }

}