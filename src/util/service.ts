import axios from "axios";

const backTestUrl = "https://quantedge-be.onrender.com/backtest";
const backtestDetails = "https://quantedge-be.onrender.com/backtestDetails";

const submitUrl = "https://quantedgeai.online/save-strategy";

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
      data: JSON.stringify(strategyDetails),
      title: "Strategy",
    })
    .then(function () {
      // handle success
      window.location.href = "https://quantedgeai.online/automated";
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
