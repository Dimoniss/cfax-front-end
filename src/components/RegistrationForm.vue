<script>
export default {
  name: 'RegistrationForm',
  data() {
    return {}
  }
}
</script>

<template>
  <div
    class="flex-col flex gap-2 border border-slate-500 rounded-xl shadow px-2 py-1 bg-gray-300 h-120 w-80"
  >
    <h1>Registration</h1>
    <input type="Name" class="border border-slate-500 rounded-md" />
    <input type="Lastname" class="border border-slate-500 rounded-md" />
    <input type="Email" class="border border-slate-500 rounded-md" />
    <input type="Password" class="border border-slate-500 rounded-md" />
    <button class="bg-blue-400 text-white rounded-md px-2 py-1 hover:bg-blue-500">
      Registration
    </button>
  </div>
</template>
