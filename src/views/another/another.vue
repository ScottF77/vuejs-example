<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>App Links</h2>
    <app-navigation></app-navigation>
    <button @click="changeMessage">Change Message</button>
    <br>
    <h2 v-show="message">Message set</h2>
    <input type="text" v-model="message">
    <app-message :text="message"></app-message>
    <br>
    <button @click="increment">Increment</button>
    <p>Counter: {{ counter }}</p>
    <p>Clicks {{ clicks }}</p>
    <br>
    <button @click="show = !show">Show / Hide</button>
    <p v-if="show">Part-time visible</p>
    <p v-else>Visible?</p>
    <hr>
    <app-list :users="getUsersUnderForty"></app-list>
    <h2>Add User</h2>
    <input type="text" v-model="addUserText">
    <app-button
      :buttonText="'Add User'"
      v-on:emitClick="parentMethodName"></app-button>

  </div>
</template>

<script src="./another.js"></script>

<style scoped lang="scss" src="./another.scss"></style>
