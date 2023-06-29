import { AnimatedSprite, Container, Texture } from "pixi.js";

export class Star extends Container{

    constructor(){
        super();
        
        const starAnimated: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("star1"),
                Texture.from("star2"),
                Texture.from("star3"),
            ], true);
        starAnimated.play();
        this.addChild(starAnimated);
    }
}