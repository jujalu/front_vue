<template>
  <div>
    <h2>Vendas</h2>
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Data</th>
          <th>Quantidade</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ven in vendas" :key="ven.id">
          <td>{{ ven.id }}</td>
          <td>{{ ven.data }}</td>
          <td>{{ ven.quantidade }}</td>
          <td>{{ ven.produto.preco }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'vendas',
  computed: {
    ...mapState([
      'usuario'
    ])
  },
  methods: {
    atualizar () {
        axios.get('/venda', 
          { headers: { Accept: 'application/json' } })
        .then(res => {
          console.log(res)
          this.vendas = res.data
        })
        .catch(error => console.log(error))
      axios.get('/venda', 
          { headers: { Accept: 'application/json' } })
        .then(res => {
          console.log(res)
          this.vendas = res.data
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    this.atualizar()
  }
}
</script>
