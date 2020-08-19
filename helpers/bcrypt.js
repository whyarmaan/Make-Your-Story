const bcrypt = require('bcrypt');

module.exports = {
    hashPassword = (pw) =>{
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(pw, salt);
    },
    comparePassword = (pw, hash) => {
        return bcrypt.compareSync(pw, hash);
    }
}