<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { pollsStore } from "../stores";
  import PollDetails from "./PollDetails.svelte";
  import { flip } from "svelte/animate";
</script>

<div class="poll-list">
  {#each $pollsStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
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
