import { Container } from "pixi.js";
import { Star } from "./Star";

export class Scene extends Container {
    constructor(){
        super();

        const starAnimated: Star = new Star();

        this.addChild(starAnimated);
    }
}