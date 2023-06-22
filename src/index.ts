import { Application, Assets} from 'pixi.js'
import {assets} from "./assets"
import { Scene } from './Scene';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

(globalThis as any).__PIXI_APP__ = app;

// Resized canvas

window.addEventListener('resize', ()=> {
console.log('Resized');
const scaleX = window.innerWidth / app.screen.width;
const scaleY = window.innerHeight / app.screen.height;
const scale = Math.min(scaleX, scaleY);

const gameWidth = Math.round(app.screen.width * scale);
const gameHeight = Math.round(app.screen.height * scale);
const marginHorizontal = Math.floor((window.innerWidth - gameWidth)/2);
const marginVertical = Math.floor((window.innerHeight - gameHeight)/2);

const canvas = app.view as HTMLCanvasElement;

canvas.style.width = gameWidth + 'px';
canvas.style.height = gameHeight + 'px';
canvas.style.marginLeft = marginHorizontal + 'px';
canvas.style.marginTop = marginVertical + 'px';
})
window.dispatchEvent(new Event('resize'));

// Carga de assets

Assets.addBundle("myAssets", assets);

// Lectura de assets

Assets.loadBundle(["myAssets"]).then(()=>{
	const myScene = new Scene();
	app.stage.addChild(myScene)
});
