<script setup>
import { initFtlrx } from '../../../../src/fltrx'
import { onMounted, nextTick } from 'vue'

onMounted(() => {
  nextTick(() => {
    initFtlrx()
  })
})
</script>

<template>
  <div class="mega-demo">
    <!-- Filtering -->
    <div class="card">
      <fieldset>
        <legend>Filtering</legend>

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
            <label>Filter + Highlight:</label>
            <input type="text" id="highlightFilter" placeholder="Type to filter & highlight" />
            <ul filter="highlightFilter" filter-highlight="true">
              <li>Apple</li>
              <li>Banana</li>
              <li>Cherry</li>
            </ul>
          </section>

          <section>
            <label>Filter Fuzzy:</label>
            <input type="text" id="fuzzyFilter" placeholder="e.g., 'apl' matches 'Apple'" />
            <ul filter="fuzzyFilter" filter-mode="fuzzy" filter-highlight="true">
              <li>Apple</li>
              <li>Banana</li>
              <li>Cherry</li>
            </ul>
          </section>

          <section>
            <label>Filter Regex:</label>
            <input type="text" id="regexFilter" placeholder="Regex, e.g., ^A" />
            <ul filter="regexFilter" filter-mode="regex" filter-highlight="true">
              <li>Apple</li>
              <li>Banana</li>
              <li>Cherry</li>
            </ul>
          </section>
        </div>
      </fieldset>
    </div>

    <!-- Grouping -->
    <div class="card">
      <fieldset>
        <legend>Grouping</legend>

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
      </fieldset>
    </div>

    <!-- Sorting -->
    <div class="card">
      <fieldset>
        <legend>Sorting</legend>

        <div class="row">
          <section>
            <label>Global Sort:</label>
            <select id="sortSelect">
              <option value="Default">Default</option>
              <option value="A→Z">A→Z</option>
              <option value="Z→A">Z→A</option>
            </select>
            <ul sortby="sortSelect">
              <li>Apple</li>
              <li>Banana</li>
              <li>Cherry</li>
            </ul>
          </section>

          <section>
            <label>Table Column Sort:</label>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
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
      </fieldset>
    </div>

    <!-- Pagination -->
    <div class="card">
      <fieldset>
        <legend>Pagination</legend>

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
      </fieldset>
    </div>

    <!-- Async Data -->
    <div class="card">
      <fieldset>
        <legend>Async Data</legend>

        <div class="row">
          <section>
            <ul
              filter="asyncFilter"
              data-src="https://jimboquijano.github.io/fltrx/fruits.json"
              data-template="<li group='{{group}}'><button onclick='alert(&quot;{{name}} clicked!&quot;)'>{{name}}</button></li>"
              groupby="asyncGroup"
              sortby="asyncSort"
              paginate="asyncPagination"
              page-size="4"
              filter-highlight="true"
            ></ul>
          </section>

          <section>
            <input type="text" id="asyncFilter" placeholder="Type to filter" />
            <select id="asyncGroup" multiple></select>

            <select id="asyncSort">
              <option value="Default">Default</option>
              <option value="A→Z">A→Z</option>
              <option value="Z→A">Z→A</option>
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
