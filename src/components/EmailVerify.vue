<template>
  <div class="h-[982px] max-w-[1512px] flex bg-black">
    <div
      class="w-[50%] h-full bg-[#F9F9FB] flex pt-[198px] flex-col justify-between items-center"
    >
      <div class="flex justify-center flex-col w-[420px] h-[303px]">
        <p class="font-sans text-left font-bold text-[40px] leading-[41px] tracking-[0.3px] text-[#000000] mb-7">
            Email Verify
        </p>
        <div class="w-[418px] h-[132px]">
          <p class="font-sans  text-left text-[16px] leading-[22px] tracking-[0.14px] text-[#000000CC] opacity-[80%] mb-4">We’re almost set! A confirmation email was sent to <span class="font-bold font-sans text-[#000000CC] opacity-[80%] mb-4">"{{ email }}".</span> </p>
          <p class="font-sans text-left text-[18px] leading-[22px] tracking-[0.14px] text-[#000000CC] opacity-[80%] ">
            To activate your account, just click on the link in the email. If you can’t locate it, please have a look in your spam folder.
          </p>
        </div>
        <div class="w-[420px] h-[58px] flex items-center justify-center mt-9 border border-[#0000004D] border-opacity-[30%] border-t-2 border-b-0 border-x-0">
          <p class="text-center mt-6 leading-[41px] text-[14px] tracking-[0.3px] text-[#000000]">Haven’t received any email? <span class="text-[#571459] cursor-pointer underline">Resend Email</span></p>
        </div>
      </div>
      <div class="w-[527px] mb-28 h-[38px] font-sans text-center">
        <p class="text-[14px] tracking-[0.3px]">Did you enter the wrong email address? Please reach out to us for assistance at <span class="text-[#592858] font-bold cursor-pointer">support@emailvault.app</span> </p>
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
    export default {
        name:"EmailVerify",
         data() {
    return {
      email: this.$route.query.email || "", // Retrieve the email from query parameters
    };
  },
    }
</script>

<style lang="scss" scoped>

</style>