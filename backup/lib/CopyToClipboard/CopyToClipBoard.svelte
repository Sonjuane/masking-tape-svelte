<script>
  export let target;
  export let caption = "COPIED!";

  var copied = false;

  const copy = function () {
    /* Select the text field */
    let copyString = document.querySelector(target);
    copyString.select();
    copyString.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */

    try {
      navigator.clipboard.writeText(copyString.value).then(() => {
        copied = true;
        setTimeout(() => {
          copied = false;
        }, 2500);
      });
    } catch (error) {
      console.log("There was an issues copying to clipboard", copyString.value);
    }
  };
</script>

<!--  required to export as web-component <svelte:options tag="copy-clipboard" /> -->
<svelte-inactive:options tag="copy-clipboard" />

<div
  class="copy-to-clipboard-wrapper"
  data-caption={caption}
  class:copied={copied == true}
  on:click={copy}>
  <slot />
</div>

<style lang="scss">
  .copy-to-clipboard-wrapper {
    display: inline-block;
    position: relative;
    font-size: inherit;
    line-height: inherit;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 253, 253, 0.8);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      border-radius: 2px;
    }

    &.copied::before {
      content: "";
      opacity: 1;
    }
    &.copied::after {
      position: absolute;
      content: attr(data-caption);
      font-weight: 100%;
      color: black;
      text-align: center;
      width: 100%;
      left: 0;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
</style>
