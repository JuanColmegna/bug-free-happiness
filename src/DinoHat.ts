import { Container, Sprite } from "pixi.js";

export class DinoHat extends Container{
    constructor(){
        super();
        const myDino: Sprite = Sprite.from("myDino");
        const hat: Sprite = Sprite.from("Hat");
        
        hat.position.set(120,-165);

        this.addChild(myDino);
        this.addChild(hat);

    }
}