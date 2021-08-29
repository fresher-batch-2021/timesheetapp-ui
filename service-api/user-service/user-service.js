const dbUsername = 'apikey-v2-n9i9mmwl3nxoshs878dn76zeb22gvambxdzrr040ezw';
const dbPassword = 'deea8a2257ba08c5a56fb729475edfa1';
const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
class UserService {
    /**
     * function used to login
     * @param {string} email
     * @param {string} password
     */
    static login(email, password) {
        let url ="https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_users/_find";

        const loginObj = {
            selector: {
              email: email,
              password: password,
    
            },
            fields: ["_id", "name", "email"],
          };
          return axios.post(url, loginObj, {
            headers: {
              Authorization: basicAuth
            }});
    }

    /**
     * function used to register
     * @params {*} registerObj
     * @returns
     */
    static register(registerObj){
        const url = "https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_users";
      axios.post(url, registerObj, {
          headers: {
            'Authorization': basicAuth
          }
        });
    }
}