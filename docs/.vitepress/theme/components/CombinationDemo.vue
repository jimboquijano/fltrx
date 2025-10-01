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
      <fieldset>
        <legend>Async Data</legend>

        <div class="row">
          <section>
            <ul
              filter="asyncFilter"
              data-src="https://jimboquijano.github.io/fltrx/fruits.json"
              data-template="<li group='{{group}}'><button onclick='alert(&quot;{{name}} clicked!&quot;)'>{{name}}</button></li>"
              data-loader="loaderEl"
              groupby="asyncGroup"
              sortby="asyncSort"
              paginate="asyncPagination"
              page-size="4"
              filter-highlight="true"
              filter-empty="emptyEl"
            ></ul>

            <div id="loaderEl">Loading...</div>
            <div id="emptyEl">No matching results.</div>
          </section>

          <section>
            <input type="text" id="asyncFilter" placeholder="Type to filter" />
            <select id="asyncGroup" multiple></select>

            <select id="asyncSort">
              <option value="Default">Default</option>
              <option value="asc">A→Z</option>
              <option value="desc">Z→A</option>
            </select>
          </section>
        </div>

        <section>
          <div id="asyncPagination"></div>
        </section>
      </fieldset>
    </div>
  </div>
</template>
