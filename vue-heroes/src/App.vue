<template>
  <main id="app-container">
    <h1>Tour of Heroes</h1>
    <ul id="navbar">
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path" active-class="active" exact>
          {{ route.label }}
        </router-link>
      </li>
    </ul>
    <router-view />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Application",
})
export default class Application extends Vue {
  routes = [
    { path: "/", label: "Dashboard" },
    { path: "/heroes", label: "Heroes" },
  ];
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%; /* 1rem = 10px */
}

body {
  overflow: hidden;
  color: #ffffff;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

ul {
  list-style: none;
}

a {
  outline: none;
  text-decoration: none;
  color: inherit;
}

#app-container {
  background-color: #2c3e50;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2rem;
}

h1 {
  font-size: 4.8rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 3.8rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #ecf0f1;
}

#navbar {
  display: flex;
  margin-bottom: 3rem;
}

#navbar > li {
  font-size: 1.6rem;
  background-color: #34495e;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
}

#navbar > li:first-of-type {
  margin-right: 1.5rem;
}

#navbar > li > a.active {
  color: #3498db;
}

.dashboard-heroes {
  display: flex;
  justify-content: space-between;
}

.dashboard-hero {
  display: block;
  width: 100%;
  padding: 0 1.5rem;
}

.dashboard-hero > div {
  padding: 7rem 0;
  background-color: #34495e;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 2.5rem;
  cursor: pointer;
}

.dashboard-hero > div:hover {
  color: #3498db;
}

.list-hero {
  display: inline-flex;
  background-color: #34495e;
  margin-bottom: 1rem;
  align-items: center;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  cursor: pointer;
}

.list-hero:hover {
  transform: translateX(5px);
}

.list-hero:hover > p {
  color: #3498db;
}

.list-hero > span {
  font-size: 1.4rem;
  font-weight: bold;
  padding: 1rem;
  background-color: #3498db;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.list-hero > p {
  padding: 0 1rem;
  font-size: 1.6rem;
}

.input {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.input > label {
  font-size: 1.6rem;
  width: 50px;
}

.input > input {
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
}

.back-btn {
  padding: 1rem 3rem;
  background-color: #34495e;
  border-radius: 0.8rem;
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.back-btn:hover {
  color: #3498db;
}

.back-btn:disabled {
  color: gray !important;
  pointer-events: none;
}
</style>
