<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let tabItems;
  export let activeTab;

  let dispatch = createEventDispatcher();

  const handleTabChange = (tab: String) => {
    dispatch("tab-change", tab);
  };
</script>

<div class="tabs">
  <ul>
    {#each tabItems as item (item)}
      <li on:click={() => handleTabChange(item)}>
        <div class:active={item === activeTab}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }

  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
</style>
