<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<template>
  <div class="feature-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.feature-card {
  flex: 1 1 240px;
  padding: 24px;
  margin: 12px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  margin-bottom: 0.6em;
  font-size: 1.3em;
  font-weight: 600;
}

.feature-card p {
  color: #555;
  line-height: 1.5em;
  font-size: 0.95em;
}
</style>
