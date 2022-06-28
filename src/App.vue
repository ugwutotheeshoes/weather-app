<template>
  <h1>hi</h1>
  <h1>{{ corn }}</h1>
</template>

<script>
import axios from "axios";
import db from "./firebase/firebase";
// import { collection } from "firebase/firestore";
export default {
  name: "App",
  components: {},
  data() {
    return {
      APIkey: "518ec43a769b3d7b14a3d5b1c476bbf1",
      city: "Detroit",
      cities: [],
      corn: null,
    };
  },
  created() {
    // this.getCurrentWeather();
    this.getCityWeather();
  },
  methods: {
    getCityWeather() {
      //   const querySnapshot = getDocs(collection(db, "cities"));
      //   querySnapshot.forEach((doc) => {
      //     console.log(`${doc.id} => ${doc.data()}`);
      //   });


      let firebaseDB = db.collection("cities")

      firebaseDB.onSnapshot(snap => {
        snap.docChanges().forEach(async(doc) => {
          console.log(doc);
        });
      });
      //       const snapshot = db.collection('users').get();
      // snapshot.forEach((doc) => {
      //   console.log(doc.id, '=>', doc.data());
      // });
    },
    getCurrentWeather() {
      // const axios = require("axios");
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.APIkey}`
        )
        .then((res) => {
          console.log(res.data);
          // this.corn = res.data;
        });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
