<template>
    <div>
        <div class="main">
            <div class="header">
                <h2>BlockChain Demo</h2>
                <p>How to use</p>
            </div>
            <div class="header3">
                <div class="buttonsPersonal">
                    <div class="butleftPersonal">
                     <h3>Business</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="header2">
            <Block v-for="block in blockchain"
                :key="block.index" 
                v-bind="block">
            </Block>
            <AddCard clickEvent="RequestAddBlock"/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions, mapMutations } from "vuex";
import AddCard from "@/components/Add/AddCard.vue";
import Block from "@/components/Block/Block.vue";

export default {
    computed: {
        ...mapState({
            blockchain: state => state.blockchain,
            user: state => state.user
        }),
    },
    components: {
        AddCard,
        Block
    },
    methods: {
        ...mapMutations(['setUser']),
        ...mapActions(['RequestBlockchainSync']),
    },
    created: function() {
        if(!this.$store.state.user.nickname) {
            this.$http.get("/api/checkUser")

            .then((response) => {
                this.setUser(response.data);

                if(!this.$store.state.user.nickname) {
                    this.$router.push("/login");     
                } else {
                    this.RequestBlockchainSync(); 
                }
            });    
        } else {
            this.RequestBlockchainSync();
        }
   }
}

</script>

<style scoped>
</style>