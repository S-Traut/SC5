import { Animation } from "dotosb";
import Plugin from "osbx/lib/src/plugin";
import { Position } from "osbx/lib/src/sprite";

class Gif {
  sprite: Animation;
  frame_count: number;
  frame_delay: number;

  constructor(sprite: Animation, frame_count: number, frame_delay: number) {
    this.sprite = sprite;
    this.frame_count = frame_count;
    this.frame_delay = frame_delay;
  }

  public setScale(time: number, value: number): Gif {
    this.sprite.add('S', time, value);
    return this;
  }

  public flipX(time: number, size: number) {
    this.sprite.add('V', time, [-size, size]);
  }

  public setTimes(start: number, end: number, fade = false,  delay_frames = 0, fade_value = 1): Gif {
    if (delay_frames > 0) {
      const delay_start = start - this.frame_delay * delay_frames;
      this.sprite.add('F', [delay_start, start], [0, 0]);
    }

    if(!fade) {
      this.sprite.add('F', [start, end], [fade_value, fade_value]);
      return this;
    }
    this.sprite.add('F', [start, start + 500], [0, fade_value]);
    this.sprite.add('F', [end - 500, end], [fade_value, 0]);
    return this;
  }

  public setPosition(time: number, position: Position) {
    this.sprite.add('M', time, [position.x, position.y]);
  }

  public move(start: number, end: number, start_position: Position, end_position: Position) {
    this.sprite.add('M', [start, end], [start_position.x, start_position.y, end_position.x, end_position.y]);
    return this;
  }

  public rotate(start: number, end: number, start_value: number, end_value: number) {
    this.sprite.add('R', [start, end], [start_value, end_value]);
  }
}

export default class Gifs extends Plugin {

  public create(path: string, fc: number, fd: number): Gif {
    const animation = this.storyboard.createAnimation(path, fc, fd);
    return new Gif(animation, fc, fd);
  }
}