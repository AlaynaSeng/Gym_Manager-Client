<script setup>
import { ref, watch, onMounted } from "vue";
</script>

<template>
  <div id="groupDiv">
      <form id="groupForm">
          <h2>Fill out this form to join a group!</h2>
          <br>
          <br>
          <h5>Name</h5>
          <input type="text" name="name" id="name" class="form-control" required>
          <br>
          <h5>Schedule</h5>
          <input type="text" name="schedule" id="schedule" class="form-control" required>
          <br>
          <h5>Start Date</h5>
          <input type="text" name="start" id="start" class="form-control" required>
          <br>
          <h5>End Date</h5>
          <input type="text" name="end" id="end" class="form-control" required>
          <br>
          <h5>Instructor</h5>
          <select name="instructor" id="instructor" class="form-control" required></select>
          <br>
          <h5>Client</h5>
          <select name="client" id="client" class="form-control" required></select>
          <br>
          <button type="submit" class="btn btn-primary" id="submitGroup">Submit</button>
      </form>
  </div>
</template>

<style scoped>
input, select{
    width: 30%;
    margin-right: 35%;
    margin-left: 35%;
}

#groupDiv{
    margin-top: 20px;
    text-align: center;
}

#submitGroup{
    width: 100px;
}
</style>