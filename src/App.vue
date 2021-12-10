<template>
  <div id="app" class="container">
    <div id="nav" v-if="usuario" class="row text-center">
      <router-link to="/">Home</router-link> | 
      <router-link to="/marca">Marca</router-link> | 
      <router-link to="/produto">Produto</router-link> | 
      <router-link to="/usuario" v-if="usuario.autorizacao == 'admin'">Usuario</router-link> <span v-if="usuario.autorizacao == 'admin'">| </span>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    computed:{...mapState(['usuario'])},
    created () {
      if (!this.usuario) {
        this.$router.push('/login')
      }
    }
  }


</script>
