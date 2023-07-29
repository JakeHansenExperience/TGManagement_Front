<template>
  <div>
  
    <v-container  >   
      <v-row>
       <v-col class="indigo">
        <v-row>
          <v-col class="text-h6 ml-4 mb-n4">
            Expo Controls
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
              <v-btn @click="setUpLeaderboard">
                set up leaderboard
              </v-btn>
            </v-col>
          </v-row>
        <v-row>
          <v-col>
            <v-btn @click="runnerUp3" class="mt-3 ml-4 darkIndigo">
              Runner Up 3
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="runnerUp2" class="mt-5 ml-4 darkIndigo">
              Runner Up 2
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mb-n6">
          <v-col>
            <v-btn @click="runnerUp1" class="mt-5 ml-4 darkIndigo ">
              Runner Up 1
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-divider
              thickness="20"
              color="black"
              class="border-opacity-100 mt-3"
              >

              </v-divider>
          </v-col>
        </v-row>
        
        <v-row class="mt-1">
          <v-col>
            <v-row class="mb-n6">
              
                <v-icon class="ml-4">mdi-run</v-icon>
              
              
              <v-col class="ml-4 mr-n4 text-subtitle-2">
                Next Up
              </v-col>

                <v-icon class="mr-6" >mdi-run-fast</v-icon>
             
            </v-row>
            <v-row class="mb-n8 ">
            <v-spacer></v-spacer>
              <v-col >
                <v-chip class="darkIndigo" >
                {{nextRunnerComputed}}
              </v-chip>
              </v-col>
             <v-spacer></v-spacer>
         
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
               
          </v-col>
        </v-row>
  
       </v-col>
        <v-overlay v-if="Keyboard">
                  <v-container class="indigo">
                    <v-row>
                      <v-col>
                          <v-text-field v-model="inputName">
                          </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-icon @click="clickedLetter('q')"> mdi-alpha-q-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('w')"> mdi-alpha-w-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('e')"> mdi-alpha-e-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('r')"> mdi-alpha-r-box </v-icon>
                      </v-col>
                      <v-col>
                        <v-icon @click="clickedLetter('t')"> mdi-alpha-t-box </v-icon>
                      </v-col>
                      <v-col>
                        <v-icon @click="clickedLetter('y')"> mdi-alpha-y-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('u')"> mdi-alpha-u-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('i')"> mdi-alpha-i-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('o')"> mdi-alpha-o-box </v-icon>
                      </v-col>
                      <v-col>
                        <v-icon @click="clickedLetter('p')"> mdi-alpha-p-box </v-icon>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-icon @click="clickedLetter('a')"> mdi-alpha-a-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('s')"> mdi-alpha-s-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('d')"> mdi-alpha-d-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('f')"> mdi-alpha-f-box </v-icon>
                      </v-col>
                      <v-col>
                        <v-icon @click="clickedLetter('g')"> mdi-alpha-g-box </v-icon>
                      </v-col>
                      <v-col>
                        <v-icon @click="clickedLetter('h')"> mdi-alpha-h-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('j')"> mdi-alpha-j-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('k')"> mdi-alpha-k-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('l')"> mdi-alpha-l-box </v-icon>
                      </v-col>
                
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-icon @click="clickedLetter('z')"> mdi-alpha-z-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('x')"> mdi-alpha-x-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('c')"> mdi-alpha-c-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('v')"> mdi-alpha-v-box </v-icon>
                      </v-col>
                      <v-col>
                        <v-icon @click="clickedLetter('b')"> mdi-alpha-b-box </v-icon>
                      </v-col>
                      <v-col>
                        <v-icon @click="clickedLetter('n')"> mdi-alpha-n-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter('m')"> mdi-alpha-m-box </v-icon>
                      </v-col>
                       <v-col>
                        <v-icon @click="clickedLetter(' ')"> mdi-keyboard-space </v-icon>
                      </v-col>
                      <v-col>
                        <v-icon @click="clickedLetter('!')"> mdi-backspace </v-icon>
                      </v-col>
                      
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-btn @click="Keyboard=false"> 
                          Cancel
                        </v-btn>
                      </v-col>
                      <v-col>
                        <v-btn @click="createRunner">
                          Create Runner
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-overlay>
                <v-overlay v-if="chillinClickShow">
                  <v-container class="indigo">
                    <v-row>
                      <v-col>
                        <v-btn @click="makePriority">
                          Priority
                        </v-btn>
                      </v-col>
                    </v-row>
            
                     <v-row>
                      <v-col>
                        <v-btn @click="chillinSidework">
                          SideWork
                        </v-btn>
                      </v-col>
                    </v-row>
                     <v-row>
                      <v-col>
                        <v-btn @click="chillinEndshift">
                          EndShift
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-btn @click="chillinCancel">
                        Cancel
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-overlay>
                <v-overlay v-if="SideworkShow">
                  <v-container class="indigo">
                    <v-row>
                      <v-col>
                        <v-btn @click="BackToRunnin">
                          Back To Chillin
                        </v-btn>
                      </v-col>
                    </v-row>
                     <v-row>
                      <v-col>
                        <v-btn @click="sideworkCancel">
                          Cancel
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-overlay>
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
                <v-overlay v-if="showFinalStats">
                  <v-container class="indigo">
                    <v-row>
                      <v-col>
                        {{finalName}}
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        {{finalTickets}} <span> Tickets </span>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        {{finalStairs}} <span> Stairs </span>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        {{finalAvg}} <span> Seconds / Tray </span>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-btn @click="showFinalStats = false">
                          Done
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-overlay>

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
              <v-chip class="darkerGreen mt-1 " @click="clickedRunner(runner.name)" v-if ="runner.status == 'running'"> 
                {{runner.name}}
              </v-chip>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="accent ml-2">
        
          <v-row class="mb-n7">
            <v-col class="text-h6 ml-8 "> 
          Chillin' 
          </v-col>
          
          <v-col>
            <v-badge @click="showKeyboard" icon="mdi-plus" color="lighterGrey" class="mt-2">
            <v-icon @click="showKeyboard" class="mt-n1"> mdi-run</v-icon>
            </v-badge>

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
              <v-chip  class="darkerGrey mt-1 " @click="clickedChillinRunner(runner.name)" v-if ="runner.status == 'chillin'"> 
                {{runner.name}} <v-icon v-if="runner.break"> mdi-power-sleep</v-icon> 
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
              <v-chip class="darkerRed mt-1" @click="sideworkShow(runner.name)" v-if ="runner.status == 'sidework'"> 
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
            
            messageRxd: null,
            connection: null,
            bayNum: '',
            runners: [],
            Keyboard: false,
            inputName: '',
            chillinClickShow: false,
            chillinClickName: '',
            SideworkShow: false,
            SideworkName: '',
            showRunnerOverlay: false,
            selectedRunner: '',
            finalTickets: 0,
            finalStairs: 0,
            finalAvg: 0,
            finalName: '',
            showFinalStats: false,
            availableRunners: false,
            nextRunner: ""
    }
    
    
    },
      props: {
        

      },
      computed: {
        nextRunnerComputed: function () {

          var count = 0
          for (var runner in this.runners){
            if (this.runners[runner].status == "chillin"){
              count += 1
            }
          }
          if (count == 0){
            return "No Available Runners"
          }
          else {
            for (var runner in this.runners){
              if (this.runners[runner].status == "chillin" && this.runners[runner].chillinQueue == 1){
                return this.runners[runner].name
              }
            }
          }
        }
        // fullName: function () {
        //   return this.fistName + ' ' + this.lastName
      },
      watch: {
        //called when firstname changes value
        // firstName: function (value, oldValue) {...}
      },
    
    
      methods: {
        async setUpLeaderboard(){
          try {
                const ip = this.$axios.$post('/api/setUpLeaderboard', {
                
                  
           
          })
        } catch(error){
          console.log(error)
        }
        },
        // async sendMessage(){
        //   console.log("Hello")
        //   console.log(this.connection)
        //   this.connection.send("I am the mesage")
        // },
        makePriority(){

          for(var runner in this.runners){
            if(this.runners[runner].name == this.chillinClickName){
              var curSpot = this.runners[runner].chillinQueue
              for (var guy in this.runners){
                if(this.runners[guy].status == "chillin" && this.runners[guy].chillinQueue < curSpot){
                  this.runners[guy].chillinQueue += 1
                }
              }
              try {
                const ip = this.$axios.$put('/api/updatePriority', {
                name: this.runners[runner].name,
                curSpot: curSpot,
                
                
           
          })
        } catch(error){
          console.log(error)
        }
              this.runners[runner].chillinQueue = 1
            }
          }
          this.chillinClickShow = false

        },

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

        runnerUp3(){
          console.log("three")
          for (var runner in this.runners){
            if(this.runners[runner].status == "chillin" && this.runners[runner].chillinQueue == 1){
              this.runners[runner].status = "running"
              this.runners[runner].runStart = Date.now()
              this.runners[runner].numFloors += 2
              try {
                const ip = this.$axios.$put('/api/updateRunnerUp', {
                name: this.runners[runner].name,
                shift: this.runners[runner].shift,
                floors: 2,
                runStart: this.runners[runner].runStart
                
           
          })
        } catch(error){
          console.log(error)
        }
            }
          }
          for (var runner in this.runners){
            if(this.runners[runner].status == "chillin"){
              this.runners[runner].chillinQueue -= 1
            }
          }
        },        
        runnerUp2(){
          console.log("Runner up2")
          for (var runner in this.runners){
            if(this.runners[runner].status == "chillin" && this.runners[runner].chillinQueue == 1){
              this.runners[runner].status = "running"
              this.runners[runner].runStart = Date.now()
              this.runners[runner].numFloors += 1
              try {
                const ip = this.$axios.$put('/api/updateRunnerUp', {
                name: this.runners[runner].name,
                shift: this.runners[runner].shift,
                floors: 1,
                runStart: this.runners[runner].runStart
                
           
          })
        } catch(error){
          console.log(error)
        }
            }
          }
          for (var runner in this.runners){
            if(this.runners[runner].status == "chillin"){
              this.runners[runner].chillinQueue -= 1
            }
          }
        },
        runnerUp1(){
          console.log("RunnerUpOne")
          for (var runner in this.runners){
            if(this.runners[runner].status == "chillin" && this.runners[runner].chillinQueue == 1){
              this.runners[runner].status = "running"
              this.runners[runner].runStart = Date.now()
              try {
                const ip = this.$axios.$put('/api/updateRunnerUp', {
                name: this.runners[runner].name,
                shift: this.runners[runner].shift,
                floors: 0,
                runStart: this.runners[runner].runStart
                
           
          })
        } catch(error){
          console.log(error)
        }
            }
          }
          for (var runner in this.runners){
            if(this.runners[runner].status == "chillin"){
              this.runners[runner].chillinQueue -= 1
            }
          }
        },
        clickedRunner(value){
          this.showRunnerOverlay = true
          this.selectedRunner = value
          for (var runner in this.runners){
              if(this.runners[runner].name == value){
                var totalseconds = (Date.now() - this.runners[runner].runStart)/1000
                console.log(totalseconds)
                var minutes = Math.floor(totalseconds / 60)
                var seconds =  Math.floor(totalseconds % 60)
                console.log(seconds)
                this.selectedRunnerTime = String(minutes) + " mins " + String(seconds) + " seconds:" 
              }
          }
        },

        BackToRunnin(){
          this.SideworkShow = false
          var numInQueue = 1
          for (var runner in this.runners){
              if(this.runners[runner].status == "chillin"){
                numInQueue += 1
            
              }

        }
        for (var runner in this.runners){
              if(this.runners[runner].name == this.SideworkName){
                this.runners[runner].chillinQueue = numInQueue
                this.runners[runner].status = "chillin"
                try {
                const ip = this.$axios.$put('/api/updateBackRunninFromExpo', {
                name: this.SideworkName,
                shift: this.runners[runner].shift,
                
           
          })
        } catch(error){
          console.log(error)
        }
              }

        }
        
        },
        sideworkCancel(){
          this.SideworkShow = false
        },
        sideworkShow(name){
          this.SideworkName = name
          this.SideworkShow = true
        },

        chillinCancel(){
          this.chillinClickShow = false
        },
        clickedChillinRunner(name){
          this.chillinClickName = name
          this.chillinClickShow = true
        },
        chillinPriority(){
          var switchPriority = 0
          for (var runner in this.runners){
              if(this.runners[runner].name == this.chillinClickName){
                switchPriority = this.runners[runner].chillinQueue
                console.log("Switch Prioirty: ", switchPriority)
                this.runners[runner].chillinQueue = 1
                
              }

        }
        for (var runner in this.runners){
          if(this.runners[runner].chillinQueue == 1 && this.runners[runner].name != this.chillinClickName){
            this.runners[runner].chillinQueue = switchPriority
          }
        }
        this.chillinClickShow = false
        
        },

        chillinBreak(){
          var breaker = 0
          for (var runner in this.runners){
            if(this.runners[runner].name == this.chillinClickName){

              if(this.runners[runner].break == false){
                var breakQueue = this.runners[runner].chillinQueue
                this.runners[runner].chillinQueue = 0
                this.runners[runner].break = true
                for (var dude in this.runners){
                  if(this.runners[dude].chillinQueue > breakQueue){
                    this.runners[dude].chillinQueue -= 1
                  }
                }
              }
              else {
                this.runners[runner].break = false
                var numQ = 0
                for(var guy in this.runners){
                  if(this.runners[guy].status == "chillin"){
                    numQ += 1
                  }
                }
                this.runners[runner].chillinQueue = numQ
              }
             
            }
          }
         

          this.chillinClickShow = false
        },
        chillinSidework(){
          var queueIndex = 0
          for (var runner in this.runners){
            if(this.runners[runner].name == this.chillinClickName){
              this.runners[runner].status = "sidework"
              queueIndex = this.runners[runner].chillinQueue
              try {
                const ip = this.$axios.$put('/api/updateSideworkFromExpo', {
                name: this.chillinClickName,
                shift: this.runners[runner].shift,
           
          })
        } catch(error){
          console.log(error)
        }

            }
          }
          for (var runner in this.runners){
            if(this.runners[runner].chillinQueue > queueIndex){
              this.runners[runner].chillinQueue -= 1
            }
          }
          
          this.chillinClickShow = false
        },
        chillinEndshift(){
          var currentQueue = 0
          var currentIndex = 0
          var name = ""
          var shift = ""
          console.log("I am here right now")
          for (var runner in this.runners){
            if(this.runners[runner].name == this.chillinClickName){
              currentQueue = this.runners[runner].chillinQueue
              currentIndex = runner
              name = this.chillinClickName
              shift = this.runners[runner].shift
            }
          }
          for (var runner in this.runners){
            if(this.runners[runner].chillinQueue > currentQueue){
              this.runners[runner].chillinQueue -= 1
            }
          }
          this.finalTickets = this.runners[currentIndex].numTickets
          this.finalStairs = this.runners[currentIndex].numFloors
          this.finalAvg = (this.runners[currentIndex].totalTime / 1000)/this.runners[currentIndex].numTickets
          if (isNaN(this.finalAvg)) {
            this.finalAvg = 0
  }
          this.finalName = this.runners[currentIndex].name
          try {
            console.log("I am now here right now")
                const ip = this.$axios.$put('/api/updateRunnerDone', {
                name: name,
                shift: shift,
                finalTickets: this.finalTickets,
                finalStairs: this.finalStairs,
                finalAvg: this.finalAvg,
                currentQueue: currentQueue
           
          })
        } catch(error){
          console.log(error)
        }
          this.runners.splice(currentIndex,1);
          this.chillinClickShow = false
          this.showFinalStats = true
          
        },

        clickedNum(value) {
          if (value == 'a'){
            console.log("here")
            var curString = String(this.bayNum);
            var newString = curString.substring(0,curString.length-1) 
            this.bayNum = newString;
          }
          else{
          this.bayNum += String(value)
          }
        },
        clickedLetter(value){
          if (value == '!'){
            console.log("here")
            var curString = String(this.bayNum);
            var newString = curString.substring(0,curString.length-1) 
            this.inputName = newString;
          }
          else{
          this.inputName += String(value)
          }
        },
        showKeyboard() {
          this.Keyboard = true
        },
        createRunnerAPI(runner){
        console.log(runner)
        console.log(runner.name)
        const ip = this.$axios.$post('/api/expoRunner', {
                name: runner.name,
                chillinQueue: runner.chillinQueue,
                runStart: runner.runStart,
                shift: runner.shift
          })

       },
        createRunner(){
          this.Keyboard = false
          console.log("heosl")
          var numQueue = 1
          for (var runner in this.runners){
            if(this.runners[runner].status == 'chillin'){
              numQueue += 1
            }
           
          };
          const d = new Date()
          console.log(d)
          var hour = d.getHours()
          console.log("Hours: ", hour)
          console.log("day: ", d.getDate())
          console.log("month: ", d.getMonth())
          console.log("year: ", d.getFullYear())
          var ampm= 'am'
          if(hour >= 12){
            ampm = 'pm'
          }
          else{
            ampm = 'am'
          }
         
            var curshift = String(d.getMonth()) + "-" + String(d.getDate()) + '-' + String(d.getFullYear()) + '-' + ampm
          var runner = {
            
            name: this.inputName,
            status: "chillin",
            numFloors: 0,
            numTickets: 0,
            totalTime: 0,
            startTime: '0',
            chillinQueue: numQueue,
            bayName: '',
            runStart: Date.now(),
            break: false,
            shift: curshift,
          }
            this.runners.push(runner)
            // console.log(this.runners)
            var runnerAPI = {
            name: this.inputName,
            chillinQueue: numQueue,
            runStart: Date.now(),
            shift: curshift,
            }
            this.createRunnerAPI(runnerAPI)
            
            this.inputName = ""
        },
        async getAPIRunners(){
          console.log("HIslsl")
          const response = await this.$axios.$get('/api/expoRunner');
            this.runners = response
            console.log(this.runners)
        }
  //       async getMessage() {
  //   this.messageRxd = await this.socket.emitP('getMessage', { id: 'abc123' })
  // },
    
    
    },
    mounted() {
      window.setInterval(() => {
        this.getAPIRunners()
        console.log('Got the chillin runners')
      }, 3000)
    
    
    }
      

    
    };
    
    </script>
    