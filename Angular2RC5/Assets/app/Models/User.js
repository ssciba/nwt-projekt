"use strict";
var User = (function () {
    function User(id, username, password, repeatPassword, name, lastname, email) {
        if (id === void 0) { id = 1; }
        if (username === void 0) { username = ""; }
        if (password === void 0) { password = ""; }
        if (repeatPassword === void 0) { repeatPassword = ""; }
        if (name === void 0) { name = ""; }
        if (lastname === void 0) { lastname = ""; }
        if (email === void 0) { email = ""; }
        this.id = id;
        this.username = username;
        this.password = password;
        this.repeatPassword = repeatPassword;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }
    User.prototype.getFullName = function () {
        return this.name + " " + this.lastname;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map