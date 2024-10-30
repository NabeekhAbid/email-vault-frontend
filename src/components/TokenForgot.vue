<template>
  <div class="h-[982px] max-w-[1512px] flex bg-black">
    <!-- Left side with password reset status -->
    <div class="w-[50%] h-full bg-[#F9F9FB] flex pt-[198px] flex-col justify-center items-center">
      <p class="font-sans text-center font-bold text-[40px] text-[#000000] mb-7">
        {{ resetMessage ? resetMessage : "Resetting Password..." }}
      </p>
    </div>

    <!-- Right side with design elements -->
    <div class="h-full flex flex-col items-center pb-32 justify-center w-[50%] bg-custom-gradient">
      <p class="font-bold font-sans text-[40px] text-[#FFFFFF]">Email Vault</p>
      <p class="font-semibold font-sans text-[#FFFFFF] mt-10">
        Our email journaling solution grants you security, compliance, and peace of mind.
      </p>
    </div>
  </div>
</template>

<script>
import { useSignupStore } from '../store/index.js';

export default {
  name: "TokenForgot",
  data() {
    return {
      signupStore: useSignupStore(), // Instance of the signup store
      resetMessage: null,
    };
  },
  async mounted() {
    // Extract the token from the query parameters
    const token = new URLSearchParams(window.location.search).get('token');
    const email = new URLSearchParams(window.location.search).get('email'); // Extract the email as well

    if (token && email) {
      // Call the store action to confirm the password reset
      await this.signupStore.confirmResetPassword(token, this.signupStore.newPassword);
      
      // Set the message based on the store's status
      this.resetMessage = this.signupStore.error || "Your password has been reset successfully!";
      
      // Optionally, redirect to the login page after some time or based on user action
    
        // Adjust the path as necessary
     // Redirect after 3 seconds for a smooth user experience
    } else {
      this.resetMessage = "Invalid password reset link.";
    }
  }
};
</script>

<style lang="scss" scoped>
/* Add any scoped styles here */
</style>
