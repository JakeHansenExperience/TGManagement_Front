<template>
<div class="text-subtitle-2">
    <v-container class='accent'>
        <v-row>
            <v-col>
                Title: {{title}}
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                Description: {{description}}
                </v-col>
            </v-row>
            <v-row>
            <v-col>
                Playmaker: {{playmaker}}
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                    {{onGods}} <v-icon @click="addOnGod()"> mdi-arrow-up-bold </v-icon> <v-icon> mdi-arrow-down-bold-outline </v-icon> 
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
    title: String, 
    description: String,
    playmaker: String,
    date: String,
    onGods: Number,
    karenID: Number,
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
    async addOnGod(){
      // const params = {
      //   karen_id: `1`
      // };
      // const ip = await this.$axios.$put('/api/updateKarenOnGods', {params} );
      // this.ip = ip
        this.$axios.$put('/api/updateKarenOnGods', {
         karen_id: '1', 
        }).then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        })
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