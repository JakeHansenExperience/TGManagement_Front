<template>
  <div>
    

    <v-container  >
      
      <v-row>
       <v-col class="indigo">
        <v-row>
          <v-col>
            Expo Controls
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="runnerUp3" class="mt-5 ml-4">
              Runner Up 3
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="runnerUp2" class="mt-5 ml-4">
              Runner Up 2
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="runnerUp1" class="mt-5 ml-4 ">
              Runner Up 1
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row>
              <v-col>
                Next Runner:
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                {{nextRunnerComputed}}
              </v-col>
            </v-row>
            
              
            
           
          </v-col>
        </v-row>
        <v-row >
          <v-col class="mt-12">
            <v-row >
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
                    <!-- <v-row>
                      <v-col>
                        <v-btn @click="chillinPriority">
                          Priority
                        </v-btn>
                      </v-col>
                    </v-row> -->
            
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

        <v-col class="green">
          <v-row>
            <v-col>
          Running
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div v-for="runner in runners">
              <v-chip @click="clickedRunner(runner.name)" v-if ="runner.status == 'running'"> 
                {{runner.name}}
              </v-chip>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="accent">
        
          <v-row>
            <v-col> 
          Chillin 
          </v-col>
          
          <v-col>
            <v-icon @click="showKeyboard"> mdi-run</v-icon>
          </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div v-for="runner in runners">
              <v-chip @click="clickedChillinRunner(runner.name)" v-if ="runner.status == 'chillin'"> 
                {{runner.name}} <v-icon v-if="runner.break"> mdi-power-sleep</v-icon> 
              </v-chip>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="red">
          <v-row>
            <v-col>
          SideWorkin'
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div v-for="runner in runners">
              <v-chip @click="sideworkShow(runner.name)" v-if ="runner.status == 'sidework'"> 
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
                
              }

        }

          this.showRunnerOverlay = false
        },
        RunnerCancel(){
          this.showRunnerOverlay = false
        },

        // runnerUp(){
        //   console.log("HI")
        //   var nextRunner = 0
        //   for (var runner in this.runners){
        //       console.log(this.runners[runner].status)
        //       if(this.runners[runner].status == "chillin" && this.runners[runner].chillinQueue == 1 ){
        //         console.log("here")
        //         nextRunner = runner
        //         this.runners[runner].status = 'running'
        //         this.runners[runner].runStart = Date.now()
        //         this.runners[runner].bayName = this.runners[runner].name + " " + this.bayNum
        //         console.log("HIHIHIHIHIHI")
        //       }

        // }
        //  for (var runner in this.runners){
        //       if(this.runners[runner].status == "chillin"){
        //         this.runners[runner].chillinQueue -= 1
        //       }
        // }
        // this.bayNum = ''
        // },
        runnerUp3(){
          console.log("three")
          for (var runner in this.runners){
            if(this.runners[runner].status == "chillin" && this.runners[runner].chillinQueue == 1){
              this.runners[runner].status = "running"
              this.runners[runner].runStart = Date.now()
              this.runners[runner].numFloors += 2
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
                this.selectedRunnerTime = (Date.now() - this.runners[runner].runStart)/1000
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
          for (var runner in this.runners){
            if(this.runners[runner].name == this.chillinClickName){
              currentQueue = this.runners[runner].chillinQueue
              currentIndex = runner
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
          this.finalName = this.runners[currentIndex].name
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
        // async runnerUp(){
        //   this.bayNum = ""

        // },
        createRunner(){
          this.Keyboard = false
          console.log("heosl")
          var numQueue = 1
          for (var runner in this.runners){
            if(this.runners[runner].status == 'chillin'){
              numQueue += 1
            }
           
          };
          
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
            break: false
          }
            this.runners.push(runner)
            // console.log(this.runners)
            this.inputName = ""
        },
       
        // accept(text) {
        //   alert("Input text: " + text);
        //   this.hide();
        // },

        // show(e) {
        //   this.input = e.target;
        //   this.layout = e.target.dataset.layout;

        //   if (!this.visible)
        //     this.visible = true
        // },

        // hide() {
        //   this.visible = false;
        // }
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
    // mounted() {
    //   console.log("MountedBaby");
    //   this.grabBCData();
    //
    //   console.log("CalledThatData")
    //
    //
    // }
    
    };
    
    </script>
    
   
    
    
    
    
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