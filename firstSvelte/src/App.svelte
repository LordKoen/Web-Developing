<script>
  function handleClick(value) {
    console.log(value);
  }

  const object = {
    name: "pokemon",
    value: 21,
    id: 12
  };
</script>

<main>
  <h1 on:click={() => handleClick(object)} name="pokemon" value="platinum">
    Click me
  </h1>
</main>

<style>
  main {
    text-align: center;
  }

  main {
    color: blue;
  }
</style>
