<script setup>
import { ref, watch, onMounted } from "vue";
</script>

<template>
  <div id="instructorDiv">
      <form id="instructorForm">
          <h2>Fill out this instructors' form to become official!</h2>
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
          <h5>Specialty</h5>
          <input type="text" name="specialty" id="specialty" class="form-control" required>
          <br>
          <button type="submit" class="btn btn-primary" id="submitInstructor">Submit</button>
      </form>
  </div>
</template>

<style scoped>
input{
    width: 30%;
    margin-right: 35%;
    margin-left: 35%;
}

#instructorDiv{
    margin-top: 20px;
    text-align: center;
}

#submitInstructor{
    width: 100px;
}
</style>