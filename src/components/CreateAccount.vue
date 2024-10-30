<template>
  <div class="h-[982px] max-w-[1512px] flex bg-black">
    <div class="w-[50%] h-full bg-[#F9F9FB] flex pt-28 flex-col justify-between items-center">
      <div>
        <p class="font-bold pr-32 text-[40px] pb-6 tracking-[0.3px] font-sans text-black leading-[41px]">Create Account</p>
        <p class="text-left w-[418.67px] text-[15px] mb-4 h-[48px] font-regular font-sans leading-[19px] tracking-[0.14px] text-[#000000] opacity-[80%]">
          Welcome to Email Vault, please enter your details below to create an account.
        </p>
        <div class="w-[413px] h-[440px]">
          <div class="mb-3 text-left">
            <label for="first-name" class="block text-[#6C757D] mb-1 text-[14px]">
              First Name <span class="text-[#571158]">*</span>
            </label>
            <input
              type="text"
              id="first-name"
              placeholder="Enter your first name"
              v-model="form.firstName"
              class="w-[413px] custom-input bg-[#F9F9FB] h-[39px] border border-black border-opacity-[30%] rounded-[6px] p-[10px] gap-[10px]"
            />
          </div>
          <div class="mb-3 text-left">
            <label for="last-name" class="block text-[#6C757D] mb-1 text-[14px]">
              Last Name <span class="text-[#571158]">*</span>
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="Enter your last name"
              v-model="form.lastName"
              class="w-[413px] custom-input bg-[#F9F9FB] h-[39px] border border-black border-opacity-[30%] rounded-[6px] p-[10px] gap-[10px]"
            />
          </div>
          <div class="mb-3 text-left">
            <label for="company-name" class="block text-[#6C757D] mb-1 text-[14px]">
              Company Name <span class="text-[#571158]">*</span>
            </label>
            <input
              type="text"
              id="company-name"
              placeholder="Enter your company name"
              v-model="form.companyName"
              class="w-[413px] custom-input bg-[#F9F9FB] h-[39px] border border-black border-opacity-[30%] rounded-[6px] p-[10px] gap-[10px]"
            />
          </div>
          <div class="mb-3 text-left">
            <label for="email" class="block text-[#6C757D] mb-1 text-[14px]">
              Email <span class="text-[#571158]">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              v-model="form.email"
              class="w-[413px] custom-input bg-[#F9F9FB] h-[39px] border border-black border-opacity-[30%] rounded-[6px] p-[10px] gap-[10px]"
            />
          </div>
            <div class="mb-3 text-left relative">
                <label for="password" class="block text-[#6C757D] mb-1 text-[14px]">
                Password <span class="text-[#571158]">*</span>
                </label>
                <input
                :type="isPasswordVisible ? 'text' : 'password'"
                id="password"
                @focus="showRequirements = true"
                @blur="showRequirements = false"
                v-model="form.password"
                placeholder="Enter your password"
                class="w-[413px] custom-input bg-[#F9F9FB] h-[39px] border border-black border-opacity-[30%] rounded-[6px] p-[10px] gap-[10px]"
                />
            <span
                    @click="togglePasswordVisibility"
                    class="material-icons  cursor-pointer  absolute z-10 right-3 top-[28px] text-2xl text-[#592858]"
                    >  {{ isPasswordVisible ? 'visibility_off' : 'visibility' }}
                    </span>
            </div>
          <div class="mb-3 text-left">
            <label for="referral-code" class="block text-[#6C757D] mb-1 text-[14px]">
              Referral Code
            </label>
            <input
              type="text"
              id="referral-code"
              placeholder="Enter your referral-code"
              class="w-[413px] custom-input bg-[#F9F9FB] h-[39px] border border-black border-opacity-[30%] rounded-[6px] p-[10px] gap-[10px]"
            />
          </div>
        </div>
        <div class="flex justify-between flex-col">
          <div class="w-[305px] h-[24px] pt-6 flex text-center items-center">
            <input
              type="checkbox"
              v-model="is_verified"
              class="mr-2 w-4 h-4 border-2 border-[#571158] accent-[#571158] rounded"
            />
            <label class="font-sans text-[12px] leading-[24px] tracking-[-0.2px] text-[#2D3643]">
              I agree to the
              <span class="text-[#571158] underline cursor-pointer">Terms and Conditions</span>
              and
              <span class="text-[#571158] underline cursor-pointer">Privacy Policy</span>
            </label>
          </div>
         <div class="w-[157px] h-[38px] mt-10 ml-64">
  <button
    :disabled="!(allFieldsFilled && allRequirementsMet)"
    class="h-full w-full rounded font-sans text-[14px] tracking-[0.3px] text-white"
    :style="{
      backgroundColor: allFieldsFilled && allRequirementsMet ? '#571158' : '#00000040',
      pointerEvents: (allFieldsFilled && allRequirementsMet) ? 'auto' : 'none'
    }"
    @click="submitForm"
  >
    Continue
  </button>
</div>
        </div>
        <div class="w-[420px] border mt-5 border-black border-opacity-[30%]"></div>
        <div class="font-sans mt-6 text-[14px] tracking-[0.3px] text-[#606060] text-center">
          Ready to Partner with us as an MSP?
          <span class="text-[#571459] font-bold">Sign Up here</span>
        </div>
        <div class="font-sans font-bold mt-6 text-[14px] tracking-[0.3px] text-[#606060] text-center">
          already have an account?
          <router-link to="/">
            <span class="text-[#571459] cursor-pointer font-bold">Sign In</span>
          </router-link>
        </div>
      </div>
      <p class="mr-20 pb-2 font-sans text-[12px] leading-[19px] tracking-[0.14px]">
        © 2023 Email Vault, Inc. All rights reserved |
        <span class="text-[#592858] font-bold tracking-[0.14px] leading-[19px]">support@emailvault.app</span>
      </p>
    </div>
    <div class="h-full flex flex-col items-center pb-32 justify-center w-[50%] bg-custom-gradient">
      <div class="flex flex-col items-center justify-center">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/e13c/fa6e/9f443a41be5c43c86c3900e5271c47ec?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n3Nx88UwqAqZdyM~sMCa~4Yq4~fV9bV~JzGSMoMA0riiWjHy0t5v9Mk3x~NsX61qD0PnLbRO1kBMY-zdx7Z-ExqCQOJWsGKtUlhW0pxTPee3RvpgtmjKqox5lA8gdd5GC9OEOkud8H9gnDRJIxvDbHiHltmDWnT8VzMijSulnuIMQTIqOhGTRxRgRJJXflgCxiZwDI930NwjTVl0RWByMoYFSm6MdQ9F61AxbX8uXxVA5TVmCoLqU-8~~2AWjaYSO7uERp4A2eJCUb51d2jWKSTy3OoV3xWeXhkKWvtcXx3waEyLSpJR6zyulP5TjvYNJqWSjhVdEYJ0tx1WMbVcPA__"
            alt=""
            class="h-[343px] w-[473px]"
          />
        </div>
        <div class="mt-16">
          <p class="font-bold font-sans text-[40px] tracking-[0.3px] leading-[41px] text-[#FFFFFF]">Email Vault</p>
        </div>
        <div class="w-[427px] mt-5">
          <p class="text-center leading-[20px] text-[15px] text-[#FFFFFF] opacity-[80%]">
            Securing your digital communication with powerful encryption, user-friendly email, and advanced threat
            protection.
          </p>
        </div>
      </div>
    </div>
  <div v-if="showRequirements" class="w-[282px] h-[194px] top-[70%] left-[39%] shadow-lg bg-white absolute z-10">
      <div class="p-4">
        <p class="font-sans text-left text-[12px] tracking-[-0.2px] leading-[20px] font-bold text-black">
          Please fulfill the below requirements:
        </p>
        <div class="font-sans p-1 text-[12px] text-center flex justify-between items-center"
          :class="{ 'text-[#42A496]': isLengthValid, 'text-[#FC5A5A]': !isLengthValid }">
          <p>At least 8 characters in length</p>
          <div class="flex justify-center items-center ">
            <span class="material-icons flex items-center pt-1 pl-[1px] text-sm w-[16px] h-[16px] pb-[4px] text-white"
              :class="isLengthValid ? 'bg-[#42A496] rounded-full' : 'bg-[#FC5A5A] rounded-full'">
              {{ isLengthValid ? 'check' : 'close' }}
            </span>
          </div>
        </div>
        <div class="font-sans p-1 text-[12px] text-center flex justify-between items-center"
          :class="{ 'text-[#42A496]': isUpperCaseValid, 'text-[#FC5A5A]': !isUpperCaseValid }">
          <p>At least 1 Uppercase letter</p>
          <div class="flex justify-center items-center ">
            <span class="material-icons flex items-center pt-1 pl-[1px] text-sm w-[16px] h-[16px] pb-[4px] text-white"
              :class="isUpperCaseValid ? 'bg-[#42A496] rounded-full' : 'bg-[#FC5A5A] rounded-full'">
              {{ isUpperCaseValid ? 'check' : 'close' }}
            </span>
          </div>
        </div>
        <div class="font-sans p-1 text-[12px] text-center flex justify-between items-center"
          :class="{ 'text-[#42A496]': isLowerCaseValid, 'text-[#FC5A5A]': !isLowerCaseValid }">
          <p>At least 1 Lowercase letter</p>
          <div class="flex justify-center items-center ">
            <span class="material-icons flex items-center pt-1 pl-[1px] text-sm w-[16px] h-[16px] pb-[4px] text-white"
              :class="isLowerCaseValid ? 'bg-[#42A496] rounded-full' : 'bg-[#FC5A5A] rounded-full'">
              {{ isLowerCaseValid ? 'check' : 'close' }}
            </span>
          </div>
        </div>
        <div class="font-sans p-1 text-[12px] text-center flex justify-between items-center"
          :class="{ 'text-[#42A496]': isNumberValid, 'text-[#FC5A5A]': !isNumberValid }">
          <p>At least 1 number</p>
          <div class="flex justify-center items-center ">
            <span class="material-icons flex items-center pt-1 pl-[1px] text-sm w-[16px] h-[16px] pb-[4px] text-white"
              :class="isNumberValid ? 'bg-[#42A496] rounded-full' : 'bg-[#FC5A5A] rounded-full'">
              {{ isNumberValid ? 'check' : 'close' }}
            </span>
          </div>
        </div>
        <div class="font-sans p-1 text-[12px] text-center flex justify-between items-center"
          :class="{ 'text-[#42A496]': isSpecialCharValid, 'text-[#FC5A5A]': !isSpecialCharValid }">
          <p>At least 1 special character</p>
          <div class="flex justify-center items-center ">
            <span class="material-icons flex items-center pt-1 pl-[1px] text-sm w-[16px] h-[16px] pb-[4px] text-white"
              :class="isSpecialCharValid ? 'bg-[#42A496] rounded-full' : 'bg-[#FC5A5A] rounded-full'">
              {{ isSpecialCharValid ? 'check' : 'close' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSignupStore } from '../store/index.js';
export default {
  data() {
    return {
      isPasswordVisible: false,
      form: {
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        password: "",
        referralCode: ""
      },
      is_verified: false,
      signupStore: useSignupStore(), // Create an instance of the signup store
    };
  },
  computed: {
    allFieldsFilled() {
      return (
        this.form.firstName &&
        this.form.lastName &&
        this.form.companyName &&
        this.form.email &&
        this.form.password
     
      );
    },
    showRequirements() {
      return this.form.password.length > 0 && !this.allRequirementsMet;
    },
    allRequirementsMet() {
      return (
        this.isLengthValid &&
        this.isUpperCaseValid &&
        this.isLowerCaseValid &&
        this.isNumberValid &&
        this.isSpecialCharValid
      );
    },
    isLengthValid() {
      return this.form.password.length >= 8;
    },
    isUpperCaseValid() {
      return /[A-Z]/.test(this.form.password);
    },
    isLowerCaseValid() {
      return /[a-z]/.test(this.form.password);
    },
    isNumberValid() {
      return /\d/.test(this.form.password);
    },
    isSpecialCharValid() {
      return /[!@#$%^&*(),.?":{}|<>]/.test(this.form.password);
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    async submitForm() {
      if (this.allFieldsFilled && this.allRequirementsMet) {
        try {
          await this.signupStore.signup(
            this.form.firstName,
            this.form.lastName,
            this.form.companyName,
            this.form.email,
            this.form.password
          );
          console.log("Form submitted successfully!", this.signupStore.user);
                 this.$router.push({
          path: '/email-verify',
          query: { email: this.form.email },
        });

          // You can redirect or show a success message here
        } catch (error) {
          console.error("Error during signup:", error);
          // Optionally show error message to user
        }
      } else {
        console.log("Please fill all required fields and accept terms.");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.custom-input {
  outline: none;
  border-width: 2px;
}
.custom-input:focus {
  border-color: #571459;
}
</style>














