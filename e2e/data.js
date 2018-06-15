const random = require('./helpers/random');
const value = 'opzszidvapremxhpsnzc'//random(20);
const data = {
    // server: 'https://stable.rocket.chat',
    server: 'http://192.168.1.11:3000',
    alternateServer: 'https://unstable.rocket.chat',
    user: `user${ value }`,
    password: `password${ value }`,
    alternateUser: 'detoxrn',
    alternateUserPassword: '123',
    email: `detoxrn+${ value }@rocket.chat`,
    random: value
}
module.exports = data;