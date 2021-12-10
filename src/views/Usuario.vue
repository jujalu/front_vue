<template>
  <div>
    <form @submit.prevent="cadastrar">
      <h2>Usuário</h2>
      <div class="form-group">
        <label for="usuario">Nome</label>
        <input type="text" id="usuario"
            class="form-control" required autofocus
            v-model="usuario.nome">
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="text" id="email"
            class="form-control" required autofocus
            v-model="usuario.email">
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" id="senha"
            class="form-control" required autofocus
            v-model="usuario.senha">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Salvar</button>
    </form>
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Autorização</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usr in usuario" :key="usr.id">
          <td>{{ usr.id }}</td>
          <td>{{ usr.nome }}</td>
          <td>{{ usr.email }}</td>
          <td>{{ usr.usuario.auth }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'produtos',
  data() {
    return {
        produto:
        {
        nome: null,
        marca: {
            id: null
        },
        preco: null
        },
      produtos: [],
      marcas:[]
    }
  },
  computed: {
    ...mapState([
      'usuario'
    ])
  },
  methods: {
    cadastrar() {
      axios.post('/login',
         this.usuario)
        .then(res => {
          console.log(res);
          this.usuario=
            {
            nome: null,
            email: null,
            senha: null
            }
          this.atualizar();
        })
        .catch(error => console.log(error))
    },
    atualizar () {
        axios.get('/login', 
          { headers: { Accept: 'application/json' } })
        .then(res => {
          console.log(res)
          this.usuario = res.data
        })
        .catch(error => console.log(error))
      axios.get('/login', 
          { headers: { Accept: 'application/json' } })
        .then(res => {
          console.log(res)
          this.usuario = res.data
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    this.atualizar()
  }
}
</script>