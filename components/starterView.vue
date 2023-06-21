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
    <v-btn @click="sitBay()" class="mt-5"> Sit Bay </v-btn>  
    <v-overlay v-if="checkcelly == '1'">
      <v-container class="red">
        <v-row>
          <v-col class="mt-6">
            Birthday?
          </v-col>
          <v-col>
            <v-radio-group
      v-model="column"
      column
    >
      <v-radio
        label="Yes"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="No"
        value="radio-2"
      ></v-radio>
    </v-radio-group>
            
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mt-6">
          Celebration?
          </v-col>
          <v-col>
            <v-radio-group
      v-model="column"
      column
    >
      <v-radio
        label="Yes"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="No"
        value="radio-2"
      ></v-radio>
    </v-radio-group>
            
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field label="Name"></v-text-field>

          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field label="Age"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select label="Dessert" :items="['Donuts','Cookie Sundae','Double Chocolate','Ice Cream']"></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="checkcelly = '0'">
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-overlay>
</v-col>
            </v-row>
          
        </v-container>
        <v-container class='accent mt-3'>
          <v-row>
            <v-spacer></v-spacer>
            <v-col>
                              <v-icon class="mr-2">mdi-numeric-3</v-icon>

            </v-col>
            <v-col >
             Third floor
            </v-col>
            <v-col>
                              <v-icon class="mr-2">mdi-numeric-3</v-icon>

            </v-col>
             <v-spacer></v-spacer>
          </v-row>
          <v-row >
            <v-chip class='mt-2 teal'>
              Guest Runner 1: Checking In 301
            </v-chip>
  
          </v-row>
          <v-row >
            <v-chip class='mt-2 red'>
              Guest Runner 2: Available
            </v-chip>
  
          </v-row>
         
        </v-container>

        <v-container class='accent mt-3'>
          <v-row>
            <v-spacer></v-spacer>
            <v-col>
                              <v-icon class="mr-2">mdi-numeric-2</v-icon>

            </v-col>
            <v-col >
             Second floor
            </v-col>
            <v-col>
                              <v-icon class="mr-2">mdi-numeric-2</v-icon>

            </v-col>
             <v-spacer></v-spacer>
          </v-row>
          <v-row >
            <v-chip class='mt-2 red'>
              Guest Runner 3: Available
            </v-chip>
  
          </v-row>
          <v-row >
            <v-chip class='mt-2 red'>
              Guest Runner 4: Available
            </v-chip>
  
          </v-row>
         
        </v-container>
    
</div>
    </template>
    
    
    <script>
    
    export default {
      data() {
        return {
            bays: ['101','102','103','104'],
            experienceName: '',
            checkcelly: '0',

    
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
        async sitBay(){
          this.checkcelly = '1'
            console.log("Do Some Stuff")
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