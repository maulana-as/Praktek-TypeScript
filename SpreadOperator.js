var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Spread Operator TS
// copying array
var arr = [1, 2];
var coppyArray = __spreadArray(__spreadArray([], arr), [3, 4]);
console.log(coppyArray, '<< coppyArray');
// Spread Object  Value (Copy Object Element)
var point2D = { x: 1, y: 2 };
var point3D = __assign(__assign({}, point2D), { z: 3 });
console.log(point3D, '<<<point3D');
