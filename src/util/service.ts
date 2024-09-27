import axios from "axios";

const backTestUrl = "https://680f-103-138-236-18.ngrok-free.app/backtest";
const backtestDetails =
  "https://680f-103-138-236-18.ngrok-free.app/backtestDetails";

const getBackTestData = (summarySampleData: any) => {
  return axios.post(backTestUrl, {
    ...summarySampleData,
  });
};
const getBackTestDataWithChart = (id: any) => {
  return axios
    .post(`${backtestDetails}/${id}`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

export { getBackTestData, getBackTestDataWithChart };
