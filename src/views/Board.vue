<template>
  <div>
    <table>
      <tr>
        <th>카테</th>
        <th>가격</th>
      </tr>
      <tr v-for="(item, idx) in shop" :key="idx">
        <td>{{ item.category}}</td>
        <td>{{ item.price}}</td>
      </tr>
    </table>
    {{ this.shop }}
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Board",
  data() {
    return {
      shop: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      this.shop = await axios.get('https://a1065b4c-ab09-46a3-9c79-ecd531bc9ce9.mock.pstmn.io/shop')
          .then(res => {
            this.shop = res.data
            console.log('aa', this.shop)
            console.log('res', res)
          }).catch(err => {
        console.log('error', err)
      })
    }
  }
}
</script>

<style>
table { border-collapse: collapse; width: 100%; }
td, th { border: 1px solid #ddd; text-align: center; padding: 8px; }
</style>