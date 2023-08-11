<template>
  <div
    class="song-list flex flex-col h-60 w-48 rounded-lg overflow-hidden bg-canvas-index0 bg-cover"
  >
    <img class="h-48 bg-fg-empty" :src="songListImg" />
    <div class="song-list-info flex flex-col p-4">
      <p class="player-button"></p>
      <p class="text-sm leading-6 text-fg-red">{{ TopText }}</p>
      <p class="text-xl leading-8 text-fg">{{ ListTitle }}</p>
      <p class="text-sm leading-6 text-fg-subtle">{{ Description }}</p>
    </div>
  </div>
</template>

<script setup>
import songListImg from "@/assets/images/5fbd48fb4ace26dba7e63a06b9889e02.png"

import { ref } from "vue"
// const songListImg = ref(null)
const TopText = ref("TOP LABEL")
const ListTitle = ref("Title Title")
const Description = ref("Description Description")
</script>

<style lang="scss">
.song-list {
  @apply relative cursor-pointer;
  transition: box-shadow .1s;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 0px 8px 28px 0px rgba(0, 0, 0, 0.4);
  }

  .song-list-info {
    @apply absolute bottom-0 left-0 w-full z-10;
    background-color: rgba(44, 44, 44, 0.4);
    backdrop-filter: blur(36px);
    .player-button {
      @apply absolute top-0 right-2 content-none z-20 h-10 w-10 -translate-y-1/2;
      background: url("@/assets/images/icon/player-default.svg") no-repeat;
      background-size: contain;
    }
  }
}
</style>
