import * as dat from 'dat.gui';
import React from 'react';
import ReactDOM from 'react-dom';
import { PixiTest } from './pixi/PixiTest';
import { ReactPixiTest } from './inlet-react-pixi/ReactPixiTest';
import * as serviceWorker from './serviceWorker';
import { ReactPixiFiber } from './react-pixi-fiber/ReactPixiFiberTest';

runReactPixiFiberTest();
// runReactTest();
// runPixiTest();

function runReactPixiFiberTest() {
  ReactDOM.render(<ReactPixiFiber />, document.getElementById('root'));
}
function runReactTest(){
  ReactDOM.render(<ReactPixiTest />, document.getElementById('root'));
}

function runPixiTest() {

  const state = { sprites: 10 };
  const gui = new dat.GUI();

  const pixiTest = new PixiTest();

  pixiTest.totalSprites(state.sprites);

  gui.add(state, 'sprites', 15).onChange(function (val: number) {
    pixiTest.totalSprites(val);
  });

}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
