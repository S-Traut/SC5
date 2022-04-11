import Component from "osbx/lib/src/component";
import Background from "../plugins/background";
import Text from "../plugins/text";
import { Color } from "../utils";

export default class MovieMaker extends Component {
  
  background() {
    const background = this.getPlugin(Background);
    background.plainColor(26377, 33206, Color.blue);
  }

  foreground() {
    const text = this.getPlugin(Text);
    text.loadFont('assets/fonts/font.ttf', 'arial');
    text.movieMaker("Storybard created by PoNo", 26377, 32718);

    const background = this.getPlugin(Background);
    background.colorFade(26377, 1000, Color.black);
  }

}