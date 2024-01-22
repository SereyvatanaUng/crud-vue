<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/cats">Cats</router-link> |
    <router-link to="/dogs">Dogs</router-link> |
  </nav>
  <div class="container text-center mt-3">
    <div class="row">
      <div col sm="6" offset="3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
