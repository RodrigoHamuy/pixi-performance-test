import { Sprite } from "@inlet/react-pixi";
import * as pixi from "pixi.js";
import React, { Component } from "react";

interface iRotatingSpriteProps {
  texture: pixi.Texture;
  app?: pixi.Application;
}
interface iRotatingSpriteState {
  sprite?: pixi.Sprite;
  x: number,
  y: number,
}
export class RotatingSprite extends Component<iRotatingSpriteProps, iRotatingSpriteState> {

  state: iRotatingSpriteState = {
    x: Math.random() * 800,
    y: Math.random() * 600,
  };

  // ref = (ref: any) => {
  //   if (!ref) return;
  //   const sprite = ref as PIXI.Sprite;
  //   this.setState({ sprite });
  // }

  tick = (delta: number) => {
    if (!this.state.sprite) return;
    const sprite = this.state.sprite;
    sprite.rotation += .1 * delta;
  }

  // componentDidMount(){
  //   this.props.app.ticker.add(this.tick);
  // }

  render() {
    return (
      <Sprite
        // ref={this.ref}
        texture={this.props.texture}
        x={this.state.x}
        y={this.state.y}
        anchor={.5}
      />
    )
  }
}