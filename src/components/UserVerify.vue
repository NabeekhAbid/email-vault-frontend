<template>
  <div class="h-[982px] max-w-[1512px] flex bg-black">
    <div
      class="w-[50%] h-full bg-[#F9F9FB] flex pt-[198px] flex-col justify-between items-center"
    >
      <div class="w-[598px] h-[294px] font-sans">
        <div class="">
        <p class="font-bold text-[20px] text-[#000000] text-left leading-[26px] font-sans">
          Multi-Factor Authentication
        </p>
        </div>
        <div class="mt-1">
        <p class="font-regular leading-[19px] pt-2 text-[14px] text-left tracking-[0.3px] text-[#6C757D]">
         Please enter the confirmation code you see on your authentication app.
        </p>
        </div>
        <div class="mt-8">
            <div class="flex justify-between w-[598px] font-regular text-[48px] font-sans h-[87.32px] text-black space-x-[15px]">
                <div class="flex items-center justify-center border border-[#000000] border-opacity-[30%] h-full w-[94.17px] rounded-[1.75px]">1</div>
                  <div class="flex items-center justify-center border border-[#000000] border-opacity-[30%] h-full w-[94.17px] rounded-[1.75px]">2</div>
                    <div class="flex items-center justify-center border border-[#000000] border-opacity-[30%] h-full w-[94.17px] rounded-[1.75px]">3</div>
                      <div class="flex items-center justify-center border border-[#000000] border-opacity-[30%] h-full w-[94.17px] rounded-[1.75px]">4</div>
                        <div class="flex items-center justify-center border border-[#000000] border-opacity-[30%] h-full w-[94.17px] rounded-[1.75px]">5</div>
                          <div class="flex items-center justify-center border border-[#000000] border-opacity-[30%] h-full w-[94.17px] rounded-[1.75px]">6</div>
            </div>

        </div>
        <div class="w-[598px] h-[96px] mt-5 flex justify-between">
            <div class="cursor-pointer">
                <p class="font-bold text-[16px] tracking-[0.3px] text-[#571158] line-auto underline">Use Recovery Code</p>
            </div>
            <div class="w-[160px] h-[38px] mt-14">
              <button class="w-full h-full bg-[#571158] text-white rounded-md">Verify</button>
            </div>
        </div>
        
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
        name:"UserVerify"
    }
</script>

<style lang="scss" scoped>

</style>