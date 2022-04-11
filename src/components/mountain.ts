import Component from "osbx/lib/src/component";
import { Layers } from "osbx/lib/src/sprite";
import Background from "../plugins/background";
import Gifs from "../plugins/gifs";
import Text from "../plugins/text";
import Transition from "../plugins/transition";
import { Color, SCREENBOT, SCREENTOP } from "../utils";

export default class Mountain extends Component {
  
  background() {
    const background = this.getPlugin(Background);
    const mountains = background.createSprite('sb/m.jpg');
    mountains.fade([69002, 69302], [0, 1]);
    mountains.fade([69302, 84293], [1, 1]);
    mountains.scale(69002, 480.0 / 1000);
    mountains.moveX([69002, 84293], [340, 300]);

    const scream_1 = background.createSprite('sb/s1.png');
    scream_1.fade([69002, 77162], [0, 0.6]);
    scream_1.fade([77162, 84362], [0.6, 0]);
    scream_1.rotate([69302, 84362], [-0.1, 0.1]);
    scream_1.scale(69002, 1.5);
    scream_1.move([69302, 84362], [501, 150, 480, 150]);

    const mountain_front = background.createSprite('sb/mf.png', Layers.Foreground);
    mountain_front.fade([69002, 69302], [0, 1]);
    mountain_front.fade([69302, 84289], [1, 1]);
    mountain_front.scale(69002, 480.0 / 1000);
    mountain_front.moveX([69002, 84293], [525, 485]);
    mountain_front.moveY(69002, 245);

  }

  foreground() {
    const transtion = this.getPlugin(Transition);
    const background = this.getPlugin(Background);
    transtion.bars(83882, Color.white);
    background.plainColor(84293, 86282, Color.white);
    transtion.static_crab();
  }

}