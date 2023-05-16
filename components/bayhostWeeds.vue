<template>
    <div>
    <v-btn @click="inDaWeeds()" > {{data1}}</v-btn>
    </div>
    </template>
    
    
    <script>
    
    export default {
      data() {
        return {
            data1: "notClicked",
    
    }
    
    
    },
    
    
      methods: {
    
        async inDaWeeds(){
            console.log("Here")
            const ip = await this.$axios.$get('inDaWeeds')
        }
    
    },
  
    
    };
    
    </script>
    
    <style scoped>
    
    
    </style>
    