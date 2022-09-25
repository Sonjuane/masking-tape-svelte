<script>
import { onMount } from "svelte";
// import { beforeUpdate, afterUpdate } from "svelte";
import shuffleLetters from "shuffle-letters";
export let debug = false;
export let delay = 1000;
export let iterations = 12;
export let fps = 60;

let doc;
let elements;
let x;

onMount(() => {
  elements = doc.querySelectorAll("*");
  elements = Array.from(elements);
  if (debug) console.log("elements", elements);
  elements.forEach((item) => {
    item.style.visibility = "hidden"; // HIDE ITEMS BUT KEEP SPACING
  });
});

function init() {
  x = document.getElementById("myAudio");
  console.log("x", x);
  elements.forEach((item) => {
    if (debug) console.log("item", item);
    item.style.visibility = "visible"; // SHOW ITEMS
    shuffleLetters(item, {
      text: item.innerText, // use innerText of Element
      iterations: iterations,
      fps: fps,
      onComplete: (el) => {
        console.log(el, "Effect was completed.");
        // console.log(el);
      },
    });
  });
}

setTimeout(() => init(), delay);

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}
</script>

<span bind:this="{doc}">
  <slot>ENTER SHUFFLE TEXT</slot>
</span>
<audio id="myAudio">
  <!-- <source src="horse.ogg" type="audio/ogg" /> -->
  <source
    src="https://sveltejs.github.io/assets/music/strauss.mp3"
    type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
<button on:click="{playAudio}" type="button">Play Audio</button>
<button on:click="{pauseAudio}" type="button">Pause Audio</button>
