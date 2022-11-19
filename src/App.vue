<template>
  <div id="app" class="app-wrapper" :class="{ 'app-wrapper--dark': isDark }">
    <navbar />
    <router-view />
    <footer>
      <div>
        <h4>Reizen Dos Santos - DAW 2022</h4>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from './components/navbar/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
  computed: {
    ...mapState(['isDark']),
  },
}
</script>
