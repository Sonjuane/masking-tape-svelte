<script>
  let doc;

  function test() {}
</script>

<sveltetag:in-active tag="depth-effect" />

<div bind:this={doc}>
  <h1>Wolfgang</h1>
  <button on:click={test}>test</button>
</div>
