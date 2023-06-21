<template>
    <div>
        <v-container class="accent mt-2">
            <v-row>
                <v-spacer></v-spacer>
                <v-col>
                    Alerts
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
              <v-col>
                <v-chip class="red">
                  Playmaker1 Is In The Weeds!!!
                </v-chip>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-chip class="orange">
                  Ball Jam @ Bay 102
                </v-chip>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-chip class="green">
                  Event 102 Starting in 10 minutes
                </v-chip>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-chip class="green">
                  Event 103 Food Arriving
                </v-chip>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-chip class="indigo">
                  Playmaker1 Is In The Weeds!!!
                </v-chip>
              </v-col>
            </v-row>
        </v-container> 

     <v-container>
      <v-row>
        <v-col>
          <v-btn @click='overlay=1'>
                        IT
                    </v-btn>
                    <v-overlay v-if='overlay==1'>
                      <v-container class="red">
                        <v-row>
                          <v-col class='mt-6'>
                            Did You Refresh Bay?
                          </v-col>
                          <v-col>
                            <v-radio-group
      v-model="inline"
      inline
    >
      <v-radio
        label="Yes"
        value="yes"
      ></v-radio>
      <v-radio
        label="No"
        value="no"
      ></v-radio>
    </v-radio-group>
                          </v-col>

                          
                        </v-row>
                        <v-row>
                          <v-col class='mt-6'>
                            Are There Balls?
                          </v-col>
                          <v-col>
                            <v-radio-group
      v-model="inline"
      inline
    >
      <v-radio
        label="Yes"
        value="yes"
      ></v-radio>
      <v-radio
        label="No"
        value="no"
      ></v-radio>
    </v-radio-group>
                          </v-col>

                          
                        </v-row>
                        <v-row>
                          <v-col class='mt-6'>
                            Are Balls Coming Out?
                          </v-col>
                          <v-col>
                            <v-radio-group
      v-model="inline"
      inline
    >
      <v-radio
        label="Yes"
        value="yes"
      ></v-radio>
      <v-radio
        label="No"
        value="no"
      ></v-radio>
    </v-radio-group>
                          </v-col>

                          
                        </v-row>
                        <v-row>
                          <v-col class='mt-8'>
                            Which Screen isn't working?:
                          </v-col>
                          <v-col>
                            <v-radio-group
      v-model="inline"
      inline
    >
      <v-radio
        label="Field Screen"
        value="fs"
      ></v-radio>
      <v-radio
        label="Top Screen"
        value="ts"
      ></v-radio>
      <v-radio
        label="Middle Screen"
        value="ms"
      ></v-radio>
      <v-radio
        label="Bottom Screen"
        value="bs"
      ></v-radio>
      <v-radio
        label="Game Panel"
        value="gp"
      ></v-radio>
    </v-radio-group>
                          </v-col>

                          
                        </v-row>
                        <v-row class='mb-4'>
                          <v-spacer></v-spacer>
                          <v-btn @click="overlay=0"> Send Ticket</v-btn>
                          <v-spacer></v-spacer>
                        </v-row>
                      </v-container>

                    </v-overlay>
        </v-col>
      </v-row>
     </v-container>

    
    </div>
    </template>
    
    
    <script>
    
    export default {
      data() {
        return {
          overlay: 0,
    
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