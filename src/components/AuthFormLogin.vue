<template>
  <form
    class="flex-col flex gap-2 border border-slate-500 rounded-xl shadow px-2 py-1 bg-gray-400 h-40 w-56"
  >
    <div class="flex items-center gap-2">
      <img src="/icon/user_icon.png" alt="User" class="w-7" />
      <h3>Login</h3>
    </div>
    <div class="flex-col flex gap-2">
      <input
        type="email"
        class="border border-slate-500 rounded-md form-control pl-2"
        placeholder="Email"
      />
      <input
        type="password"
        class="border border-slate-500 rounded-md form-control pl-2"
        placeholder="Password"
      />
    </div>
    <div class="flex justify-between">
      <div class="flex flex-col">
        <a class="text-sm text-gray-500 hover:text-black cursor-pointer" href="#">Registration</a>
        <a class="text-sm text-gray-500 hover:text-black cursor-pointer" href="#"
          >Forgot password?</a
        >
      </div>
      <div>
        <button
          class="bg-blue-400 text-white rounded-md px-2 py-1 hover:bg-blue-500 btn btn-primary btn-block"
        >
          Login
        </button>
      </div>
    </div>
  </form>
</template>
