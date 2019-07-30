<template>
  <v-app>
    <v-app-bar dark app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Cantón </span>
        <span class="font-weight-light">Testing Example</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer absolute>
      <v-spacer></v-spacer>
      <div>Todos los derechos registrados &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import DataTemplate from './components/data-template/DataTemplate.vue'

export default {
  name: 'App',
  components: {
    DataTemplate
  },
  data: () => ({
    //
  })
}
</script>
