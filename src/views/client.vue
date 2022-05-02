<script setup>
import { ref, watch, onMounted } from "vue";
</script>

<template>
  <div id="clientDiv">
      <form id="clientForm">
          <h2>Fill out this form to become an official member!</h2>
          <br>
          <br>
          <h5>First Name</h5>
          <input type="text" name="fname" id="fname" class="form-control" required>
          <br>
          <h5>Last Name</h5>
          <input type="text" name="lname" id="lname" class="form-control" required>
          <br>
          <h5>Address</h5>
          <input type="text" name="address" id="address" class="form-control" required>
          <br>
          <h5>Phone Number</h5>
          <input type="text" name="phone" id="phone" class="form-control" required>
          <br>
          <h5>Registraition Date</h5>
          <input type="text" name="registraition" id="registraition" class="form-control" required>
          <br>
          <h5>Price</h5>
          <input type="text" name="price" id="price" class="form-control" required>
          <br>
          <button type="submit" class="btn btn-primary" id="submitClient">Submit</button>
      </form>
  </div>
</template>

<style scoped>
input{
    width: 30%;
    margin-right: 35%;
    margin-left: 35%;
}

#clientDiv{
    margin-top: 20px;
    text-align: center;
}

#submitClient{
    width: 100px;
}
</style>