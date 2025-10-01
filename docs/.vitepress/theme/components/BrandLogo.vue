<template>
  <div style="display: flex; align-items: center; gap: 0.5rem">
    <img src="/logo-light.png" alt="Fltrx" class="only-light" style="height: 40px" />
    <img src="/logo-dark.png" alt="Fltrx" class="only-dark" style="height: 40px" />
    <span>Fltrx</span>
  </div>
</template>

<style scoped>
.only-dark {
  display: none;
}
.dark .only-dark {
  display: inline;
}
.dark .only-light {
  display: none;
}
</style>
