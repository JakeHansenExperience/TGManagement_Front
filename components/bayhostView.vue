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

            <v-container class='accent mt-2'>
    <v-row>
      <v-col>
        <v-img src="/Untitled.png" height="100" width="100"> </v-img>
      </v-col>
      <v-col>
             <v-btn class="mt-8" @click="showKaren = '1'"> Report A Karen </v-btn>
      </v-col>
      
      <v-overlay v-if="showKaren == 1">
        <v-container class='red'>
          <v-row>
            <v-col>
                                  <v-text-field label="Title Of Incident"></v-text-field>

            </v-col>
          </v-row>
        
          <v-row>
            <v-col>
                                  <v-text-field label="Describe the Karen Incident"></v-text-field>

            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn @click="showKaren = '0'"> Cancel </v-btn>
              </v-col>
              <v-col>
                <v-btn @click="showKaren = '0'"> Submit </v-btn>
                </v-col>
            </v-row>
        </v-container>
      </v-overlay>
      
    </v-row>

  </v-container>
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
          showKaren: '0',
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
    