import { Easing, newEvent } from "dotosb";
import Plugin from "osbx/lib/src/plugin";
import Sprite, { Layers, Origins } from "osbx/lib/src/sprite";

class Mii {
  sprite: Sprite;
  move_queue: Array<{x: number, speed: number}>;
  init_time: number;
  init_x: number;
  facing: boolean;
  scale: number;

  constructor(sprite: Sprite, init_time: number, init_x: number) {
    this.sprite = sprite;
    this.init_time = init_time;
    this.init_x = init_x;
    this.move_queue = [];
    this.scale = 1;
    this.facing = true;
  }

  moveTo(position_x: number, speed: number) {
    this.move_queue.push({x: position_x, speed: speed});
  }

  setScale(scale: number) {
    this.sprite.vScale(this.init_time, [scale, scale]);
    this.scale = scale;
  }

  generate() {
    let t = this.init_time;
    let x = this.init_x;
    this.sprite.fade([t, t + 1000], [0, 1]);
    for(const move of this.move_queue) {
      this.sprite.moveX([t, t + move.speed * 1000], [x, move.x]);
      this.sprite.createLoop(t, Math.round((move.speed * 1000) / 1000), [
        newEvent('MY', [0, 500], [480, 490], Easing.SineInOut),
        newEvent('MY', [500, 1000], [490, 480], Easing.SineInOut)
      ]);

      if(this.facing && move.x < x) {
        this.flip(false, t);
      } else if(!this.facing) {
        this.flip(true, t);
      }
      
      x = move.x;
      t = t + move.speed * 1000;
    }
    this.sprite.fade([t, t + 1000], [1, 0]);
  }

  flip(positive: boolean, time: number) {
    this.sprite.vScale(
      [time, time + 300], 
      [
        positive ? -this.scale : this.scale, this.scale, 
        positive ? this.scale : -this.scale, this.scale
      ]
    );
    this.facing = !this.facing;
  }
}

export default class MiiController extends Plugin {

  create(mii_path: string, init_time: number, init_x: number): Mii {
    const sprite = this.createSprite(mii_path, Layers.Background, Origins.BottomCentre, {
      x: init_x,
      y: 240
    });

    const mii = new Mii(sprite, init_time, init_x);
    return mii;
  }
}