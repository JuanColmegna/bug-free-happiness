import { Container } from "pixi.js";
import { DinoHat } from "./DinoHat";

export class Scene extends Container {
    constructor(){
        super();
        const dinoWithHat: DinoHat = new DinoHat();

        dinoWithHat.scale.set(0.5);
        dinoWithHat.position.set(100,100);
    
        this.addChild(dinoWithHat);
    }
}