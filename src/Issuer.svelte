<script>
  import Form from './Form.svelte';
  import Thanks from './Thanks.svelte';

  export let endpoint;
  export let owner;
  export let repo;
  export let heading = 'Tell us about a problem';

  const url = `${endpoint}?org=${owner}&repo=${repo}`;

  let updater = undefined;
  let hide = true;

  function handler(payload) {
    const { title } = payload;
    if (!title) {
      const error = {
        message: 'Please provide a title',
        fields: 'title',
      }
      updater = Promise.reject(error);
      return;
    }
    updater = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    });
  }
  function toggleForm() {
    hide = !hide;
  }
</script>

<div class='issuer'>
  <h1 on:click={ toggleForm }>{ heading }</h1>
  <div class:hide class='form'>
    {#if !updater}
      <Form submit={ handler } />
    {:else}
      {#await updater}
        <p>Sumitting your feedback. Please wait!</p>
      {:then} 
        <Thanks reset={ () => updater = undefined}/>
      {:catch error}
        <Form { error } submit={ handler }/>
      {/await}
    {/if}
  </div>
</div>

<style>
  :global(:root) {
    --issuer-header-fg: white;
    --issuer-header-bg: black;
    --issuer-bg: white;
    --issuer-font-size: 0.8rem;
    --issuer-error-colour: red;
  }
  .issuer {
    background: var(--issuer-bg);
  }
  /* Mini reset */
  :global(.issuer *) {
    margin: 0;
    font-size: var(--issuer-font-size);
    font-weight: normal;
    font-family: inherit;
  }
  h1 {
    padding: 0.5em;
    width: 100%;
    color: var(--issuer-header-fg);
    background-color: var(--issuer-header-bg);
    cursor: pointer;
  }
  .form {
    padding: 0.5em;
  }
  .hide {
    display: none;
  }
</style>                            