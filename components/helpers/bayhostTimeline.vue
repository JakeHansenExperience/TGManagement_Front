<template>
    <div>
        <v-container class="accent mt-6">
            <!-- <v-img src="/vibin.gif"></v-img> -->
            <v-timeline>
                <v-timeline-item dot-color="green">
                    <template v-slot:opposite>
                        <v-btn>
                            Bay Greeted
                        </v-btn>
                        
                    </template>
                    <div>
                            Bay 101 is Sat!
                        </div>

                </v-timeline-item>
                
                
                <v-timeline-item>
                    <template v-slot:opposite>
                        <v-btn>
                            Closed Out
                        </v-btn>
                        
                    </template>
                    <div>
                            Bay 101 needs closing out
                        </div>

                </v-timeline-item>

                <v-timeline-item>
                    <template v-slot:opposite>
                        <v-btn>
                            Bay Flipped
                        </v-btn>
                        
                    </template>
                    <div>
                            Bay 101 needs Flippin
                        </div>

                </v-timeline-item>

                <v-timeline-item>
                    <template v-slot:opposite>
                        <v-btn>
                            Food Arrived!!!
                        </v-btn>
                        
                    </template>
                    <div>
                            Food's heading to 101
                        </div>
                </v-timeline-item>


            </v-timeline>
            
        </v-container>
    
    </div>
    </template>
    
    
    <script>
    
    export default {
      data() {
        return {
    
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