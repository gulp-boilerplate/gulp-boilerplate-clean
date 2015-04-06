var gulp = require('gulp'),
    del = require('del');

module.exports = function (config) {
    return function (cb) {
        del(config.src, cb());
    };
};
