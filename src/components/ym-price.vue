<template>
  <div id="tables">
    <table v-for="(itemdatas, itemname) in items" :key=itemname>
      <caption>{{itemname}}</caption>
      <colgroup>
        <col span="3" class="darkcol">
        <col span="2" :class="['darkcol', 'lightcol'][i%2]" v-for="i in getnPriceCols(itemdatas)" :key="'colgroup'+i">
      </colgroup>
      <tr>
        <th>成本</th>
        <th>回收</th>
        <th>实际成本</th>
        <template v-for="i in getnPriceCols(itemdatas)">
          <th :key="'thprice'+i">售价/元/个</th>
          <th :key="'thrate'+i">10w货币价值/元</th>
        </template>
      </tr>
      <template v-if="!multilinePrice">
        <tr v-for="(itemdata, i) in itemdatas" :key="'onelinedata_row'+i">
          <td>{{itemdata.cost}}</td>
          <td>{{itemdata.back}}</td>
          <td>{{itemdata.spend}}</td>
          <template v-for="(pricedata, i) in itemdata.pricedatas">
            <td :key="'price'+i">{{pricedata.price}}</td>
            <td :key="'rate'+i">{{pricedata.rate}}</td>
          </template>
        </tr>
      </template>
      <template v-for="(itemdata, i) in itemdatas" v-else>
        <tr v-for="(pricedata, j) in itemdata.pricedatas" :key="'multilinedata_row'+i+j">
          <td v-if="j==0" :rowspan="itemdata.pricedatas.length">{{itemdata.cost}}</td>
          <td v-if="j==0" :rowspan="itemdata.pricedatas.length">{{itemdata.back}}</td>
          <td v-if="j==0" :rowspan="itemdata.pricedatas.length">{{itemdata.spend}}</td>
          <td>{{pricedata.price}}</td>
          <td>{{pricedata.rate}}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import items from '../data.js'

export default {
  data: function(){ return {
    items: items,
    multilinePrice: false,
  }},
  methods: {
    getnPriceCols: function(itemdatas){
      return +this.multilinePrice || itemdatas[0].pricedatas.length
    }
  }
}
</script>

<style scoped>
#tables {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

table {
  font-family: "微软雅黑";
  margin: 20px;
  border-collapse: collapse;
}

.darkcol {
  background-color: rgb(240, 154, 50);
}
.lightcol {
  background-color: rgb(223, 180, 128);
}

table, td, th, caption {
  border: 1px solid #333;
  padding: 5px;
}
caption {
  border-bottom: none;
  background-color: rgb(228, 11, 11);
  font-weight: bold;
}

tr:hover {
  background-color: #aaa;
}

</style>