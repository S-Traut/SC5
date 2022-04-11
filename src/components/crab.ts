import Component from "osbx/lib/src/component";
import { Layers, Origins } from "osbx/lib/src/sprite";
import Background from "../plugins/background";
import Layout from "../plugins/layout";
import { Color, SCREENCENTER } from "../utils";

export default class Crab extends Component {
  
  background() {
    const background = this.getPlugin(Background);
    background.plainColor(86282, 101642, Color.white);
  }
 
  foreground() {
    const layout = this.getPlugin(Layout);
    layout.circle(SCREENCENTER, 200, 20, element => {
      const sprite = layout.storyboard.createAnimation('sb/a/c.png', 59, 30, {x: element.position.x, y: element.position.y});
      sprite.add('F', [86282 + element.i * 100, 86282 + element.i * 100 + 300], [0, 1]);
      sprite.add('F', [97802 + element.i * 100, 97802 + element.i * 100 + 300], [1, 0]);
      sprite.add('R', 86282, element.angle + Math.PI / 2);
      sprite.add('S', 86282, 0.6);
    });

    layout.circle(SCREENCENTER, 300, 20, element => {
      const sprite = layout.storyboard.createAnimation('sb/a/c.png', 59, 30, {x: element.position.x, y: element.position.y});
      sprite.add('F', [86282 + element.i * 100, 86282 + element.i * 100 + 300], [0, 0.3]);
      sprite.add('F', [97802 + element.i * 100, 97802 + element.i * 100 + 300], [0.3, 0]);
      sprite.add('R', 86282, element.angle + Math.PI / 2);
      sprite.add('S', 86282, 1);
    });

    const crab = layout.storyboard.createAnimation('sb/a/c.png', 59, 30);
    crab.add('F', [86282, 86282 + 1000], [0, 1]);
    crab.add('F', [97802, 97802 + 1000], [1, 0]);

  }

}