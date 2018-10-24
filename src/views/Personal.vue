<template>
    <div>
        <div class="main">
            <div class="header">
                <h2>CHAIN SMOKE</h2>
                <p>How to use</p>
            </div>
            <div class="header3">
                <div class="buttonsPersonal">
                    <div class="butleftPersonal">
                     <h3>Personal</h3>
                    </div>
                </div>
            </div>
        </div>        
    <div class="header2">
    
    <Block v-for="block in blockchain"
        :key="block.index"                 
        v-bind="block">
    </Block>
    

    <AddCard clickEvent="createBlockchain"/>
         
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
import AddCard from "@/components/Add/AddCard.vue";
import Block from "@/components/Block/Block.vue";

export default {
    data: function() {
        return {
            blockchain: this.$block.getBlockchain()
        }
    },
    components: {
        AddCard,
        Block
    },
    computed: {
        ...mapState({
        nickname: state => state.user.nickname,
        })
    }
}
</script>

<style scoped>
</style>