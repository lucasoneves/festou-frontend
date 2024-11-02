export default defineEventHandler(async (event) => {

  // Query params

  //const { name } = getQuery(event)

  // Post data

  //const { age } = await readBody(event);

  // Api call with private key

  const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_MOOfmSM6C8ZV0xiXxbsmcFefFG5jO0yVyYy02Tn0&currencies=BRL`)

  return data;

})