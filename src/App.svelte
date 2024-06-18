<script lang="ts">
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import PollForm from "./lib/PollForm.svelte";
  import PollList from "./lib/PollList.svelte";
  import Tabs from "./lib/Tabs.svelte";

  let tabItems = ["Current Polls", "Add New Poll"];
  let activeTab = "Current Polls";

  $: activeTabComponent = activeTab === "Current Polls" ? PollList : PollForm;

  const onTabChange = (e: CustomEvent<any>) => {
    activeTab = e.detail;
  };
</script>

<Header />

<main>
  <Tabs on:tab-change={onTabChange} {tabItems} {activeTab} />
  <svelte:component this={activeTabComponent} />
</main>

<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
