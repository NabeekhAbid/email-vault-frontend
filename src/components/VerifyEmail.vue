
 <template>
  <div class="h-[982px] max-w-[1512px] flex bg-black">
    <!-- Left side with email verification status -->
    <div class="w-[50%] h-full bg-[#F9F9FB] flex pt-[198px] flex-col justify-center items-center">
      <p class="font-sans text-center font-bold text-[40px] text-[#000000] mb-7">
        {{ verificationMessage ? verificationMessage : "Verifying Email..." }}
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
  name: "VerifyEmail",
  data() {
    return {
      signupStore: useSignupStore(), // Instance of signup store
      verificationMessage: null,
    };
  },
  async mounted() {
    // Extract the token from the query parameters
    const token = new URLSearchParams(window.location.search).get('token');
    if (token) {
      await this.signupStore.verifyEmail(token);
      this.verificationMessage = this.signupStore.verificationStatus || this.signupStore.error;
      this.$router.push('/')
    } else {
      this.verificationMessage = "Invalid verification link.";
    }
  }
};
</script>
<style lang="scss" scoped>

</style>