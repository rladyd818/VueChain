<template>
    <a-card class="mine is-valid mine-shadow">
        <a-input addonBefore="DATA" v-model="inputData">
            <a-icon slot="prefix" type="file-text" />
        </a-input>
        <p></p>        
        <p>hash: {{hash}}</p>
        <p>previousHash: {{previousHash}}</p>
        
        <div>
        <span class="indexsp" style="font-size: 30px">
        BLOCK #{{index}}
        </span>
        <span class="indexsp1" style="font-size: 15px">
        {{$moment(timestamp).format('LLL')}}
        </span>
        <span class="indexsp2" style="font-size: 15px">
            aa
        </span>
        </div>
    </a-Card>
</template>

<script>

export function genesisblock() {
    return {
        index: 0,
        hash: "2C4CEB90344F20CC4C77D626247AED3ED530C1AEE3E6E85AD494498B17414CAC",
        previousHash:null,
        timestamp:1520312194926,
        data:"This is the genesis!!"
    }
}

export default {
    props: {
        index: Number,
        hash: String,
        previousHash: String,
        data: String,
        timestamp:Number
    },
    data: function () {
        return { 
            inputData: this.data 
        }
    }
}


</script>

<style scoped>
@import '../Add/AddCard.css';
@import './Block.css';

</style>

