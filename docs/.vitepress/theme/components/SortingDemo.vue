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
          <label>Global Select Sort:</label>
          <select id="sortSelect">
            <option value="Default">Default</option>
            <option value="asc">A→Z</option>
            <option value="desc">Z→A</option>
          </select>
          <ul sortby="sortSelect">
            <li>Apple</li>
            <li>Cherry</li>
            <li>Banana</li>
          </ul>
        </section>

        <section>
          <label>Table Column Sort:</label>
          <table>
            <thead>
              <tr>
                <th class="asc">Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody sortby="">
              <tr>
                <td>Apple</td>
                <td>Fruit</td>
              </tr>
              <tr>
                <td>Carrot</td>
                <td>Vegetable</td>
              </tr>
              <tr>
                <td>Banana</td>
                <td>Fruit</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </div>
</template>
