<template>
<div>
<v-container class="accent">
    <v-row>
        <v-spacer></v-spacer>
        <v-col>
           
            Birthdays / Celebrations
            
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
  
    <v-row >
        <v-col>
            First Floor
            
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-expansion-panels>
               
                <v-expansion-panel>
                     <!-- <v-expansion-panel-title icon="mdi-cake"> -->
                    <v-expansion-panel-header expand-icon="mdi-cake">
                       
                        8:45 PM 
                      
                    </v-expansion-panel-header>
                      <!-- </v-expansion-panel-title> -->
                    <v-expansion-panel-content>
                        <v-container class="indigo">
                            <v-row>
                                <v-col>
                                    Birthday: Bay 116
                                  
                                    </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    Name: Evan
                                  
                                    </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    Age: 16
                                  
                                    </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    Dessert: Double Chocolate
                                  
                                    </v-col>
                            </v-row>
                          
                        </v-container>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </v-row>
      <v-row >
        <v-col>
            Second Floor
            
        </v-col>
    </v-row>
     <v-row>
        <v-col>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        8:00 PM 
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container>
                            <v-row>
                                <v-col>
                                    Bay 202: Mike, Age  29
                                    <v-icon> mdi-cake </v-icon>
                                    </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    Bay 229: Mave, Age 32
                                </v-col>
                                <v-icon> mdi-cake </v-icon>
                            </v-row>
                        </v-container>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header expand-icon="mdi-party-popper">
                        8:45 PM 
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container class="darkpink">
                            <v-row>
                                <v-col>
                                    Celebration Bay 226
                                  
                                    </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    Title: "Boys Are Back in Town!!!"
                                    </v-col>
                            </v-row>
                          
                        </v-container>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </v-row>
    <v-row >
        <v-col>
            Third Floor
            
        </v-col>
    </v-row>
     <v-row>
        <v-col>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        8:00 PM 
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container>
                            <v-row>
                                <v-col>
                                    Bay 324: Mike, Age  29
                                    <v-icon> mdi-cake </v-icon>
                                    </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    Bay 329: Mave, Age 32
                                </v-col>
                                <v-icon> mdi-cake </v-icon>
                            </v-row>
                        </v-container>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        8:45 PM 
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container>
                            <v-row>
                                <v-col>
                                    Bay 326: The Boys Are Back In Town!
                                  
                                    </v-col>
                            </v-row>
                          
                        </v-container>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </v-row>
      <v-row>
        <v-col>
                    <v-img src="/party time.gif" > </v-img>

        </v-col>
    </v-row>
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