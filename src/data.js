
const items = {
  '龙栖匣': {cost: [20, 30, 0.5], back: 5, price: [4, 6, 0.5]},
  '小金人': {cost: 0.6666, back: 0, price: [0.1, 0.14, 0.01]},
  '寒铁': {cost: [400, 500, 10], back: 100, price: [60, 90, 5]},
  '玄铁': {cost: [550, 650, 10], back: 100, price: [120, 170, 5]},
}

// items = {
//   name: [
//     {cost: xx, back: xx, spend: xx, pricedatas: [{price: xx, rate: xx}, ...]},
//     ...],
//   ...
// }

for (let itemname in items) {
  const item = items[itemname]
  const itemdatas = []
  if (!Array.isArray(item.cost)) {
    item.cost = [item.cost, item.cost, 1]
  }
  for (let cost=item.cost[0]; cost<=item.cost[1]; cost+=item.cost[2]){
    const spend = cost - item.back
    const pricedatas = []
    for (let price=item.price[0]; price<=item.price[1]; price+=item.price[2]) {
      pricedatas.push({price, rate: Math.floor(price*1e4/spend)/1000})
    }
    itemdatas.push({cost, back: item.back, spend, pricedatas})
  }
  items[itemname] = itemdatas
}

export default items
