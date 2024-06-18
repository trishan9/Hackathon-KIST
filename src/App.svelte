<script lang="ts">
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import PollForm from "./lib/PollForm.svelte";
  import PollList from "./lib/PollList.svelte";
  import Tabs from "./lib/Tabs.svelte";
  import { activeTabStore } from "./stores";

  let tabItems = ["Current Polls", "Add New Poll"];

  $: activeTabComponent =
    $activeTabStore === "Current Polls" ? PollList : PollForm;

  const onTabChange = (e: CustomEvent<any>) => {
    activeTabStore.set(e.detail);
  };
</script>

<Header />

<main>
  <Tabs on:tab-change={onTabChange} {tabItems} activeTab={$activeTabStore} />
  <svelte:component this={activeTabComponent} />
</main>

<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
