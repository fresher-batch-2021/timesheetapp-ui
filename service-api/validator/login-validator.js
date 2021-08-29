class LoginValidator {
    /**
     * This method used to validate login form fields
     * @param {string} email 
     * @param {string} password
     */
    static validate(email, password){
        if (email == null || email == "" || email.trim() == "") {
            throw new Error("Email cannot be blank");
        } else if (password == null || password == "" || password.trim() == "") {
            throw new Error("Password cannot be blank");
        }
        
}

}
