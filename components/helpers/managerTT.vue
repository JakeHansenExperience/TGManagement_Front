<template>
    <div>
        <v-container class="accent mt-2">
            <v-row>
                <v-spacer></v-spacer>
                <v-col>
                    Table Touches
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
  >
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      :bay="item.bay"
      fill-dot
    >
    <v-container class="indigo">
        <v-row>
            <v-col>
                {{ item.bay }}
               
            </v-col>
            <v-col v-if="item.bay == '101'">
                <v-chip> Water Bay</v-chip>
                <v-chip> Platinum Member</v-chip>
            </v-col>
            <v-col v-if="item.bay=='102'">
            <v-chip> Birthday Party</v-chip></v-col>
        </v-row>
    </v-container>
      
    </v-timeline-item>
  </v-timeline>
            </v-row>
        </v-container>
    

  <v-container>
    <v-row>
      <v-col>
        <v-img src="/Untitled.png" height="100" width="100"> </v-img>
      </v-col>
      <v-col>
             <v-btn class="mt-8"> Report A Karen </v-btn>
      </v-col>
      
    </v-row>

  </v-container>

    </div>
    </template>
    
    
    <script>
    
    export default {
      data() {
        return {
            items: [
        {
          color: 'indigo darken-3',
          icon: 'mdi-golf',
          bay: '101',
        },
        {
          color: 'indigo darken-3',
          icon: 'mdi-golf',
          bay: '102'
        },
        {
          color: 'indigo darken-3',
          icon: 'mdi-golf',
          bay: '103'
        },
        {
          color: 'indigo darken-3',
          icon: 'mdi-golf',
          bay: '104'
        },
      ],
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