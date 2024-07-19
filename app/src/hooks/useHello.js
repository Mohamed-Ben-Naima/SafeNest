import axios from "axios";

const API_URI = "http://192.168.1.101:3000/api/v1";

export default function useHello() {
  const sendHelloToServer = async () => {
    try {
      const response = await axios.post(`${API_URI}/hello`, {
        message: "Hello, World!",
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return {
    sendHelloToServer,
  };
}
