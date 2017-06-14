import $ from 'jquery'

class Api {

    static post(base, path, data = null, successCallback) {
        return Api.ajax(base, path, 'POST', data, successCallback);
    }

    static ajax(base, path, method = 'GET', data = null, successCallback =function (data) {}) {
        $.ajax({
            url: base + path,
            method: method,
            contentType: "application/json; charset=utf-8",
            data: data
        })
            .done(function(data) {
                successCallback(data)
            })
            .fail(function (error) {
                debugger;
            console.log("error! " + error);
        });

    }

}

export default Api;