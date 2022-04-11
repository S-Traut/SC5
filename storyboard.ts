import osbx from "osbx/lib/src/app";
import Component from "osbx/lib/src/component";
import Crab from "./src/components/crab";
import Introduction from "./src/components/introduction";
import Mountain from "./src/components/mountain";
import MovieMaker from "./src/components/moviemaker";
import UGotThat from "./src/components/ugotthat";
import WhatIsLove from "./src/components/whatislove";
import WiiSport from "./src/components/wiisport";
import Background from "./src/plugins/background";

class Main extends Component {

  init() {
    this.addComponent(Introduction);
    this.addComponent(WiiSport);
    this.addComponent(MovieMaker);
    this.addComponent(WhatIsLove);
    this.addComponent(UGotThat);
    this.addComponent(Mountain);
    this.addComponent(Crab);
  }

  background() {
    const background = this.getPlugin(Background);
    background.removeBaseBackground();
  }

  foreground() {
    const background = this.getPlugin(Background);
    background.setVignette(356, 445411);
  }
}

osbx.create(Main);