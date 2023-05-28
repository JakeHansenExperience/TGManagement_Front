<template >
    <div >
        <v-container>
            <v-container class="accent">
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col >Bayhost Name</v-col>
                    <v-spacer></v-spacer>
                </v-row>     
            </v-container>
            
            <div v-if="curTab == 'bays'">
            <HelpersBayhostBays></HelpersBayhostBays>
            </div>
            <div v-if="curTab == 'settings'">
            <HelpersBayhostSettings></HelpersBayhostSettings>
            </div>
        <v-bottom-navigation class="accent fixed-bottom mt-2">
  <v-btn value="bays" @click="changeTab('bays')">
    <v-icon>mdi-golf</v-icon>
    Bays
  </v-btn>
  <v-btn value="settings" @click="changeTab('settings')">
    <v-icon>mdi-golf</v-icon>
    Settings
  </v-btn>
</v-bottom-navigation>


</v-container>
    </div>

    

    </template>
    
    
    <script>
    
    export default {
      data() {
        return {
            curTab: "bays",
            statusColor: "green",
            userName: "Username",
            bayNum: "101",
            timeRemaining: "50",
            bayAlerts: ["Food On Way", "Called Host"]
    
    }
    
    
    },
    
    
      methods: {
    
        async inDaWeeds(){
            
            const ip = await this.$axios.$put('/api/inDaWeeds/', {
                playmaker: 'thisUser',
            })
            console.log(ip)
        },
        
        changeTab(value){
            this.curTab = value
        }
    },
  
    
    };
    
    </script>
    
    <style scoped>
    
    
    </style>
    