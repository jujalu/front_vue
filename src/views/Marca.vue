<template>
  <div>
    <form @submit.prevent="cadastrar">
      <h2>Marca</h2>
      <div class="form-group">
        <label for="marca">Marca</label>
        <input type="text" id="marca"
            class="form-control" required autofocus
            v-model="marca">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Salvar</button>
    </form>
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Marca</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mar in marcas" :key="mar.id">
          <td>{{ mar.id }}</td>
          <td>{{ mar.nome }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'marcas',
  data() {
    return {
      marca: null,
      marcas: []
    }
  },
  computed: {
    ...mapState([
      'usuario'
    ])
  },
  methods: {
    cadastrar() {
      axios.post('/marca',
          {
            nome: this.marca,
          })
        .then(res => {
          console.log(res);
          this.marca = '';
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
    }
  },
  created () {
    this.atualizar()
  }
}
</script>
