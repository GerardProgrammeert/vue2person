<template>
  <b-nav small>
    <b-nav-item>
        <router-link :to="{ name: 'persons'}">
          Persons
        </router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link :to="{ name: 'register'}">
        Register
      </router-link>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: "NavMenu"
}
</script>

<style scoped>

</style>