const _services = require("./streetlight.services");
const moment = require('moment')
module.exports.createStreetLight = async (req, res, next) => {
  try {
    // let dataurl =
    //   "http://msdrms.in/create-streetlight?data=SSL865933034895736,074,13.5,0.69,09.3,13.7,0.50,06.8,00.0,0.00,00.0,1,0,0,0,STP";
    let data = req.query.data
    data = data.split(",");
    const todaysDate = Date.now()
    let data2 = {
      IMEINumber: data[0],
      Battery_Percent: data[1],
      Battery_Voltage: data[2],
      Battery_Current: data[3],
      Battery_Power: data[4],
      Solar_Voltage: data[5],
      Solar_Current: data[6],
      Solar_Power: data[7],
      Load_Voltage: data[8],
      Load_Current: data[9],
      Load_Power: data[10],
      Solar_Charging: data[11],
      Battery_Low: data[12],
      System_Fault: data[13],
      Overload: data[14],
      STP: data[15],
      date: moment(todaysDate).format('YYYY-MM-DD'),
      time: moment(todaysDate).format('hh:mm:ss A')
    };
    console.log(data2);
    const response = await _services.doCreateStreetLight(data2);
    res.status(response.statusCode).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports.getStreetLight = async (req, res, next) => {
  try {
    const response = await _services.doGetStreetLight(req.query);
    res.status(response.statusCode).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports.getdata = async (req, res, next) => {
  try {
    const response = await _services.Getdata();
    res.status(response.statusCode).json(response);
  } catch (err) {
    next(err);
  }
};
