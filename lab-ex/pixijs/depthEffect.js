import * as PIXI from 'pixi.js'



// aspectRatio = width / height
// widthT = heightT * aspectRatio
// heightT = widthT / aspectRatio

let el = document.querySelector('.wrapper');
let width = el.clientWidth
let height = 500


const app = new PIXI.Application({ width, height });
console.log('app', app);
const img = new PIXI.Sprite.from("./assets/pixel-test-image.jpg");
console.log('img', img);

const depthMap = new PIXI.Sprite.from("./assets/pixel-test-image_depth_bw4.jpg");
const displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);

const depthImage = function () {

    el.appendChild(app.view); // append to element
    img.width = width;
    img.height = height;
    app.stage.addChild(img);
    app.stage.addChild(depthMap);
    app.stage.filters = [displacementFilter];

    el.onmousemove = function (e) {
        // displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 20;
        // displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 20;
        displacementFilter.scale.x = (width / 2 - e.clientX) / 20;
        displacementFilter.scale.y = (height / 2 - e.clientY) / 20;
    };
}

depthImage();


window.addEventListener('resize', function () {
    location.reload();
});

window.appPixi = app;