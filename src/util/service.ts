import axios from "axios";

const backTestUrl = "https://quantedge-be.onrender.com/backtest";
const backtestDetails = "https://quantedge-be.onrender.com/backtestDetails";

const submitUrl = "/create-strategy";

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

const submitStratergy = (strategyDetails: any) => {
  return axios
    .post(submitUrl, {
      data: strategyDetails,
      title: "Stratergy",
    })
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

export { getBackTestData, getBackTestDataWithChart, submitStratergy };
