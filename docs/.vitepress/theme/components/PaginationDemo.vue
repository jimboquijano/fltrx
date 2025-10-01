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
        <ul paginate="paginationControls" page-size="3">
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
          <li>Date</li>
          <li>Elderberry</li>
          <li>Fig</li>
          <li>Grape</li>
        </ul>

        <div id="paginationControls"></div>
      </section>
    </div>
  </div>
</template>
