<script setup>
import { ref, watch, onMounted } from "vue";
    
let groups = ref([]);
let clients = ref([]);
let instructors = ref([]);

onMounted(async () => {
  let res = await fetch("http://localhost:4000/group", { method: "GET" });
  groups.value = await res.json();
  let cres = await fetch("http://localhost:4000/client", {method: "GET",});
  clients.value = await cres.json();
  let ires = await fetch("http://localhost:4000/instructor", {method: "GET",});
  instructors.value = await ires.json();
});

function submitGroup(e) {
  let form = e.target;
  let data = Object.fromEntries(new FormData(form));
  fetch("http://localhost:4000/group", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(data);
}

let nameInput = ref(null);
let scheduleInput = ref(null);
let startInput = ref(null);
let endInput = ref(null);
let instructorInput = ref(null);
let clientInput = ref(null);
let IDInput = ref(null);

function editGroup(group){
  nameInput.value.value = group.name;
  scheduleInput.value.value = group.schedule;
  startInput.value.value = group.start.split("T")[0];
  endInput.value.value = group.end.split("T")[0];
  instructorInput.value.value = group.instructor;
  clientInput.value.value = group.client;
  IDInput.value.value = group._id
  let modal = new bootstrap.Modal(document.querySelector('#edit-group'));
  modal.show();
}

function updateGroup(e){
  let form = e.target;
  let data = Object.fromEntries(new FormData(form));
  fetch(`http://localhost:4000/group/update/${data._id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(data)
}

async function deleteGroup(group) {
const res = await fetch(
    `http://localhost:4000/group/delete/${group._id}`,
    {
      method: "Delete",
      headers: { "content-type": "application/json" },
    }
  );
  location.reload();
}
</script>

<template>
  <div id="groupDiv">
      <form id="groupForm" @submit="submitGroup">
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
          <input type="date" name="start" id="start" class="form-control" required>
          <br>
          <h5>End Date</h5>
          <input type="date" name="end" id="end" class="form-control" required>
          <br>
          <h5>Instructor</h5>
          <select name="instructor" id="instructor" class="form-control" required >
            <option v-for="(instructor) in instructors" :key="instructor._id" :value="instructor.fname">{{instructor.fname}}</option>
          </select>
          <br>
          <h5>Client</h5>
          <select name="client" id="client" class="form-control" required>
            <option v-for="(client) in clients" :key="client._id" :value="client.fname">{{client.fname}}</option>
          </select>
          <br>
          <button type="submit" class="btn btn-primary" id="submitGroup">Submit</button>
      </form>
      <br>
      <br>
      <table class="table" id="groupTable">
  <thead>
    <tr>
      <th>Name</th>
      <th>Schedule</th>
      <th>Start</th>
      <th>End</th>
      <th>Instructor</th>
      <th>Client</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
      <tr  v-for="group in groups" :key="group._id">
        <td>{{group.name}}</td>
        <td>{{group.schedule}}</td>
        <td>{{group.start.split("T")[0]}}</td>
        <td>{{group.end.split("T")[0]}}</td>
        <td>{{group.instructor}}</td>
        <td>{{group.client}}</td>
        <td><button type="button" class="btn btn-success" @click="editGroup(group)">Edit</button></td>
        <td><button type="button" class="btn btn-danger"  @click="deleteGroup(group)">Delete</button></td>
      </tr>
  </tbody>
</table>

<div class="modal fade" id="edit-group" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Update Group</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        <div class="modal-body">
      <form id="groupUpdateForm" @submit="updateGroup">
          <br>
          <h5>Name</h5>
          <input type="text" name="name" id="nname" class="form-control" ref="nameInput" required>
          <br>
          <h5>Schedule</h5>
          <input type="text" name="schedule" id="nschedule" class="form-control" ref="scheduleInput" required>
          <br>
          <h5>Start Date</h5>
          <input type="date" name="start" id="nstart" class="form-control" ref="startInput" required>
          <br>
          <h5>End Date</h5>
          <input type="date" name="end" id="nend" class="form-control" ref="endInput" required>
          <br>
          <h5>Instructor</h5>
          <select name="instructor" id="ninstructor" class="form-control" ref="instructorInput" required >
            <option v-for="(instructor) in instructors" :key="instructor._id" :value="instructor.fname">{{instructor.fname}}</option>
          </select>
          <br>
          <h5>Client</h5>
          <select name="client" id="nclient" class="form-control" ref="clientInput" required>
            <option v-for="(client) in clients" :key="client._id" :value="client.fname">{{client.fname}}</option>
          </select>
          <br>
              <input type="hidden" name="_id" id="_id" ref="IDInput">
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
            </form>
          </div>
        </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
input, select{
    width: 30%;
    margin-right: 35%;
    margin-left: 35%;
    text-align: center;
}

#nname, #nschedule, #nstart, #nend, #ninstructor, #nclient{
  width: 60%;
  margin-left: 20%;
}

#groupDiv{
    margin-top: 20px;
    text-align: center;
}

#submitGroup{
    width: 100px;
}
</style>