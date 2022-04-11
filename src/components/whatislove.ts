import Component from "osbx/lib/src/component";
import Gifs from "../plugins/gifs";
import Layout from "../plugins/layout";
import Random from "../plugins/random";

export default class WhatIsLove extends Component {
  
  background() {
    const layout = this.getPlugin(Layout);
    const random = this.getPlugin(Random);
    const gifs = this.getPlugin(Gifs);
    layout.grid(854, 480, 5, 10, {x: 320, y: 240}, flex => {
      const gif = gifs.create('sb/a/a.jpg', 88, 60);
      const delay = random.rangeInt(0, 1000);
      const new_position = {
        x: flex.row % 2 == 0 ? flex.position.x + 100 : flex.position.x - 100,
        y: flex.position.y,
      }
      gif.move(34181 + delay, 46774 + delay, flex.position, new_position);
      gif.setTimes(34181 + delay, 46774 + delay, true);
      gif.setScale(34181 + delay, 0.8);
    });

  }
 
  foreground() {
  }

}