<script setup>
import { initFltrx } from '../../../../src/fltrx'
import { onMounted, nextTick } from 'vue'

onMounted(() => {
  nextTick(() => {
    initFltrx()
  })
})
</script>

<template>
  <div class="mega-demo">
    <div class="card">
      <section>
        <label>Async Filter:</label>
        <input type="text" id="asyncFilter" placeholder="Type to filter" />
        <ul
          filter="asyncFilter"
          data-src="https://jimboquijano.github.io/fltrx/fruits.json"
          data-template="<li>{{name}}</li>"
          data-loader="loaderEl"
        ></ul>

        <div id="loaderEl">Loading...</div>
      </section>
    </div>
  </div>
</template>
