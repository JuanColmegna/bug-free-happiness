import { Application, Assets, Container, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

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

Assets.add("myDino", "./dino.png");
Assets.add("Hat", "./dinoHat.png");

// Lectura de assets

Assets.load(["myDino", "Hat"]).then(()=>{
	
	const myDino: Sprite = Sprite.from("myDino");

	const hat: Sprite = Sprite.from("Hat");
	hat.position.set(120,-165);

	const dinoWithHat: Container = new Container();
	dinoWithHat.addChild(myDino);
	dinoWithHat.addChild(hat);
	
	dinoWithHat.scale.set(0.5);
	dinoWithHat.position.set(100,100);
	
	console.log(hat.toGlobal(new Point()));
	console.log(hat.parent.toGlobal(hat.position));

	const aux = hat.parent.toLocal(new Point(640,360));
	dinoWithHat.position.x = aux.x;
	dinoWithHat.position.x = aux.y;

	app.stage.addChild(dinoWithHat);
});
