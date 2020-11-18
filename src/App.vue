<template>
  <v-app>
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
      <v-btn fab small @click="toggleTheme">
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
      <Login/>
    </v-main>

    <v-footer
        padless
        app
    >
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
import HelloWorld from './components/HelloWorld'
import Login from '@/components/Login'

export default {
  name: 'App',

  components: {
    Login,
    HelloWorld,
  },

  data: () => ({
    theme: '',
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
