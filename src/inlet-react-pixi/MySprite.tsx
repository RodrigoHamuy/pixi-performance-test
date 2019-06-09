import * as pixi from "pixi.js";
import React, { Component, PureComponent } from "react";
import { Sprite, PixiComponent } from "@inlet/react-pixi";

interface iMySpriteProps {
  texture: pixi.Texture
}
export const MySprite = PixiComponent<iMySpriteProps, pixi.Sprite>('MySprite', {
  create: () => new pixi.Sprite(),
  applyProps: (sprite, oldProps, newProps) => {
    sprite.texture = newProps.texture;
  }
})