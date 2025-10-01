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
          <label>Basic Filter:</label>
          <input type="text" id="basicFilter" placeholder="Type to filter" />
          <ul filter="basicFilter">
            <li>Apple</li>
            <li>Banana</li>
            <li>Cherry</li>
          </ul>
        </section>

        <section>
          <label>DOM/Event Preserve:</label>
          <input type="text" id="highlightFilter" placeholder="Type to filter & highlight" />
          <ul filter="highlightFilter">
            <li>Apple <button onclick="alert('Apple')">Click me!</button></li>
            <li>Banana <button onclick="alert('Banana')">Click me!</button></li>
            <li>Cherry <button onclick="alert('Cherry')">Click me!</button></li>
          </ul>
        </section>

        <section>
          <label>Filter Fuzzy:</label>
          <input type="text" id="fuzzyFilter" placeholder="e.g., 'apl' matches 'Apple'" />
          <ul filter="fuzzyFilter" filter-mode="fuzzy">
            <li>Apple</li>
            <li>Banana</li>
            <li>Cherry</li>
          </ul>
        </section>

        <section>
          <label>Filter Regex:</label>
          <input type="text" id="regexFilter" placeholder="Regex, e.g., ^A" />
          <ul filter="regexFilter" filter-mode="regex">
            <li>Apple</li>
            <li>Banana</li>
            <li>Cherry</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
