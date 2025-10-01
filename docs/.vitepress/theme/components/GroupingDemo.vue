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
      <div class="row">
        <section>
          <label>Single Select Grouping:</label>
          <select id="groupSelect"></select>
          <ul groupby="groupSelect">
            <li group="Fruit">Apple</li>
            <li group="Vegetable">Carrot</li>
            <li group="Fruit">Banana</li>
          </ul>
        </section>

        <section>
          <label>Multi-select Grouping:</label>
          <select id="multiGroupSelect" multiple></select>
          <ul groupby="multiGroupSelect">
            <li group="Fruit">Apple</li>
            <li group="Vegetable">Carrot</li>
            <li group="Fruit">Banana</li>
            <li group="Vegetable">Lettuce</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
