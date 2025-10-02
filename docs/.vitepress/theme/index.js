import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

import FeatureBox from './components/FeatureBox.vue'
import FilterDemo from './components/FilterDemo.vue'
import HighlightDemo from './components/HighlightDemo.vue'
import GroupingDemo from './components/GroupingDemo.vue'
import SortingDemo from './components/SortingDemo.vue'
import PaginationDemo from './components/PaginationDemo.vue'
import AsyncDataDemo from './components/AsyncDataDemo.vue'
import CombinationDemo from './components/CombinationDemo.vue'
import '../styles/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register your own components
    app.component('FeatureBox', FeatureBox)
    app.component('FilterDemo', FilterDemo)
    app.component('HighlightDemo', HighlightDemo)
    app.component('GroupingDemo', GroupingDemo)
    app.component('SortingDemo', SortingDemo)
    app.component('PaginationDemo', PaginationDemo)
    app.component('AsyncDataDemo', AsyncDataDemo)
    app.component('CombinationDemo', CombinationDemo)

    // 👇 this line registers <PluginTabs>
    enhanceAppWithTabs(app)
  }
}
