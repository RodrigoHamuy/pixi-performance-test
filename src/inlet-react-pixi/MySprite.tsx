import * as pixi from "pixi.js";
import React, { Component, PureComponent } from "react";
import { Sprite, PixiComponent } from "@inlet/react-pixi";

interface iMySpriteProps {
  texture: pixi.Texture
}
interface iPureSprite extends pixi.Sprite{
  type: 'Sprite',
  props: iMySpriteProps,
  key: string | number | null;
}
export const MySprite = (root: any, props: iMySpriteProps) => {
  const sprite =  new pixi.Sprite(props.texture) as any as iPureSprite;

  sprite.type = 'Sprite';
  sprite.props = props;
  sprite.key = null;

  return sprite
}