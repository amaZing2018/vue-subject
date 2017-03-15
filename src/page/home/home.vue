<template>
  	<div>
    <p class="click" v-on:click="getTest">Hello world</p>
    </div>
</template>

<script>
import {peopleGet} from '../../service/getData'
export default {
    data(){
        return{
            // peopleGet: '',   //当前城市
            // guessCityid: '', //当前城市id
            // hotcity: [],     //热门城市列表
            // groupcity: {},   //所有城市列表
        }
    },

      methods:{
        getTest(){
            console.log('dianjile')
            peopleGet().then(res => {
                console.log(res);
            })
        }
    }


}

</script>

<style lang="css" scoped>
  .click{
    cursor:pointer;
  }

</style>
