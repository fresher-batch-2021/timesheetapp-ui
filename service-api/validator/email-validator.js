/**
 * This method used to check whether email is already exists in DB
 * 
 * @param {string} email 
 * @returns true/false
 */
async function isEmailExists(email) {
    const dbUsername = 'apikey-v2-n9i9mmwl3nxoshs878dn76zeb22gvambxdzrr040ezw';
    const dbPassword = 'deea8a2257ba08c5a56fb729475edfa1';
    const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
    let endPoint = "https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/";

    const myUrl = endPoint + "timesheetappdb_users/_find";
    let emailObj = {
        selector: {
            email: email
        },
        fields: ["email"]
    };


    let res = await axios.post(myUrl, emailObj, { headers: { 'Authorization': basicAuth } });

    return res.data.docs.length != 0;
}