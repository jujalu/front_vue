<template>
  <div>
    <form @submit.prevent="cadastrar">
      <h2>Produto</h2>
      <div class="form-group">
        <label for="produto">Produto</label>
        <input type="text" id="produto"
            class="form-control" required autofocus
            v-model="produto.nome">
      </div>
      <div class="form-group">
        <label for="preco">Preço</label>
        <input type="text" id="preco"
            class="form-control" required autofocus
            v-model="produto.preco">
      </div>
      <div class="form-group">
        <label for="texto">Marca</label>
        <select v-model="produto.marca.id" class="form-control" id="texto" aria-label="Default select example">
            <option selected disabled></option>
            <option v-for="marca in marcas" :value="marca.id" :key="marca.id">{{marca.nome}}</option>
        </select>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Salvar</button>
    </form>
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Marca</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pro in produtos" :key="pro.id">
          <td>{{ pro.id }}</td>
          <td>{{ pro.nome }}</td>
          <td>{{ pro.preco }}</td>
          <td>{{ pro.marca.nome }}</td>
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
      axios.post('/produto',
         this.produto)
        .then(res => {
          console.log(res);
          this.produto=
            {
            nome: null,
            marca: {
                id: null
            },
            preco: null
            }
          this.atualizar();
        })
        .catch(error => console.log(error))
    },
    atualizar () {
        axios.get('/marca', 
          { headers: { Accept: 'application/json' } })
        .then(res => {
          console.log(res)
          this.marcas = res.data
        })
        .catch(error => console.log(error))
      axios.get('/produto', 
          { headers: { Accept: 'application/json' } })
        .then(res => {
          console.log(res)
          this.produtos = res.data
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    this.atualizar()
  }
}
</script>
