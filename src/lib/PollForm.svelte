<script lang="ts">
  import Button from "./Button.svelte";

  let formFields = {
    question: "",
    answerA: "",
    answerB: "",
  };

  const onAddPoll = () => {
    console.log(formFields);
  };
</script>

<form on:submit|preventDefault={onAddPoll}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={formFields.question} />
  </div>

  <div class="form-field">
    <label for="ans-a">Answer A:</label>
    <input type="text" id="ans-a" bind:value={formFields.answerA} />
  </div>

  <div class="form-field">
    <label for="ans-b">Answer B:</label>
    <input type="text" id="ans-b" bind:value={formFields.answerB} />
  </div>

  <Button type="secondary">Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 18px auto;
  }

  input {
    width: 100%;
    border-radius: 6px;
    padding: 10px 8px;
    border: 1px solid #ddd;
  }

  label {
    margin: 10px auto;
    text-align: left;
  }
</style>
