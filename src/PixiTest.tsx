import * as pixi from "pixi.js";
import bunny from './bunny.png';

export class PixiTest {

  app: pixi.Application;
  texture: pixi.Texture;

  constructor() {

    this.app = new pixi.Application({
      width: window.innerWidth < 800 ? window.innerWidth : 800,
      height: window.innerHeight < 600 ? window.innerHeight : 600,
    });

    document.body.appendChild(this.app.view);

    this.texture = pixi.Texture.from(bunny);

    this.app.ticker.add(this.onTick);
  }

  totalSprites(total: number){
    while (this.app.stage.children.length > 0) {
      this.app.stage.removeChildAt(0);      
    }    
    for (let i = 0; i < total; i++) {
      const sprite = new pixi.Sprite(this.texture);
      sprite.x = Math.random() * this.app.renderer.width;
      sprite.y = Math.random() * this.app.renderer.height;
      sprite.anchor.set(.5);
      this.app.stage.addChild(sprite);      
    }
  }

  onTick = (delta: number) => {
    // this.stats.begin();
    for (let i = 0; i < this.app.stage.children.length; i++) {
      this.app.stage.children[i].rotation += .1 * delta;      
    }
  }
}
