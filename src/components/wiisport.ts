import { Easing } from "dotosb";
import Component from "osbx/lib/src/component";
import { Layers, Origins } from "osbx/lib/src/sprite";
import Background from "../plugins/background";
import Gifs from "../plugins/gifs";
import Layout from "../plugins/layout";
import MiiController from "../plugins/miiController";
import Text from "../plugins/text";
import Transition from "../plugins/transition";
import { Color, SCREENCENTER } from "../utils";

export default class WiiSport extends Component {
  
  background() {
    const background = this.getPlugin(Background);
    background.plainColor(5262, 26294, Color.white);


    const layout = this.getPlugin(Layout);
    layout.flex(600, 5, {x: 320, y: 350}, flex => {
      const sprite = layout.createSprite(`sb/wii${flex.i}.png`, Layers.Background, Origins.Centre, flex.position);
      const start_time = 10477 + flex.i * 500;
      const end_time = 22443 + flex.i * 500;
   
      sprite.fade([start_time, start_time + 1000], [0, 1]);
      sprite.fade([end_time, end_time + 1000], [1, 0]);
      sprite.scale(start_time, 0.5); 
    });

    const miiController = this.getPlugin(MiiController);
    const mii = miiController.create('sb/mii.png', 10477, -130);
    mii.moveTo(320, 4);
    mii.moveTo(250, 2);
    mii.moveTo(400, 2);
    mii.moveTo(200, 4); 
    mii.moveTo(850, 3); 
    mii.setScale(0.3);
    mii.generate();
  }

  foreground() {
    const transition = this.getPlugin(Transition);
    transition.bars(4865, Color.white); 
    transition.bars(25885, Color.black); 

    const gifs = this.getPlugin(Gifs);
    const introduction = gifs.create('sb/a/b.jpg', 50, 100);
    introduction.setTimes(5990, 10477, true);
    introduction.setScale(5990, 1.5);
    introduction.setPosition(5990, {x: 320, y: 370});

    const text = this.getPlugin(Text);
    const title = text.generateTitleImage('sb/ws.png', Layers.Background);
    title.fade([4990, 26294], [1, 1]);
    title.vScale([5490, 5790], [0.5, 0, 0.5, 0.5], Easing.ExpoOut);

    
  }

}