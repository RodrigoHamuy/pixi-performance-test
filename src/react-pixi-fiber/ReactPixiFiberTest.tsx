import * as pixi from "pixi.js";
import React, { Component } from "react";
import { Stage, Sprite } from "react-pixi-fiber";
import bunny from '../bunny.png';
import { MySprite } from "./MySprite";

interface iReactPixiFiberState {
  sprites: number,
  texture: pixi.Texture,

}
export class ReactPixiFiber extends Component {

  state: iReactPixiFiberState = {
    sprites: 0,
    texture: pixi.Texture.from(bunny),
  };
  render() {
    return (
      <Stage
        options={{
          backgroundColor: 0xfdb414,
        }}
        width={window.innerWidth < 800 ? window.innerWidth : 800}
        height={window.innerHeight < 600 ? window.innerHeight : 600}
      >
        <MySprite
          texture={this.state.texture}
        />
        {/* {MySprite} */}
      </Stage>
    )
  }
}