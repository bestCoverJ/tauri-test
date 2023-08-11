<template>
  <div class="normal-layout flex flex-col h-full">
    <div class="content-layout flex flex-1 overflow-auto">
      <div class="w-60">
        <slot name="left"></slot>
      </div>
      <div class="flex-1 overflow-auto">
        <slot name="right"></slot>
      </div>
      
    </div>
    <div class="player-layout h-24 flex-shrink-0">
      <slot name="player"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss"></style>
