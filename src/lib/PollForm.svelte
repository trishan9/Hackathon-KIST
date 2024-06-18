<script lang="ts">
  import Button from "./Button.svelte";

  let formFields = {
    question: "",
    answerA: "",
    answerB: "",
  };

  let formErrors = {
    question: "",
    answerA: "",
    answerB: "",
  };

  let isValid = false;

  const validateForm = () => {
    if (formFields.question.trim().length < 5) {
      isValid = false;
      formErrors.question = "Poll Question must be at least 5 characters";
    } else {
      formErrors.question = "";
    }

    if (formFields.answerA.trim().length < 1) {
      isValid = false;
      formErrors.answerA = "Answer A can't be empty";
    } else {
      formErrors.answerA = "";
    }

    if (formFields.answerB.trim().length < 1) {
      isValid = false;
      formErrors.answerB = "Answer B can't be empty";
    } else {
      formErrors.answerB = "";
    }

    return isValid;
  };

  const onAddPoll = () => {
    if (validateForm()) {
      console.log(formFields);
    }
  };
</script>

<form on:submit|preventDefault={onAddPoll}>
  <div class="form-field">
    <label for="question">Poll Question:</label>

    <input type="text" id="question" bind:value={formFields.question} />

    <div class="error">
      {formErrors.question}
    </div>
  </div>

  <div class="form-field">
    <label for="ans-a">Answer A:</label>

    <input type="text" id="ans-a" bind:value={formFields.answerA} />

    <div class="error">
      {formErrors.answerA}
    </div>
  </div>

  <div class="form-field">
    <label for="ans-b">Answer B:</label>

    <input type="text" id="ans-b" bind:value={formFields.answerB} />

    <div class="error">
      {formErrors.answerB}
    </div>
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

  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
    text-align: left;
  }
</style>
