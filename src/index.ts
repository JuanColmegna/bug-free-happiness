import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Assets.add("Clampy", "./clampy.png");
Assets.add("myDino", "./dino.png");

Assets.load(["Clampy", "myDino"]).then(()=>{

	const myDino: Sprite = Sprite.from("myDino");
	console.log ("Hola mundo!", myDino.width, myDino.height);

	app.stage.addChild(myDino);

});
