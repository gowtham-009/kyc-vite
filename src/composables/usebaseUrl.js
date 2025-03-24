import { ref } from 'vue';

export function usebaseUrl() {
  const url = ref("https://nkyc.w3webtechnologies.co.in/frontview/"); 
  return {
    url 
  };
}
