<template>
  <NormalLayout>
    <template v-slot:left> 123 </template>
    <template v-slot:right>
      <div class="right-body p-4">
        <h1 class="text-2xl leading-8">Today's playlist for you</h1>
        <div class="song-list-wrapper flex gap-2 mt-4">
          <SongList v-for="(sl, slIndex) in 5" :key="slIndex"></SongList>
        </div>
        <h1 class="text-2xl leading-8 mt-8">Top Songs</h1>
        <div class="song-single-wrapper flex gap-2 mt-4">
          <SongSingle v-for="(ss, ssIndex) in 5" :key="ssIndex"></SongSingle>
        </div>
        <h1 class="text-2xl leading-8 mt-8">Top Songs</h1>
        <div class="song-single-wrapper flex gap-2 mt-4">
          <SongSingle v-for="(ss, ssIndex) in 5" :key="ssIndex"></SongSingle>
        </div>
      </div>
    </template>
    <template v-slot:player><PlayerBar /></template>
  </NormalLayout>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core"
import NormalLayout from "@/layout/NormalLayout.vue"
import SongList from "@/components/SongList/index.vue"
import SongSingle from "@/components/SongSingle/index.vue"
import PlayerBar from "@/components/PlayerBar/index.vue"

const isDark = useDark({
  valueDark: "dark",
  valueLight: "light",
})
const toggleDark = useToggle(isDark)
const changeDark = () => {
  toggleDark()
}
</script>

<style lang="scss">
.index-page {
}
</style>
