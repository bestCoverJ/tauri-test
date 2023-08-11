<template>
  <div class="player-bar flex justify-between items-center h-full p-4">
    <div class="song-info flex gap-4">
      <img class="h-16 w-16" :src="songListImg" />
      <div class="song-info-wrapper flex flex-col">
        <p class="text-fg flex items-center gap-2">
          <span>{{ songName }}</span>
          <span class="like-icon"></span>
          <span class="more-icon"></span>
        </p>
        <p class="text-fg-065">{{ songAuthor }}</p>
        <p class="text-fg-065 text-xs">{{ songOrigin }}</p>
      </div>
    </div>
    <div class="playlist-info flex items-center gap-8 mr-8">
      <span class="icon volume-icon"></span>
      <span class="icon queue-icon"></span>
      <span class="icon chromecast-icon"></span>
      <span class="icon arrow-left-icon"></span>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import songListImg from "@/assets/images/b8fa6281845ebb8463631449808a4101.png"

const songName = ref('Angels')
const songAuthor = ref('The XX')
const songOrigin = ref('PLAING FROM: Coexist')
</script>
<style lang="scss">
.player-bar {
  .song-info {
    .like-icon {
      @apply content-none h-4 w-4;
      background: url('@/assets/images/icon/like.svg') no-repeat;
    }
    .more-icon {
      @apply content-none h-4 w-4;
      background: url('@/assets/images/icon/more.svg') no-repeat;
    }
  }
  .playlist-info {
    .icon {
      @apply h-6 w-6;
    }
    .volume-icon {
      @apply content-none;
      background: url('@/assets/images/icon/volume.svg') no-repeat;
      background-size: 100%
    }
    .queue-icon {
      @apply content-none;
      background: url('@/assets/images/icon/queue.svg') no-repeat;
      background-size: 100%
    }
    .chromecast-icon {
      @apply content-none;
      background: url('@/assets/images/icon/chromecast.svg') no-repeat;
      background-size: 100%
    }
    .arrow-left-icon {
      @apply content-none;
      background: url('@/assets/images/icon/arrow-left.svg') no-repeat;
      background-size: 100%
    }
  }
}
</style>