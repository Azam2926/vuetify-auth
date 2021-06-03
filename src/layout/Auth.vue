<template>
  <v-app>
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
          {{ new Date().getFullYear() }} — <strong>iazam</strong>
          <v-btn class="float-right" fab small @click="toggleTheme">
            <v-icon>mdi-invert-colors</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'Auth',
  data: () => ({
    theme: ''
  }),
  methods: {
    toggleTheme: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      if (this.$vuetify.theme.dark)
        this.changeTheme('dark')
      else
        this.changeTheme('light')
    },

    /**
     * @param {string} tema for theme param
     */
    changeTheme (tema) {
      this.theme = tema
      localStorage.setItem('theme', tema)
    },
  },

  created () {
    if (localStorage.getItem('theme'))
      this.theme = localStorage.getItem('theme')
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      this.changeTheme('dark')
    else
      this.changeTheme('light')

    this.$vuetify.theme.dark = this.theme === 'dark'

    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
      if (e.matches)
        this.changeTheme('dark')
      else
        this.changeTheme('light')
      this.$vuetify.theme.dark = this.theme === 'dark'

      console.log(`changed to ${e.matches ? 'dark' : 'light'} mode`)
    })
  },
}


</script>

<style scoped>

</style>
