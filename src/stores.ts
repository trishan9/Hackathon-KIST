import { writable } from "svelte/store";

export const activeTabStore = writable("Current Polls");

export const pollsStore = writable([
  {
    id: 1,
    question: "JavaScript or Golang?",
    answerA: "JavaScript",
    answerB: "Golang",
    votesA: 9,
    votesB: 15,
  },
]);
