import DefaultTheme from 'vitepress/theme'
import FeatureBox from './components/FeatureBox.vue'
import MegaDemo from './components/MegaDemo.vue'
import '../styles/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('FeatureBox', FeatureBox)
    app.component('MegaDemo', MegaDemo)
  }
}
