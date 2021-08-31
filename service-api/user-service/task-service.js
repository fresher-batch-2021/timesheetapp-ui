const dbUsername = 'apikey-v2-n9i9mmwl3nxoshs878dn76zeb22gvambxdzrr040ezw';
const dbPassword = 'deea8a2257ba08c5a56fb729475edfa1';
const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);

class TaskService {


    static updateTask(formValues) {

        const url = "https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_tasks/" + formValues._id;

        return axios.put(url, formValues, { headers: { 'Authorization': basicAuth } });
    }


    // static getTasks(id) {

    //     const url = "https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_tasks/" + id;


    //     return axios.get(url, { headers: { Authorization: basicAuth } });
    // }

    static getTask(id) {
        const url = `https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_tasks/${id}`;
        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }

    static getAllTasks() {

        const url = "https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_tasks/_all_docs?include_docs=true";


        return axios.get(url, { headers: { Authorization: basicAuth } });
    }
    static approveTask(id, approveObj) {
        const url = `https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_tasks/${id}`;
        return axios.put(url, approveObj, { headers: { 'Authorization': basicAuth } });
    }

}