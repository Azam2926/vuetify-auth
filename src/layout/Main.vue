<template>
  <v-app>
    <AppBar/>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer app padless>
      <v-card
          class="flex"
          flat
          tile
      >
        <v-card-text class="py-2 text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from '@/layout/blocks/AppBar'

export default {
  name: 'Main',
  components: { AppBar },
}
</script>

<style scoped>

</style>
