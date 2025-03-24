export const createtoken = async () => {
    const apiUrl = 'https://nkyc.w3webtechnologies.co.in/frontview/createrandom_token.php';
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch data");
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch Error:", error);
      return null;
    }
  };
  