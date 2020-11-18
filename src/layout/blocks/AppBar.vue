<template>
  <v-app-bar app>
    <div class="d-flex align-center">
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          v-bind:src="'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-'+ theme +'.png'"
          transition="scale-transition"
          width="40"
      />
      <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          v-bind:src="'https://cdn.vuetifyjs.com/images/logos/vuetify-name-'+ theme +'.png'"
          width="100"
      />
    </div>
    <v-spacer></v-spacer>
    <v-btn class="mx-3" color="success" text to="/">
      Home
    </v-btn>
    <v-btn color="success" text to="/about">
      About
    </v-btn>
    <v-btn class="ml-5" fab small @click="toggleTheme">
      <v-icon>mdi-invert-colors</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    theme: '',
    selectedItem: 1,
    items: [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
    ],
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
