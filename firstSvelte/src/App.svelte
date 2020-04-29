<script>
  import Component from "./Component.svelte";

  let counter = 0;
  let word;

  function handleClick(event) {
    switch (event.target.name) {
      case "increment":
        counter += 1;
        break;
      case "decrement":
        counter = counter - 1;
        break;
      case "reset":
        counter = 0;
    }
  }

  $: console.log(counter);
</script>

<main>
  <h1>{counter}</h1>
  <button on:click="{handleClick}" name="increment">+</button>
  <button on:click="{handleClick}" name="decrement">-</button>
  <button on:click="{handleClick}" name="reset">reset</button>
  <input type="text" name="word" bind:value="{word}" />

  {#if word !== undefined}
    <Component>{word}</Component>
  {/if}
</main>

<style>
  main {
    text-align: center;
  }
</style>
