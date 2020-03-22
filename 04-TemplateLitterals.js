const createURL = (domain, path) => 'http://' + domain + '/' + path;
const createURL2 = (domain, path) => 'http://${domain}/${path}';


console.log(createURL('example.com', 'auth/login'));
console.log(createURL2('example.com', 'auth/login'));

console.log("It is ${new Date().getHours() < 12 ? 'AM': 'PM'}");