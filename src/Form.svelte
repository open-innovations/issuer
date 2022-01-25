<script>
  export let submit;
  export let error = undefined;

  let title;
  let description;
  const submitForm = () => submit({ title, description });
  const resetForm = () => {
    error = undefined;
    title = undefined;
    description = undefined;
  }
</script>

{#if error}
  <p class='error error-message'>
    { error.message || 'There is an error' }
  </p>
{/if}
<form>
  <div class='form-row'>
    <label for="f1">Short description of the problem</label>
    <input id="f1" name="title" type="text" bind:value={ title } class:error={ error && error.fields.includes('title')}/>
  </div>
  <div class='form-row'>
    <label for="f2">Additional details about the problem (optional)</label>
    <textarea id="f2" rows=10 name="description" bind:value={ description }/>
  </div>
  <button type="button" on:click={ submitForm }>Send us the problem</button>
  <button type="button" on:click={ resetForm }>Clear the form</button>
</form>

<style>
  label, input, textarea {
    width: 100%;
    box-sizing: border-box;
  }
  textarea {
    resize: vertical;
  }
  .error {
    border-color: var(--issuer-error-colour);
  }
  .error-message {
    color: var(--issuer-error-colour);
  }
</style>