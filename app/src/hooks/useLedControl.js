import axios from "axios";

//change it with your own pc ip address
const API_URI = "http://192.168.1.101:3000/api/v1";
//const API_URI = "http://192.168.1.55:3000/api/v1";

export default function useLedControl() {
  const controlLED = (state) => {
    axios
      .post(`${API_URI}/led?state=${state}`)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    controlLED,
  };
}
