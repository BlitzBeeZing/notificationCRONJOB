const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();
const prodBaseURL = "https://zingitappapi.zingnow.in/";
const testBaseURL = "https://companydashboardappapi.zingnow.in/";

var getCompaniesAPI = prodBaseURL + "api/company-info/all-companies";

let companyData;
exports.cronJob = functions.pubsub
  .schedule("56 16 * * *")
  .timeZone("Asia/Kolkata")
  .onRun(async (context) => {
    try {
      await fetch(getCompaniesAPI)
        .then((res) => res.json)
        .then((data) => {});
    } catch (err) {
      console.log(err);
    }
  });
