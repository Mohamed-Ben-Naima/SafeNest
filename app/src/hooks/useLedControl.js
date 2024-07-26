import axios from "axios";

//change it with your own pc ip address
const API_URI = "http://192.168.1.101:3000";

export default function useLedControl() {
  const controlLED = (state) => {
    axios
      .post(`${API_URI}/api/v1/led`, { state: state }) // Send state in the body, not as a query parameter
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error("Error controlling LED:", error);
      });
  };

  return {
    controlLED,
  };
}
