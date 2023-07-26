<template>
    <div>
      
  
      <v-container  >
        
        <v-row>
         <v-col class="indigo">
          <v-row>
            <v-col class="text-h6 ml-4 mb-n4">
             Leaderboard
            </v-col>
          </v-row>
          <v-row>
              <v-col>
                <v-divider
                thickness="20"
                color="black"
                class="border-opacity-100"
                >
  
                </v-divider>
              </v-col>
            </v-row>
          <v-row >
            
            <v-col>
                <v-expansion-panels class="pt-2">
       <v-expansion-panel>
        <v-expansion-panel-header class="darkIndigo" >
           Trays
        </v-expansion-panel-header>
      
        <v-expansion-panel-content >
           <v-container v-if="dataLoaded">
            
            <v-row>
                <v-spacer></v-spacer>
                <v-chip :color="leaderboard[TrayOrder[0]].color" class="mt-2"> {{ leaderboard[TrayOrder[0]].name }} {{ spacerForChips }} {{ leaderboard[TrayOrder[0]].value }}</v-chip>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-chip :color="leaderboard[TrayOrder[1]].color" class="mt-2"> {{ leaderboard[TrayOrder[1]].name }} {{ spacerForChips }} {{ leaderboard[TrayOrder[1]].value }}</v-chip>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-chip :color="leaderboard[TrayOrder[2]].color" class="mt-2"> {{ leaderboard[TrayOrder[2]].name }} {{ spacerForChips }} {{ leaderboard[TrayOrder[2]].value }}</v-chip>
                <v-spacer></v-spacer>
            </v-row>

           </v-container>
        </v-expansion-panel-content>
       </v-expansion-panel>
             </v-expansion-panels>
            </v-col>
            
          </v-row>

          <v-row >
            <v-col>
                <v-expansion-panels class="pt-2">
       <v-expansion-panel>
        <v-expansion-panel-header class="darkIndigo" >
          Stairs
        </v-expansion-panel-header>
      
        <v-expansion-panel-content>
            <v-container v-if="dataLoaded">
                <v-row>
                <v-spacer></v-spacer>
                <v-chip :color="leaderboard[StairOrder[0]].color" class="mt-2"> {{ leaderboard[StairOrder[0]].name }} {{ spacerForChips }} {{ leaderboard[StairOrder[0]].value }}</v-chip>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-chip :color="leaderboard[StairOrder[1]].color" class="mt-2"> {{ leaderboard[StairOrder[1]].name }} {{ spacerForChips }} {{ leaderboard[StairOrder[1]].value }}</v-chip>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-chip :color="leaderboard[StairOrder[2]].color" class="mt-2"> {{ leaderboard[StairOrder[2]].name }} {{ spacerForChips }} {{ leaderboard[StairOrder[2]].value }}</v-chip>
                <v-spacer></v-spacer>
            </v-row>
            </v-container>
        </v-expansion-panel-content>
       </v-expansion-panel>
             </v-expansion-panels>
            </v-col>
          </v-row>

          <v-row >
            <v-col>
                <v-expansion-panels class="pt-2">
       <v-expansion-panel>
        <v-expansion-panel-header class="darkIndigo" >
           Averages
        </v-expansion-panel-header>
      
        <v-expansion-panel-content>
            <v-container v-if="dataLoaded">
                <v-row>
                <v-spacer></v-spacer>
                <v-chip :color="leaderboard[AvgOrder[0]].color" class="mt-2"> {{ leaderboard[AvgOrder[0]].name }} {{ spacerForChips }} {{ leaderboard[AvgOrder[0]].value }}</v-chip>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-chip :color="leaderboard[AvgOrder[1]].color" class="mt-2"> {{ leaderboard[AvgOrder[1]].name }} {{ spacerForChips }} {{ leaderboard[AvgOrder[1]].value }}</v-chip>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-chip :color="leaderboard[AvgOrder[2]].color" class="mt-2"> {{ leaderboard[AvgOrder[2]].name }} {{ spacerForChips }} {{ leaderboard[AvgOrder[2]].value }}</v-chip>
                <v-spacer></v-spacer>
            </v-row>
            </v-container>
        </v-expansion-panel-content>
       </v-expansion-panel>
             </v-expansion-panels>
            </v-col>
          </v-row>

         </v-col>
         
          <v-col class="green ml-2">
            <v-row>
              <v-col class="text-h6 ml-11 mb-n4">
            Runnin'
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-divider
                thickness="20"
                color="black"
                class="border-opacity-100"
                >
  
                </v-divider>
              </v-col>
            </v-row>
            <v-row>
            <v-col>
              <div v-for="runner in runners">
              <v-chip class="darkerGreen mt-1 " @click="clickedRunner(runner.name)" v-if = "runner.status == 'running'"> 
                {{runner.name}}
              </v-chip>
              </div>
            </v-col>
          </v-row>
          </v-col>
          <v-overlay v-if="showRunnerOverlay">
                  <v-container class = "indigo">
                    <v-row>
                      <v-col>
                        Time: {{selectedRunnerTime}}
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-btn @click="RunnerBack">
                          Runner Back
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-btn @click="RunnerCancel">
                          Cancel
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-overlay>
  
          <v-col class="accent ml-2">
          
            <v-row class="mb-n7">
              <v-col class="text-h6 ml-8 "> 
            Chillin' 
            </v-col>
            
          
            </v-row>
            <v-row>
              <v-col>
                <v-divider
                thickness="20"
                color="black"
                class="border-opacity-100"
                >
  
                </v-divider>
              </v-col>
            </v-row>
            <v-row>
            <v-col>
              <div v-for="runner in runners">
              <v-chip  class="darkerGrey mt-1 "  v-if ="runner.status == 'chillin'"> 
                {{runner.name}} 
              </v-chip>
              </div>
            </v-col>
          </v-row>
          </v-col>
          <v-col class="red ml-2">
            <v-row>
              <v-col class="text-h6 ml-7 mb-n4">
            SideWorkin'
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-divider
                thickness="20"
                color="black"
                class="border-opacity-100"
                >
  
                </v-divider>
              </v-col>
            </v-row>
            <v-row>
            <v-col>
              <div v-for="runner in runners">
              <v-chip class="darkerRed mt-1"  v-if = "runner.status == 'sidework'"> 
                {{runner.name}}
              </v-chip>
              </div>
            </v-col>
          </v-row>
          </v-col>
      
        </v-row>
      
      </v-container>
    </div>
  </template>
      
    
    
    <script>
    
    export default {
      data() {
        return {
            selectedRunnerTime: 0,
            selectedRunner: '',
            showRunnerOverlay: false,
            runners: [],
            leaderboard: [],
            StairOrder: [0,0,0],
            TrayOrder: [0,0,0],
            AvgOrder: [0,0,0],
            dataLoaded: false,
            spacerForChips: " -- ",
            
            trays: {'1': 
            {
                name: "jake",
                trays: 420,
                shift: "07-07-2023 AM",
                color: "gold",

            },
            '2': {
                name: "Dan",
                trays: 260,
                shift: "09-23-2022 PM",
                color: "silver",

            },
            '3': {
                name: "david",
                trays: 160,
                shift: "09-24-2022 PM",
                color: "bronze",
                
            },
        
        },
        stairs: {'1': 
            {
                name: "jake",
                stairs: 420,
                shift: "07-07-2023 AM",
                color: "gold",

            },
            '2': {
                name: "Dan",
                stairs: 260,
                shift: "09-23-2022 PM",
                color: "silver",

            },
            '3': {
                name: "david",
                stairs: 160,
                shift: "09-24-2022 PM",
                color: "bronze",
                
            },
        
        },
        averages: {'1': 
            {
                name: "jake",
                average: 420,
                shift: "07-07-2023 AM",
                color: "gold",

            },
            '2': {
                name: "Dan",
                average: 260,
                shift: "09-23-2022 PM",
                color: "silver",

            },
            '3': {
                name: "david",
                average: 160,
                shift: "09-24-2022 PM",
                color: "bronze",
                
            },
        
        },
    
    }
    
    
    },
      props: {
        //the parameters the comopnet accepst
        // message: String,
        // product: Object,
        // email: {
          // type: String
          // required: true,
          // default: 'none'
          // validator: function (value) {
          //   return true if valid
    //       String
    // Number
    // Boolean
    // Array
    // Object
    // Date
    // Function
    // Symbol
          // }
      },
      computed: {
    //     TrayOrder: function () {
    //       var arr = [0,0,0]
    //       console.log('HIHIHIHIHIHIHIHIHIHIHIHIHI')
    //       for (var leader in this.leaderboard){
    //           if(this.leaderboard[leader].category == "Trays" && this.leaderboard[leader].color == "gold"){
    //             arr[0] = leader
    //           }
    //           if(this.leaderboard[leader].category == "Trays" && this.leaderboard[leader].color == "silver"){
    //             arr[1] = leader
    //           }
    //           if(this.leaderboard[leader].category == "Trays" && this.leaderboard[leader].color == "bronze"){
    //             arr[2] = leader
    //           }
    //       }
    //       return arr
          
    //   },
    //   StairOrder: function () {
    //       var arr1 = [0,0,0]
    //       console.log('HASSSSSSSSSSSSSSS')
    //       for (var leader in this.leaderboard){
    //           if(this.leaderboard[leader].category == "Stairs" && this.leaderboard[leader].color == "gold"){
    //             arr1[0] = leader
    //           }
    //           if(this.leaderboard[leader].category == "Stairs" && this.leaderboard[leader].color == "silver"){
    //             arr1[1] = leader
    //           }
    //           if(this.leaderboard[leader].category == "Stairs" && this.leaderboard[leader].color == "bronze"){
    //             arr1[2] = leader
    //           }
    //       }
    //       return arr1
          
    //   },
    },
      watch: {
        //called when firstname changes value
        // firstName: function (value, oldValue) {...}
      },
    
    
      methods: {
        RunnerBack(){
          
          

          for (var runner in this.runners){
              if(this.runners[runner].name == this.selectedRunner){
                
                var queueNum = 1
                for(var guy in this.runners){
                  if(this.runners[guy].status == "chillin")
                  queueNum += 1
                }
                this.runners[runner].status = "chillin"
                this.runners[runner].chillinQueue = queueNum
                var timeDiff = Date.now() - this.runners[runner].runStart
                this.runners[runner].totalTime += timeDiff
                this.runners[runner].numTickets += 1
                try {
                const ip = this.$axios.$put('/api/updateRunnerBack', {
                name: this.runners[runner].name,
                shift: this.runners[runner].shift,
                chillinQueue: this.runners[runner].chillinQueue,
                totalTime: this.runners[runner].totalTime,
                numTickets: this.runners[runner].numTickets
           
          })
        } catch(error){
          console.log(error)
        }
                
              }

        }

          this.showRunnerOverlay = false
        },
        RunnerCancel(){
          this.showRunnerOverlay = false
        },
        clickedRunner(value){
          this.showRunnerOverlay = true
          this.selectedRunner = value
          for (var runner in this.runners){
              if(this.runners[runner].name == value){
                this.selectedRunnerTime = (Date.now() - this.runners[runner].runStart)/1000
              }
          }
        },

        async getChillinRunners(){
            const response = await this.$axios.$get('/api/expoRunner');
            this.runners = response
            console.log(this.runners)
        },
        async getLeaderboard(){
            const response1 = await this.$axios.$get('/api/leaderboard');
            this.leaderboard = response1
            for(var leader in this.leaderboard){
                    //       for (var leader in this.leaderboard){
              if(this.leaderboard[leader].category == "Trays" && this.leaderboard[leader].color == "gold"){
                this.TrayOrder[0] = leader
              }
              if(this.leaderboard[leader].category == "Trays" && this.leaderboard[leader].color == "silver"){
                this.TrayOrder[1] = leader
              }
              if(this.leaderboard[leader].category == "Trays" && this.leaderboard[leader].color == "bronze"){
                this.TrayOrder[2] = leader
              }
              if(this.leaderboard[leader].category == "Stairs" && this.leaderboard[leader].color == "gold"){
                this.StairOrder[0] = leader
              }
              if(this.leaderboard[leader].category == "Stairs" && this.leaderboard[leader].color == "silver"){
                this.StairOrder[1] = leader
              }
              if(this.leaderboard[leader].category == "Stairs" && this.leaderboard[leader].color == "bronze"){
                this.StairOrder[2] = leader
              }
              if(this.leaderboard[leader].category == "Averages" && this.leaderboard[leader].color == "gold"){
                this.AvgOrder[0] = leader
              }
              if(this.leaderboard[leader].category == "Averages" && this.leaderboard[leader].color == "silver"){
                this.AvgOrder[1] = leader
              }
              if(this.leaderboard[leader].category == "Averages" && this.leaderboard[leader].color == "bronze"){
                this.AvgOrder[2] = leader
              }
    //       }

            }
            this.dataLoaded = true
            console.log(this.leaderboard)

        }
    // fetching Data
        // async grabBCData() {
        //   const response = await this.$axios.$get('/api/readAllBusCarts');
        //   this.bcData = response
        //
        //   const startingBay = '202'
        //   this.changeBayParent(startingBay)
        // }
    
    },

    //Lifecycle Hooks: beforeCreate, created, beforeMount, mounted, beforeUPdate, updated, beforeDestroy, destroyed
    mounted() {
      window.setInterval(() => {
        this.getChillinRunners()
        console.log('Got the chillin runners')
      }, 3000)
      window.setInterval(() => {
        this.getLeaderboard()
        console.log("HI")
      }, 5000)
    
    
    }
    
    };
    
    </script>
    
    <style scoped>
    
     /* <v-col class="indigo">
                <v-row>
                  <v-col>
                    <v-icon @click="clickedNum(1)"> mdi-numeric-1-box-outline </v-icon>
                  </v-col>
                  <v-col>
                    <v-icon @click="clickedNum(2)"> mdi-numeric-2-box-outline </v-icon>
                  </v-col>
                  <v-col>
                    <v-icon  @click="clickedNum(3)"> mdi-numeric-3-box-outline </v-icon>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-icon @click="clickedNum(4)"> mdi-numeric-4-box-outline </v-icon>
                  </v-col>
                  <v-col>
                    <v-icon @click="clickedNum(5)"> mdi-numeric-5-box-outline </v-icon>
                  </v-col>
                  <v-col>
                    <v-icon @click="clickedNum(6)"> mdi-numeric-6-box-outline </v-icon>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-icon @click="clickedNum(7)"> mdi-numeric-7-box-outline </v-icon>
                  </v-col>
                  <v-col>
                    <v-icon @click="clickedNum(8)"> mdi-numeric-8-box-outline </v-icon>
                  </v-col>
                  <v-col>
                    <v-icon @click="clickedNum(9)"> mdi-numeric-9-box-outline </v-icon>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    
                  </v-col>
                  <v-col>
                    <v-icon @click="clickedNum(0)"> mdi-numeric-0-box-outline </v-icon>
                  </v-col>
                  <v-col>
                    <v-icon @click="clickedNum('a')"> mdi-backspace-outline</v-icon>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field v-model="bayNum"  > </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn class="mt-6" @click="runnerUp()">
                      Runner Up!
                    </v-btn>
                  </v-col>
                </v-row>
             
              </v-col> */
    /*
    vuetify styling
    
    ranges from 0-16
    {property} {direction} -{size}
    property is type of spacing, m for margin p for padding
    direction designates the side the property applies to
    t (top)
    b (bottom)
    l (left)
    r (right)
    x (left and right )
    y (top and bottom)
    a (all directions)
    size (1-16)
    1 is 4px, 2 is 8 px, n1 is -4 px or auto
    
    with breakpoints for screen sizes, xs, sm, md, lg, xl
    
    {property}{direction}-{breakpoint}-{size} */
    
    
    </style>
    
    
    
    
    <!-- for axios stuff
    
    new Vue({
      el: '#app',
      data () {
        return {
          info: null
        }
      },
      mounted () {
        axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => (this.info = response))
      }
    }) -->