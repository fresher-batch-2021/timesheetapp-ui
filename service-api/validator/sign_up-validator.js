class RegisterValidator {
    /**
     * This method used to validate login form fields
     * @param {string} email 
     * @param {string} password
     * @param {string} name 
     * @param {string} confirmPassword
     */

    static validate(name, email, password, confirmPassword) {
        if (name == null || name == "" || name.trim() == "") {
            throw new Error("Name cannot be blank");
        } else if (email == null || email == "" || email.trim() == "") {
            throw new Error("email cannot be blank");
        } else if (password == null || password == "" || password.trim() == "") {
            throw new Error("Password cannot be blank");
        } else if (password.length < 8) {
            throw new Error("Password must be greater thab 8 characters");
        } else if (confirmPassword == null || confirmPassword == "" || confirmPassword.trim() == "") {
            throw new Error("Comfirm Password cannot be blank");
        } else if (password != confirmPassword) {
            throw new Error("Confirm Password must be same as Password you entered");
            return false;
        }

    }

}