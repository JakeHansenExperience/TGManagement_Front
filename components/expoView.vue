<template>
    <div>
        <v-container class="accent">
            <v-row>
<v-col>
                <v-select
  label="Select"
  :items="bays"
></v-select>
</v-col>
<v-col>
    <v-btn class="mt-5"> Send Food </v-btn>  

</v-col>
            </v-row>
          
        </v-container>
        <v-container class='accent mt-3'>
          <v-row>
            <v-spacer></v-spacer>
            <v-col>
                              <v-icon class="mr-2">mdi-run</v-icon>

            </v-col>
            <v-col >
              Currently Running
            </v-col>
            <v-col>
                              <v-icon class="mr-2">mdi-run-fast</v-icon>

            </v-col>
             <v-spacer></v-spacer>
          </v-row>
          <v-row >
            <v-chip class='mt-2 green'>
              Runner 1: 1 min
            </v-chip>
  
          </v-row>
          <v-row >
            <v-chip class='mt-2 green' >
              Runner 2: 3 mins
            </v-chip>
          </v-row>
          <v-row >
            <v-chip class='mt-2 green'>
              Runner 3: 7 mins
            </v-chip>
          </v-row>
        </v-container>
        <v-container class='accent mt-3'>
          <v-row>
            <v-spacer></v-spacer>
            <v-col>
                              <v-icon class="mr-2">mdi-restart</v-icon>

            </v-col>
            <v-col >
              Runners Queue
            </v-col>
            <v-col>
                              <v-icon class="mr-2">mdi-restart</v-icon>

            </v-col>
             <v-spacer></v-spacer>
          </v-row>
          <v-row >
            <v-chip class='mt-2 red'>
              Runner 5: 10 Orders, 22 Stairs
            </v-chip>
  
          </v-row>
          <v-row >
            <v-chip class='mt-2 red'>
              Runner 6: 8 Orders, 14 Stairs
            </v-chip>
          </v-row>
          <v-row >
            <v-chip class='mt-2 red'>
              Runner 7: 19 Orders, 16 Stairs
            </v-chip>
          </v-row>
        </v-container>
        <v-container class='accent mt-3'>
          <v-row>
            <v-spacer></v-spacer>
            <v-col>
                              <v-icon class="mr-2">mdi-broom</v-icon>

            </v-col>
            <v-col >
             Side Work
            </v-col>
            <v-col>
                              <v-icon class="mr-2">mdi-broom</v-icon>

            </v-col>
             <v-spacer></v-spacer>
          </v-row>
          <v-row >
            <v-chip class='mt-2 green'>
              Runner 4: Sauces
            </v-chip>
  
          </v-row>
        
        </v-container>
    
</div>
    </template>
    
    
    <script>
    
    export default {
      data() {
        return {
            bays: ['101','102','103','104']
    
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