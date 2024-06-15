/**
 * Ajax requests and variables
 */
var postRequestVar = true;
var putRequestVar = true;
var deleteRequestVar = true;
var getRequestVar = true;
var getRequestHtmlVar = true;

function postRequest(el, type) {
    info = window[type](el);
    if (!info) {
        return false;
    }
    loader('show');
    if (postRequestVar) {
        postRequestVar = false;
        $.ajax({
            type: 'POST',
            url: info['url'],
            data: info['information'],
            datatype: "json",
            headers: {
                "Content-Type": "application/json"
            },
            statusCode: {
                401: function () {
                    errorHandler(401)
                },
                404: function () {
                    errorHandler(404)
                }
            },
            error: function () {
                loader('hide');
                postRequestVar = true;
            },
            success: function (response) {
                loader('hide');
                postRequestVar = true;
                window[type + 'Res'](response, info['params']);
                info = false;
            }
        })
    }
}

function putRequest(el, type) {
    info = window[type](el);
    if (!info) {
        return false;
    }
    loader('show');
    if (putRequestVar) {
        putRequestVar = false;
        $.ajax({
            type: 'PUT',
            url: info['url'],
            data: info['information'],
            datatype: "json",
            headers: {
                "Content-Type": "application/json"
            },
            statusCode: {
                401: function () {
                    errorHandler(401)
                },
                404: function () {
                    errorHandler(404)
                }
            },
            error: function () {
                loader('hide');
                putRequestVar = true;
            },
            success: function (response) {
                loader('hide');
                putRequestVar = true;
                window[type + 'Res'](response, info['params']);
                info = false;
            }
        })
    }
}

function deleteRequest(el, type) {
    info = window[type](el);
    if (!info) {
        return false;
    }
    loader('show');
    if (deleteRequestVar) {
        deleteRequestVar = false;
        $.ajax({
            type: 'DELETE',
            url: info['url'],
            data: info['information'],
            datatype: "json",
            headers: {
                "Content-Type": "application/json"
            },
            statusCode: {
                401: function () {
                    errorHandler(401)
                },
                404: function () {
                    errorHandler(404)
                }
            },
            error: function () {
                loader('hide');
                deleteRequestVar = true;
            },
            success: function (response) {
                loader('hide');
                deleteRequestVar = true;
                window[type + 'Res'](response, info['params']);
                info = false;
            }
        })
    }
}

function getRequest(el, type) {
    info = window[type](el);
    if (!info) {
        return false;
    }
    loader('show');
    if (getRequestVar) {
        getRequestVar = false;
        $.ajax({
            type: 'GET',
            url: info['url'],
            data: info['information'],
            datatype: "json",
            headers: {
                "Content-Type": "application/json"
            },
            statusCode: {
                401: function () {
                    errorHandler(401)
                },
                404: function () {
                    errorHandler(404)
                }
            },
            error: function () {
                loader('hide');
                getRequestVar = true;
            },
            success: function (response) {
                loader('hide');
                getRequestVar = true;
                window[type + 'Res'](response, info['params']);
                info = false;
            }
        })
    }
}

function getRequestHtml(el, type) {
    info = window[type](el);
    if (!info) {
        return false;
    }
    loader('show');
    if (getRequestHtmlVar) {
        getRequestHtmlVar = false;
        $.ajax({
            type: 'GET',
            url: info['url'],
            data: info['information'],
            datatype: "html",
            headers: {},
            statusCode: {
                401: function () {
                    errorHandler(401)
                },
                404: function () {
                    errorHandler(404)
                }
            },
            error: function () {
                loader('hide');
                getRequestHtmlVar = true;
            },
            success: function (response) {
                loader('hide');
                getRequestHtmlVar = true;
                window[type + 'Res'](response, info['params']);
                info = false;
            }
        })
    }
}

function upload(el, type) {

    var formData = new FormData();
    elName = $(el).attr('name');
    path = $(el).attr('path');
    formData.append(elName, $(el)[0].files[0]);

    $.ajax({
        url: path,
        type: "POST",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        mimeType: "multipart/form-data",
        headers: {
            "Response-Type": "application/json"
        },
        statusCode: {
            401: function () {
                errorHandler(401)
            },
            404: function () {
                errorHandler(404)
            }
        },
        xhr: function () {
            //upload Progress
            var xhr = $.ajaxSettings.xhr();
            if (xhr.upload) {
                xhr.upload.addEventListener('progress', function (event) {
                    window[type + 'Progress'](event.loaded, event.position, event.total, event.lengthComputable);
                }, true);
            }
            return xhr;
        },
        success: function (data) {
            window[type](el, data);
        }
    })
}

function errorHandler(code) {
    if (code === 401) {
        notify(accessMessage, 'error');
    } else if (code === 404) {
        notify(notFoundMessage, 'error');
    }
}


function notify(message, type) {
    $('div.notification').find('p').html(message);
    $('div.notification').attr("class", 'notification callout ' + type);
    $('div.notification').show();
    // Alert time out
    setTimeout(function () {
        $('div.notification').fadeOut();
    }, 5000);
}

function loader(type) {
    if (type === 'show') {
        $('.loading').show(0);
    } else {
        $('.loading').fadeOut(250);
    }
}

window.alert = function (msg) {
    swal({
        text: msg,
        button: "ok",
    });
};