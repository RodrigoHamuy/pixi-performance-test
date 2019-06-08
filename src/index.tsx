import * as serviceWorker from './serviceWorker';
import { PixiTest } from './PixiTest';
import * as dat from 'dat.gui';


const state = { sprites: 10 };

const test = new PixiTest();

test.totalSprites(state.sprites);

const gui = new dat.GUI();
gui.add(state, 'sprites', 15).onChange(function(val: number){
  test.totalSprites(val);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
