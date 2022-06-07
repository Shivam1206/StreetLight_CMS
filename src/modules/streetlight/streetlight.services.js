const mongoose = require("mongoose");
const axios = require("axios");
const { StreetLight } = require("./streetlight.model");
const { HttpResponse } = require("../../helper/httpResponse");
const { pagination } = require("../../utils/utils");

module.exports.doCreateStreetLight = async (payload) => {
  let streetlight = new StreetLight(payload);
  await streetlight.save();
  return new HttpResponse("created New Light ", streetlight, 201);
};

module.exports.doGetStreetLight = async (query) => {
  if (query.page < 1) return new HttpResponse("Invalid page number", null, 400);

  let count = await StreetLight.find().countDocuments();
  const { limit, skip, page, totalPages } = pagination(query, count);

  let streetlight = await StreetLight.find().skip(skip).limit(limit).lean();
  if (streetlight) {
    const response = {
      streetlight,
      totalStreetLight: count,
      totalPages: totalPages,
    };
    return new HttpResponse("Data fetch successfully", response, 200);
  } else {
    return new HttpResponse("Data Not Found", null, 404);
  }
};

module.exports.Getdata = async () => {
  let data = await axios.get("https://dog.ceo/api/breeds/image/random");
  console.log(data.data);
};
