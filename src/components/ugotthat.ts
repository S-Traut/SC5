import Component from "osbx/lib/src/component";
import Background from "../plugins/background";
import Gifs from "../plugins/gifs";
import Text from "../plugins/text";
import { Color, SCREENBOT, SCREENTOP } from "../utils";

export default class UGotThat extends Component {
  
  background() {
    const gifs = this.getPlugin(Gifs);
    const ricardo_intro_left = gifs.create('sb/a/r.jpg', 38, 60);
    ricardo_intro_left.setTimes(49437, 50283, true, 5);
    ricardo_intro_left.flipX(49437, 2);
    ricardo_intro_left.setPosition(49437, { x: 0, y: 240 });
    ricardo_intro_left.setTimes(51614, 65162, true, 0, 0.3);

    const ricardo_intro_right = gifs.create('sb/a/r.jpg', 38, 60);
    ricardo_intro_right.setTimes(49920, 50767 , true, 5);
    ricardo_intro_right.setScale(49920, 2);
    ricardo_intro_right.setPosition(49920, { x: 630, y: 240 });
    ricardo_intro_right.setTimes(51614, 65162, true, 0, 0.3);

    const ricardo_intro_centre = gifs.create('sb/a/rt.jpg', 34, 60);
    ricardo_intro_centre.setTimes(50525, 51614 , true);
    ricardo_intro_centre.setScale(50525, 3);
    ricardo_intro_centre.setPosition(50525, { x: 320, y: 350 });

    const sotarks = gifs.create('sb/a/s.jpg', 24, 30);
    sotarks.setTimes(51614, 65162, true);
    sotarks.move(51614, 65162, SCREENTOP, SCREENBOT);
    sotarks.rotate(51614, 65162, 0, Math.PI * 8);
    sotarks.setScale(51614, 2);
  }
}