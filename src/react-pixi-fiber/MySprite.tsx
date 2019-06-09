import React, { Component } from "react";
import * as pixi from "pixi.js";
import { Sprite, CustomPIXIComponent } from "react-pixi-fiber";

interface iMySpriteProps {
  texture: pixi.Texture
}
// export class MySprite extends Component<iMySpriteProps>{
//   render() {
//     return (
//       <Sprite
//         texture={this.props.texture}
//       />
//     )
//   }
// }

export const MySprite = CustomPIXIComponent({
  customDisplayObject: (props: iMySpriteProps) => new pixi.Sprite(props.texture)
}, 'MySprite');