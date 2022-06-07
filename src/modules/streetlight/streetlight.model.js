const mongoose = require("mongoose");

const schema = mongoose.Schema;

const streetlight = schema(
  {
    IMEINumber: {
      type: String,
    },
    Battery_Percent: {},
    Battery_Voltage: {},
    Battery_Current: {},
    Battery_Power: {},
    Solar_Voltage: {},
    Solar_Current: {},
    Solar_Power: {},
    Load_Voltage: {},
    Load_Current: {},
    Load_Power: {},
    Solar_Charging: {},
    Battery_Low: {},
    System_Fault: {},
    Overload: {},
    STP: {},
  },
  { timestamps: true }
);

module.exports.StreetLight = mongoose.model("StreetLight", streetlight);
