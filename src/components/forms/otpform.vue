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
                  <div class="mb-2 disabled">
                    <phoneinput v-model="phoneNumber"/>
                  </div>
                  <div class="flex flex-col gap-1 mt-2">
                        <phoneotp/>
                        <p class="text-right">Resend</p>
                    </div>
                 <div class="mb-2 disabled">
                    <emailinput v-model="userEmail" />
                 </div>

                 <div class="flex flex-col gap-1 mt-2">
                        <emailotp/>
                        <p class="text-right">Resend</p>
                    </div>
                 <div class="mt-2">
                    <referralinput/>
                 </div>
   </div>
               </div>
            </div>
            <div class="flex" style="border: 1px solid red;" :style="{ height: deviceHeight * 0.10 + 'px' }">
                <div class="w-full p-2 md" style="border: 1px solid blue;"></div>
                <div class="w-full p-2 flex items-center justify-between" style="border: 1px solid blue;">
                    <Button label="Prev"  />
                    <Button label="Next"  />
                </div>
            </div>
        </div>

  
    </template>
    
    <script setup>
    
import { ref, onMounted } from 'vue';
import { usebaseUrl } from '@/composables/usebaseUrl';
import { useToast } from 'primevue/usetoast';
const emit = defineEmits(['updateDiv']);
const toast = useToast();
const { url } = usebaseUrl();




    const phoneNumber = ref('');
    const userEmail=ref('')
   
    const deviceHeight = ref(0);

    onMounted(() => {
       
        deviceHeight.value = window.innerHeight;
        window.addEventListener('resize', () => {
            deviceHeight.value = window.innerHeight;
    
        });
    });
    

   
    </script>
    <style>

.disabled {
  pointer-events: none;
  opacity: 0.5;
}
       
       @media(max-width:992px){
        .md{
            display: none !important;
        }
        .md-f{
            align-items: start !important;
        }
       }
    </style>
    