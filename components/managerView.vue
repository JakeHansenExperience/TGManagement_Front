<template>
    <div>
        <v-container>
            <v-container class="accent">
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col >Manager Name</v-col>
                    <v-spacer></v-spacer>
                </v-row>     
            </v-container>
            
            <div v-if="curTab == 'alerts'">
            <HelpersManagerAlerts></HelpersManagerAlerts>
            </div>
            <div v-if="curTab == 'tt'">
            <HelpersManagerTT></HelpersManagerTT>
            </div>
            <div v-if="curTab == 'break'">
            <HelpersManagerBreakroom></HelpersManagerBreakroom>
            </div>
            <div v-if="curTab == 'settings'">
            <HelpersBayhostSettings></HelpersBayhostSettings>
            </div>
        <v-bottom-navigation class="accent fixed-bottom mt-2">
  <v-btn value="alerts" @click="changeTab('alerts')">
    <v-icon>mdi-golf</v-icon>
    Alerts
  </v-btn>
 
  <v-btn value="TT" @click="changeTab('tt')">
    <v-icon>mdi-golf</v-icon>
    TT
  </v-btn>
  <v-btn value="break" @click="changeTab('break')">
    <v-icon>mdi-golf</v-icon>
    Breakroom
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
            userName: "Manager Name",
            baysInWeeds: {},
            curTab: "alerts"
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
        changeTab(value){
            this.curTab = value
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
    mounted(){
        this.$axios.$get('/api/inDaWeeds/').then(response => (this.baysInWeeds = response))
        // const ip = await this.$axios.$put('/api/inDaWeeds/', {
        //         playmaker: 'thisUser',
        //     })

    //     axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response))
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
    