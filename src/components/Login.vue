<template>
  <v-card width="350" class="mt-5 mb-5 mx-auto px-5 py-5 " shaped elevation="15 ">
    <v-card-title><h1>Login</h1></v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
            label="Username"
            prepend-icon="mdi-account-circle"
        />
        <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
        >
          <v-icon @click.capture="showPassword = !showPassword" slot="append" style="cursor: pointer;">
            {{showPassword ? 'mdi-eye' : 'mdi-eye-off'}}
          </v-icon>
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="success">Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn  color="primary">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    showPassword: false,
  }),
}
</script>

<style scoped>

</style>
