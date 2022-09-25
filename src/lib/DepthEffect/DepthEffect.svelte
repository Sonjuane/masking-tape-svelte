<script>
// @ts-ignore
// @ts-nocheck

import mainImage from "./assets/pixel-test-image.jpg";
import depthMainImage from "./assets/pixel-test-image_depth_bw4.jpg";
console.log("mainImage", mainImage);

import * as PIXI from "pixi.js";

// aspectRatio = width / height
// widthT = heightT * aspectRatio
// heightT = widthT / aspectRatio

// let el = document.body
// let width = el.clientWidth
// let height = 500

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
});
// const app = new PIXI.Application({ width, height });
console.log("app", app);

const img = new PIXI.Sprite.from(mainImage);
console.log("img", img);

const depthMap = new PIXI.Sprite.from(depthMainImage);
const displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);

const depthImage = function () {
  // const app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
  document.body.appendChild(app.view);

  // const img = new PIXI.Sprite.from("./assets/pixel-test-image.jpg");
  // img.width = width;
  // img.height = height;
  img.width = window.innerWidth;
  img.height = window.innerHeight;
  app.stage.addChild(img);

  app.stage.addChild(depthMap);
  app.stage.filters = [displacementFilter];

  window.onmousemove = function (e) {
    displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 20;
    displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 20;
    // displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 20;
    // displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 20;
  };
};

depthImage();

window.addEventListener("resize", function () {
  location.reload();
});
// @ts-ignore
window.appPixi = app;
let doc;
function test() {
  //console.log(myFather);
}
</script>

<div bind:this="{doc}">
  <h1>Wolfgang</h1>
  <button on:click="{test}">test</button>
</div>
