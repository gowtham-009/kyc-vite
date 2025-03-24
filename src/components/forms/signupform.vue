<template>
    <Toast position="top-left" group="tl" />
        <div >
            <div  style="border: 2px solid red;" :style="{ height: deviceHeight * 0.12 + 'px' }">
                <ThemeSwitcher />
            </div>
            <div class="flex" style="border: 1px solid red;" :style="{ height: deviceHeight * 0.77 + 'px' }">
               <div class="w-full p-2 md" style="border: 1px solid red;"></div>
               <div class="w-full p-2 flex items-center md-f" style="border: 1px solid red;">
                 <div class="w-full p-2">
                  <div class="mb-2">
                    <phoneinput v-model="phoneNumber"/>
                  </div>

                 <div class="mb-2">
                    <emailinput v-model="userEmail" />
                 </div>

                 <div class="mt-2">
                    <checkbox v-model="remchecked"/>
                 </div>
   </div>
               </div>
            </div>
            <div class="flex" style="border: 1px solid red;" :style="{ height: deviceHeight * 0.10 + 'px' }">
                <div class="w-full p-2 md" style="border: 1px solid blue;"></div>
                <div class="w-full p-2 flex items-center" style="border: 1px solid blue;">
                    <Button label="Submit" @click="formvalidation"  class="w-full" />
                </div>
            </div>
        </div>

  
    </template>
    
    <script setup>
    
import { ref, onMounted } from 'vue';
import { usebaseUrl } from '@/composables/usebaseUrl';
import { createtoken } from '@/composables/useCreateToken';
import { useToast } from 'primevue/usetoast';
const emit = defineEmits(['updateDiv']);
const toast = useToast();
const { url } = usebaseUrl();
const token = ref(null);

onMounted(async () => {
  const result = await createtoken();
  if (result) {
    token.value = result;
    console.log('Token:', token.value);
  } else {
    console.error('Failed to fetch token');
  }
});

    const phoneNumber = ref('');
    const userEmail=ref('')
    const remchecked=ref('')
    const deviceHeight = ref(0);

    onMounted(() => {
       
        deviceHeight.value = window.innerHeight;
        window.addEventListener('resize', () => {
            deviceHeight.value = window.innerHeight;
    
        });
    });
    

    const formvalidation=()=>{
   if(!phoneNumber.value){
    toast.add({ severity: 'error', summary: 'error Message', detail: 'Phone no is required', group: 'tl', life: 3000 });
   }
   else if(!userEmail.value){
    toast.add({ severity: 'error', summary: 'error Message', detail: 'Email ID is required', group: 'tl', life: 3000 });
   }
   else if(!remchecked.value){
    toast.add({ severity: 'error', summary: 'error Message', detail: 'Please click your checkbox', group: 'tl', life: 3000 });
   }
   else{
    if(token.value.token.length>0){
        signup()
    }
   
   }
}
 

const signup=async()=>{
    
    console.log()
   
    const apiUrl=url.value+'signup.php'
    const formdata=new FormData()
    formdata.append('mobileno',phoneNumber.value)
    formdata.append('emailid', userEmail.value)
    formdata.append('token', token.value.token)

  if(token.value.token){
    try {
        const response=await fetch(apiUrl,{
            method:'POST',
            body:formdata
        })
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        else{
            const data=await response.json()
            if(data.status=='ok'){
                toast.add({ severity: 'success', summary: 'success Message', detail: data.message, group: 'tl', life: 3000 });
                 emit('updateDiv', 'div2');
                
            }
            else{
                toast.add({ severity: 'error', summary: 'Error Message', detail: data.message, group: 'tl', life: 3000 });
            }
        }
    } catch (error) {
        console.log(error)
    }
  }
}

    </script>
    <style>
       
       @media(max-width:992px){
        .md{
            display: none !important;
        }
        .md-f{
            align-items: start !important;
        }
       }
    </style>
    