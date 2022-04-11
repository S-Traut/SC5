import { Font, generateTexture, getFont, Texture } from "ftgen";
import Plugin from "osbx/lib/src/plugin";
import Sprite, { Layers, Origins, Position } from "osbx/lib/src/sprite";

export type Letter = {
  sprite: Sprite,
  texture: Texture,
  i: number
}

interface LetterCallback {
  (letter: Letter): void;
}

export default class Text extends Plugin {

  font!: Font;

  public generateTitleImage(path: string, layer: Layers): Sprite {
    return this.createSprite(path, layer);
  }

  public loadFont(path: string, dir: string): Font {
    const beatmap_path = this.project.getBeatmapPath();
    const font = getFont(path, `${beatmap_path}/sb/f/${dir}/`);
    this.font = font;
    return font;
  }

  public forLetter(
    text: string, 
    callback: LetterCallback, 
    scale: number,
    position: Position, 
    letter_spacing = 0,
    increment = 50,
    layer = Layers.Background,
    origin = Origins.Centre,
  ) {
    this.fontExist();
    let x = position.x;
    let i = 0;
    for (const letter of text) {
      const texture = generateTexture(this.font, letter);
      const beatmap_path = this.project.getBeatmapPath();
      const letter_x = this.getOffset(x, texture, scale);
      texture.path = texture.path.replace(`${beatmap_path}/`, '');
      const sprite = this.createSprite(texture.path, layer, origin, {
        x: letter_x, y: position.y
      });

      
      const instance: Letter = {
        sprite: sprite,
        texture: texture,
        i: i,
      };
      
      callback(instance);
      x += texture.width * scale + letter_spacing;
      i += increment;
    }
  }
  
  public getOffset(x: number, texture: any, scale: number): number {
    return parseFloat((x + texture.width * 0.5 * scale).toFixed(3));
  }

  public movieMaker(text: string, start: number, end: number) {
    const texture = generateTexture(this.font, text);
    const beatmap_path = this.project.getBeatmapPath();
    texture.path = texture.path.replace(`${beatmap_path}/`, '');
    const sprite_1 = this.createSprite(texture.path);
    sprite_1.fade([start, start + 300], [0, 1]);
    sprite_1.fade([end - 300, end], [1, 0]);
    sprite_1.scale(start, 0.5);
    
    const sprite_2 = this.createSprite(texture.path);
    sprite_2.fade([start + 100, start + 400], [0, 0.4]);
    sprite_2.fade([end - 400, end - 100], [0.4, 0]);
    sprite_2.move([start, end], [330, 200, 310, 200]);
    sprite_2.scale(start, 1.5);
    
    const sprite_3 = this.createSprite(texture.path);
    sprite_3.fade([start + 200, start + 500], [0, 0.2]);
    sprite_3.fade([end - 500 , end - 200], [0.2, 0]);
    sprite_3.move([start, end], [300, 260, 340, 260]);
    sprite_3.scale(start, 3);   
  }

  private fontExist() {
    if(this.font == undefined) {
      this.logger.error('Font variable is not defined.');
      return false;
    }
    return true;
  }
}