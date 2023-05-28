<template>
    <div>
        <v-container
        class="accent mt-2"
        >
        <v-row>
            <v-spacer></v-spacer>
            <v-col class="ml-12">
                Bays
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-expansion-panels class="pt-2">
       <v-expansion-panel>
        <v-expansion-panel-header class="darkblue" >
            Bay 101 <v-divider vertical class="white ml-2 mr-2"></v-divider> 30 mins 
        </v-expansion-panel-header>
      
        <v-expansion-panel-content>
            <HelpersBayExpansion></HelpersBayExpansion>
        </v-expansion-panel-content>
       </v-expansion-panel>
       <v-expansion-panel>
        <v-expansion-panel-header class="darkpink">
            
            Bay 102 <v-divider vertical class="white ml-2 mr-2"></v-divider> 3 mins
        </v-expansion-panel-header>
      
        <v-expansion-panel-content>
            <v-container> 
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-btn> Bay Flipped</v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>
            </v-container>
            
        </v-expansion-panel-content>
       </v-expansion-panel>
       <v-expansion-panel>
        <v-expansion-panel-header class="darkyellow">
            
            Bay 103 <v-divider vertical class="white ml-2 mr-2"></v-divider> 14 mins 
        </v-expansion-panel-header>
      
        <v-expansion-panel-content>
            <HelpersBayExpansion></HelpersBayExpansion>
        </v-expansion-panel-content>
       </v-expansion-panel>
       <v-expansion-panel>
        <v-expansion-panel-header class="black"> 
            Bay 104  
        </v-expansion-panel-header>
      
        <v-expansion-panel-content>
            <v-container>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col> Empty Bay</v-col>
                    <v-spacer></v-spacer>
                </v-row>
            </v-container>
         
        </v-expansion-panel-content>
       </v-expansion-panel>
       <v-expansion-panel>
        <v-expansion-panel-header class="teal"> 
            Bay 105 <v-divider vertical class="white ml-2 mr-2"></v-divider> No Guest Runner
        </v-expansion-panel-header>
      
        <v-expansion-panel-content>
            <v-container> 
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-btn> Checked In</v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>
            </v-container>
        </v-expansion-panel-content>
       </v-expansion-panel>
    </v-expansion-panels>
        </v-container>
        <v-container class="accent mt-2">
            <v-row class="pt-2">
                <v-spacer></v-spacer>
                <v-icon class="mr-2">mdi-golf-cart</v-icon>
                Here To Help!
                <v-icon class="ml-2">mdi-golf-cart</v-icon>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-col>
                    <v-btn @click="inDaWeeds() " > In Da Weeds</v-btn>
                </v-col>
                <v-col>
                    <v-btn @click="onBreak()" > On Break</v-btn>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            
            
        </v-container>
    </div>
    </template>
    
    
    <script>
    
    export default {
      data() {
        return {
            button1: "In Da Weeds",
            button4: "On Break",
    
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
        // fullName: function () {
        //   return this.fistName + ' ' + this.lastName
      },
      watch: {
        //called when firstname changes value
        // firstName: function (value, oldValue) {...}
      },
    
    
      methods: {

        async inDaWeeds(){
            
            const ip = await this.$axios.$put('/api/inDaWeeds/', {
                playmaker: 'thisUser',
            })
            console.log(ip)
        },
        async onBreak(){
            console.log("on break")
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
    
    <style scoped>
    
    
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