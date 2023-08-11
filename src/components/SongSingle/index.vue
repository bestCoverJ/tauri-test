<template>
  <div class="song-single w-48">
    <img
      class="w-48 h-48 bg-fg-empty rounded overflow-hidden"
      :src="songListImg"
    />
    <p class="text-fg mt-1 leading-8">{{ songName }}</p>
    <p class="text-fg-065 truncate leading-8">{{ songAuthor }}</p>
    <p class="text-sm text-fg-subtle">{{ songType }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue"
import songListImg from "@/assets/images/5f44ef152dd0161380ee59f347087fa1.jpg"

const songName = ref("My Mix 4")
const songAuthor = ref("Stephanie Beatriz, Kristen Bell, JD McCrary and more")
const songType = ref("LABEL")
</script>
<style lang="scss">
.song-single {
  @apply cursor-pointer;
  img {
    transition: box-shadow .1s;
  }
  &:hover {
    img {
      box-shadow: 0px 8px 28px 0px rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
