<template>
  <div>
    <div class="main">
      <div class="header">
        <h2>CHAIN SMOKE</h2>
          <p>for everything blockchain</p>
        </div>
      <div class="buttons">
        <router-link tag="a" to="/personal">
          <div class="butleft">
            <h3>Personal</h3>
          </div>
        </router-link>
        <router-link tag="a" to="/business">
          <div class="butright">
            <h3>Business</h3>
          </div>
        </router-link>
        </div>  
      </div>
      <div class="second">
        <div class="blockchain">
          <div class="headb">
            <h4>BlockChain</h4>
            <p>The blockchain is a ledger ditributed among a vast network of computers that allows members to execute transactions with each other without the need for an intermediary.</p>
          </div>
          
          <div class="emblems">
            
          </div>  
          </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    }
}
</script>

<style scoped>
</style>
