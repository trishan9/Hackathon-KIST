<script lang="ts">
  import { tweened } from "svelte/motion";
  import { pollsStore } from "../stores";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";

  export let poll;

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((poll.votesA / totalVotes) * 100) || 0;
  $: percentB = Math.floor((poll.votesB / totalVotes) * 100) || 0;

  const tweenedA = tweened(0);
  const tweenedB = tweened(0);

  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  const handleCastVote = (option: String, pollId: number) => {
    pollsStore.update((data) => {
      let copiedPolls = [...data];
      let currentPoll = copiedPolls.find((poll) => poll.id == pollId)!;

      if (option == "a") {
        currentPoll.votesA++;
      }
      if (option == "b") {
        currentPoll.votesB++;
      }
      return copiedPolls;
    });
  };

  const handleDelete = (pollId: number) => {
    pollsStore.update((data) => {
      return data.filter((d) => d.id != pollId);
    });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>

    <p>Total Votes: {totalVotes}</p>

    <div class="answer" on:click={() => handleCastVote("a", poll.id)}>
      <div class="percent percent-a" style="width: {$tweenedA}%;"></div>

      <span>{poll.answerA} ({poll.votesA}) </span>
    </div>

    <div class="answer" on:click={() => handleCastVote("b", poll.id)}>
      <div class="percent percent-b" style="width: {$tweenedB}%;"></div>

      <span>{poll.answerB} ({poll.votesB}) </span>
    </div>

    <div class="delete">
      <Button flat={true} on:click={() => handleDelete(poll.id)}>Delete</Button>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }

  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }

  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }

  .answer:hover {
    opacity: 0.6;
  }

  span {
    display: inline-block;
    padding: 10px 20px;
  }

  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }

  .percent-a {
    border-left: 4px solid #d91b42;
    background: rgba(217, 27, 66, 0.2);
  }

  .percent-b {
    border-left: 4px solid #45c496;
    background: rgba(69, 196, 150, 0.2);
  }

  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>
