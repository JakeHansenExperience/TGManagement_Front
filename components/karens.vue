<template>
<div>
<v-container class='accent'>
    <v-row>
        <v-col>
                    <v-img src="/Untitled.png" height="60" width="60"> </v-img>

        </v-col>
        <v-col>
            Karen Encounters
        </v-col>
        <v-col>
                    <v-img src="/Untitled.png" height="60" width="60"> </v-img>

        </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-img src="/notfriends.webp"> </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col class=" mt-7">
                    Sort By:
                </v-col>
                <v-col>
                    <v-radio-group inline>
                        <v-radio label="Day" value="1"></v-radio>
                        <v-radio label="Month" value="2"></v-radio>
                        <v-radio label="All-Time" value="3"></v-radio>

                    </v-radio-group>
                </v-col>
        </v-row>
        
</v-container>

   <!-- title: String, 
    description: String,
    playmaker: String,
    date: String,
    onGods: Number, -->

<v-container >
    <v-row v-for="karen in karens">
        <v-col>
    <HelpersKarenCard :title="karen.title" :description="karen.description" :playmaker="karen.playmaker" :date="karen.date" :onGods="karen.onGods" :karenID="karen.id"></HelpersKarenCard>
    </v-col>
    
    </v-row>
    
</v-container>

</div>
</template>


<script>

export default {
  data() {
    return {
        karens: {},

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
    async grabKarenData() {
      const response = await this.$axios.$get('/api/karens');
      this.karens = response
      console.log("Karens")
      console.log(this.karens)
    },

    

},
//Lifecycle Hooks: beforeCreate, created, beforeMount, mounted, beforeUPdate, updated, beforeDestroy, destroyed
mounted() {
  console.log("MountedBaby");
  this.grabKarenData();

  console.log("CalledThatData")


}

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