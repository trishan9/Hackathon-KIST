<script lang="ts">
  import { pollsStore } from "../stores";
</script>

<div class="poll-list">
  {#each $pollsStore as poll (poll.id)}
    <div>{poll.question}</div>
  {:else}
    <p>No any polls to show...</p>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
