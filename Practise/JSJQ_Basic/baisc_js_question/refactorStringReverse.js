/**
 * Created by Administrator on 2015/9/8 0008.
 */
"use strict"

/**
 *
 * @type {string}
 * 重构原型的reversed方法。。。prototype
 */

var s = "crperlin";
//console.log(s.length);
String.prototype.reversed = function() {
        var r = "";
        for (var i = this.length - 1; i >= 0; i--) {
            r += this[i];
            //console.log(r);
        }
        return r;
    }
console.log(s.reversed());
