import * as pixi from "pixi.js";
import React, { Component, PureComponent } from "react";
import { Sprite, PixiComponent } from "@inlet/react-pixi";

interface iMySpriteProps {
  texture: pixi.Texture
}
export const MySprite = (props: iMySpriteProps) => (
  <Sprite texture={props.texture} />
)
// export const MySprite = PixiComponent<iMySpriteProps, pixi.Sprite>('MySprite', {
//   create: () => new pixi.Sprite(),
//   applyProps: (sprite, oldProps, newProps) => {
//     sprite.texture = newProps.texture;
//   }
// })

// interface SpriteJsx extends pixi.Sprite{
//   applyProps: any;
//   key: number;
//   props: iMySpriteProps;
//   type: 'Sprite';
// }
// export const MySprite = (root: any, props: iMySpriteProps) => {
//   const sprite = new pixi.Sprite(props.texture) as any as SpriteJsx;
//   sprite.key = 0;
//   sprite.props = props;
//   sprite.type = 'Sprite';
//   sprite.applyProps = (instance: pixi.Sprite, oldProps: iMySpriteProps, newProps: iMySpriteProps) => {
//     instance.texture = newProps.texture;
//   }
//   return sprite;
// }
