<template>
  <div class="h-[982px] max-w-[1512px] flex bg-black">
    <div
      class="w-[50%] h-full bg-[#F9F9FB] flex pt-[198px] flex-col justify-between items-center"
    >
      <div class="bg-[#F9F9FB] mb-28 p-4 w-96 mr-20">
        <h1
          class="font-sans font-bold text-[#000000] text-[40px] leading-[41px] tracking-[0.3px] text-left mb-2"
        >
          Sign In
        </h1>
        <p
          class="font-sans text-[12px] font-regular pb-7 pt-2 leading-[15px] tracking-[0.2px] text-left text-[#000000CC] opacity-[80%]"
        >
          Welcome to Email Vault, please enter your login credentials below to
          start using the application.
        </p>
        <form @submit.prevent="handleLogin">
          <div class="mb-10">
            <label
              for="email"
              class="block text-sm text-left mb-2 font-medium text-[#6C757D]"
            >
              Email
            </label>
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              class="mt-1 block w-full p-2 pl-3 border border-[#0000004D] border-opacity-[30%] bg-[#F9F9FB] placeholder:text-sm rounded-md focus:outline-none focus:border-[#592858]"
              required
            />
          </div>
          <div class="mb-1">
            <label
              for="password"
              class="block text-sm text-left mb-2 font-medium text-[#6C757D]"
            >
              Password
            </label>
            <div class="relative">
              <input
                v-model="password"
                :type="isPasswordVisible ? 'text' : 'password'"   
                id="password"
                placeholder="Enter your password"
                class="mt-1 block w-full p-2 pl-3 border border-[#0000004D] border-opacity-[30%] bg-[#F9F9FB] placeholder:text-sm rounded-md focus:outline-none focus:border-[#592858]"
                required
              />
              <span
                @click="togglePasswordVisibility"
                class="material-icons cursor-pointer absolute z-10 right-3 top-[6px] text-2xl text-[#592858]"
              >  
                {{ isPasswordVisible ? 'visibility_off' : 'visibility' }}
              </span>
            </div>
          </div>
          <div class="mb-2 text-right">
            <router-link to="/forgot-password" href="#" class="font-sans text-[12px] font-normal leading-[41px] tracking-[0.3px] text-left text-[#592858]">Forgot password?</router-link>
          </div>
          <div class="ml-[227px] mt-5">
            <button type="submit" class="bg-[#592858] text-sm text-white w-[132px] h-[38px] rounded-md">Sign In</button>
          </div>
          <p v-if="error" class="text-red-500">{{ error }}</p>
        </form>
        <hr class="mt-14 mb-6 border-[#0000004D] border-opacity-[30%]">
        <router-link to="/create-account" class="text-center leading-[41px] tracking-[0.3px] text-[14px] text-[#000000]">
         Don't have an account? <a href="" class="font-bold cursor-pointer text-[#592858]">Create account</a> 
        </router-link>
      </div>
      <p class="mr-20 pb-2 font-sans text-[12px] leading-[19px] tracking-[0.14px]">
        © 2023 Email Vault, Inc. All rights reserved | <span class="text-[#592858] font-bold tracking-[0.14px] leading-[19px] ">support@emailvault.app</span> 
      </p>
    </div>
    <div class="h-full flex flex-col items-center pb-32 justify-center w-[50%] bg-custom-gradient">
       <div class="flex flex-col items-center justify-center">
        <div class="">
            <img src="https://s3-alpha-sig.figma.com/img/e13c/fa6e/9f443a41be5c43c86c3900e5271c47ec?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n3Nx88UwqAqZdyM~sMCa~4Yq4~fV9bV~JzGSMoMA0riiWjHy0t5v9Mk3x~NsX61qD0PnLbRO1kBMY-zdx7Z-ExqCQOJWsGKtUlhW0pxTPee3RvpgtmjKqox5lA8gdd5GC9OEOkud8H9gnDRJIxvDbHiHltmDWnT8VzMijSulnuIMQTIqOhGTRxRgRJJXflgCxiZwDI930NwjTVl0RWByMoYFSm6MdQ9F61AxbX8uXxVA5TVmCoLqU-8~~2AWjaYSO7uERp4A2eJCUb51d2jWKSTy3OoV3xWeXhkKWvtcXx3waEyLSpJR6zyulP5TjvYNJqWSjhVdEYJ0tx1WMbVcPA__" alt="" class="h-[343px] w-[473px]">
        </div>
        <div class="mt-16">
            <p class="font-bold font-sans text-[40px] tracking-[0.3px] leading-[41px] text-[#FFFFFF]">Email Vault</p>
        </div>
        <div class="mt-10 ml-8">
          <p class="font-semibold w-[370px] h-[46px] font-sans text-[#FFFFFF] leading-[23px] text-[17px] tracking-[0.14px]">Our email journaling solution grants you security, compliance, and peace of mind.</p>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
import { useSignupStore } from '../store/index.js'; // Ensure this path is correct

export default {
  name: "UserLogin",
  data() {
    return {
      isPasswordVisible: false,
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    async handleLogin() {
      const store = useSignupStore(); // Get the store instance
      await store.login(this.email, this.password); // Call the login method
      this.error = store.error; // Set error from the store if any
      if (!this.error) {
        // Optionally redirect or perform additional actions upon successful login
        this.$router.push('/dashboard'); // Redirect to dashboard or home page
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
