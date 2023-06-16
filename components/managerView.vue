<template>
    <div>
        <v-container>
            <v-container class="accent">
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col >Manager Name</v-col>
                    <v-spacer></v-spacer>
                </v-row>     
            </v-container>
            
            <div v-if="curTab == 'alerts'">
            <HelpersManagerAlerts></HelpersManagerAlerts>
            </div>
            <div v-if="curTab == 'tt'">
            <HelpersManagerTT></HelpersManagerTT>
            </div>
            <div v-if="curTab == 'break'">
            <HelpersManagerBreakroom></HelpersManagerBreakroom>
            </div>
            <div v-if="curTab == 'settings'">
            <HelpersBayhostSettings></HelpersBayhostSettings>
            </div>
        <v-bottom-navigation class="accent fixed-bottom mt-2">
  <v-btn value="alerts" @click="changeTab('alerts')">
    <v-icon>mdi-golf</v-icon>
    Alerts
  </v-btn>
 
  <v-btn value="TT" @click="changeTab('tt')">
    <v-icon>mdi-golf</v-icon>
    TT
  </v-btn>
  <v-btn value="break" @click="changeTab('break')">
    <v-icon>mdi-golf</v-icon>
    Breakroom
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
            userName: "Manager Name",
            baysInWeeds: {},
            curTab: "alerts"
      }
    }, 
      methods: {
        changeTab(value){
            this.curTab = value
        }
    
    },
  
   
    
    };
    
    </script>
    
