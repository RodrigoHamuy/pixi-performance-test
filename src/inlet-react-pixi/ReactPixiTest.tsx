import { Stage, AppConsumer } from "@inlet/react-pixi";
import dat from 'dat.gui';
import * as pixi from "pixi.js";
import React, { Component } from 'react';
import bunny from '../bunny.png';
import { RotatingSprite } from "./RotatingSprite";
import { MySprite } from "./MySprite";

interface iReactPixiTestState {
  sprites: number;
  texture: pixi.Texture;
}


export class ReactPixiTest extends Component<{}, iReactPixiTestState>{

  state: iReactPixiTestState = {
    sprites: 0,
    texture: pixi.Texture.from(bunny),
  };

  constructor(props: {}) {
    super(props);
    const state = { sprites: 10 };
    const gui = new dat.GUI();

    gui.add(state, 'sprites', 15).onChange((val: number) => {
      this.setState({ sprites: val });
    });

    this.state.sprites = state.sprites;

  }
  render() {
    return (
      <Stage
        options={{
          backgroundColor: 0xfdb414,
        }}
        width={window.innerWidth < 800 ? window.innerWidth : 800}
        height={window.innerHeight < 600 ? window.innerHeight : 600}
      >
        <MySprite texture={this.state.texture} />
        {/* {MySprite({texture: this.state.texture}) } */}
        {/* {Array(this.state.sprites).fill(true).map(() => { return MySprite({ texture: this.state.texture }) })} */}
      </Stage>
    );
  }
}