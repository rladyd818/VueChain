<template>
    <a-card class="mine1 is-valid mine-shadow">
        
        <div class="items">
            <AddInput ref="AddInput"/>
            <AddButton v-on:click="click"/>
        </div>
        
    </a-Card>
</template>

<script>
// @ is an alias to /src
import AddInput from "@/components/Add/AddInput.vue";
import AddButton from "@/components/Add/AddButton.vue";
import { mapActions } from "vuex";

export default {
    props: {
        clickEvent: String
    },
    components: {
        AddInput,
        AddButton
    },
    methods: {
        ...mapActions([
            'RequestAddBlock'
        ]),
        click: function() {
            if( this.clickEvent == "RequestAddBlock") {
                this.RequestAddBlock(this.$refs.AddInput.getData());
            } else {
                this.$block.createNewBlock(this.$refs.AddInput.getData());
            }
        }
    }
}
</script>

<style scoped>
@import 'AddCard.css';

</style>

