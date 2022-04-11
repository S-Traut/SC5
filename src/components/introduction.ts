import { Easing } from "dotosb";
import { Texture } from "ftgen";
import Component from "osbx/lib/src/component";
import { Layers, Origins } from "osbx/lib/src/sprite";
import Gifs from "../plugins/gifs";
import Text, { Letter } from "../plugins/text";

export default class Introduction extends Component {

  background() {
    const gifs = this.getPlugin(Gifs);
    gifs.create('sb/a/ph.jpg', 45, 35)
      .setTimes(356, 1840)
      .setScale(356, 0.6);

    const text = this.getPlugin(Text);
    text.loadFont('./assets/fonts/font.ttf', "arial");
    
    text.forLetter("sota", (letter: Letter) => {
      letter.sprite.fade([1853 + letter.i, 2479], [1, 1]);
      letter.sprite.scale(1853 + letter.i, 0.6);
      letter.sprite.fade([2479, 4240], [1, 0]);
    }, 0.6, {x: 230, y: 240});
  
    const rks = text.createSprite('sb/ph.jpg', Layers.Background, Origins.Centre, {
      x: 365,
      y: 240
    });
    
    rks.fade([1853, 2479], [1, 1]);
    rks.scale([1853, 2300], [0, 0.2], Easing.BackOut);
    rks.rotate([1853, 2300], [0.6, 0], Easing.BackOut);
    rks.fade([2479, 4240], [1, 0]);
  
    text.forLetter("retarded", (letter: Letter) => {
      letter.sprite.fade([1853 + letter.i, 1853 + letter.i + 50], [0, 1]);
      letter.sprite.scale(1853 + letter.i, 0.3);
      letter.sprite.moveY([1853 + letter.i, 1853 + letter.i + 200], [290, 280], Easing.ExpoOut)
      letter.sprite.fade([2479, 4240], [1, 0]);
    }, 0.3, {x: 230, y: 280}, 13);
  }
  
}