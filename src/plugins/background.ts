import Plugin from "osbx/lib/src/plugin";
import { Layers } from "osbx/lib/src/sprite";
import { Color } from "../utils";

export default class Background extends Plugin {

  setVignette(start: number, end: number) {
    const vignette = this.createSprite('sb/v.png', Layers.Foreground);
    vignette.fade([start, start + 300], [0, 1]);
    vignette.fade([end - 300, end], [1, 0]);
    vignette.scale(start, 480.0/1080);
  }

  removeBaseBackground() {
    this.createSprite('bg.jpg').fade(0, 0);
  }

  plainColor(start: number, end: number, color: Color) {
    const sprite = this.createSprite('sb/p.png');
    sprite.fade([start, end], [1, 1]);
    sprite.vScale(start, [854, 480]);
    sprite.color(start, [color.r, color.g, color.b]);
  }

  colorFade(start: number, duration: number, color: Color) {
    const sprite = this.createSprite('sb/p.png');
    sprite.fade([start, start + duration], [1, 0]);
    sprite.vScale(start, [854, 480]);
    sprite.color(start, [color.r, color.g, color.b]);
  }
}