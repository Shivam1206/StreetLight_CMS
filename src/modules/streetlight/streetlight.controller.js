const _services = require("./streetlight.services");

module.exports.createStreetLight = async (req, res, next) => {
  try {
    let dataurl =
      "http://msdtelematics.com/apidata?data=862818048766085,45,12.1,1.2,15.7,18.9,1.2,23.3,9.7,1.2,56.8,1,2,3,4,00.90,00.80,5,6,7,8";
    let data = dataurl.split("=")[1].split(",");
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
      STP: "STP",
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
