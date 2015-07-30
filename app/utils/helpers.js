/**
 * Created by youngmoon on 7/31/15.
 */

var axios = require('axios');

function getRepos (username) {
    return axios.get('https://api.github.com/users/' + username + '/repos');
};

function getUserInfo (username) {
    return axios.get('https://api.github.com/users/' + username);
};

var promiseObj = getRepos('young-utf');

promiseObj
    .then(function (data) {
        console.log(data);
    });
