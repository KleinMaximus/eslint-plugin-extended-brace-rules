"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enums = exports.rules = exports.configs = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _rules = require("./rules");

var _configs = require("./configs");

var enums = _interopRequireWildcard(require("./enums"));

exports.enums = enums;

/**
 * use in ESLint config
 * {
 *   extends: ['plugin:extended-brace-rules/mixed'],
 *   plugins: ['extended-brace-rules']
 * }
 */
var base = {
  rules: {
    'brace-style': 'off',
    'extended-brace-rules/brace-on-same-line': ['error'].concat((0, _toConsumableArray2["default"])(_configs.base))
  }
};
var mixed = {
  rules: {
    'brace-style': 'off',
    'extended-brace-rules/brace-on-same-line': ['error'].concat((0, _toConsumableArray2["default"])(_configs.mixed))
  }
};
var configs = {
  base: base,
  mixed: mixed
};
exports.configs = configs;
var rules = {
  'brace-on-same-line': _rules.braceOnSameLine
};
exports.rules = rules;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJiYXNlIiwicnVsZXMiLCJiYXNlQ29uZmlnT3B0aW9ucyIsIm1peGVkIiwibWl4ZWRDb25maWdPcHRpb25zIiwiY29uZmlncyIsImJyYWNlT25TYW1lTGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7Ozs7QUFRQSxJQUFNQSxJQUFtQixHQUFHO0FBQzFCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTCxtQkFBZSxLQURWO0FBRUwsZ0RBQ0UsT0FERiw2Q0FFS0MsYUFGTDtBQUZLO0FBRG1CLENBQTVCO0FBVUEsSUFBTUMsS0FBb0IsR0FBRztBQUMzQkYsRUFBQUEsS0FBSyxFQUFFO0FBQ0wsbUJBQWUsS0FEVjtBQUVMLGdEQUNFLE9BREYsNkNBRUtHLGNBRkw7QUFGSztBQURvQixDQUE3QjtBQVVPLElBQU1DLE9BQU8sR0FBRztBQUFFTCxFQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUUcsRUFBQUEsS0FBSyxFQUFMQTtBQUFSLENBQWhCOztBQUVBLElBQU1GLEtBQUssR0FBRztBQUNuQix3QkFBc0JLO0FBREgsQ0FBZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbnRlciB9IGZyb20gJ2VzbGludCc7XG5pbXBvcnQgeyBicmFjZU9uU2FtZUxpbmUgfSBmcm9tICcuL3J1bGVzJztcbmltcG9ydCB7IGJhc2UgYXMgYmFzZUNvbmZpZ09wdGlvbnMsIG1peGVkIGFzIG1peGVkQ29uZmlnT3B0aW9ucyB9IGZyb20gJy4vY29uZmlncyc7XG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tICcuL2VudW1zJztcblxuLyoqXG4gKiB1c2UgaW4gRVNMaW50IGNvbmZpZ1xuICoge1xuICogICBleHRlbmRzOiBbJ3BsdWdpbjpleHRlbmRlZC1icmFjZS1ydWxlcy9taXhlZCddLFxuICogICBwbHVnaW5zOiBbJ2V4dGVuZGVkLWJyYWNlLXJ1bGVzJ11cbiAqIH1cbiAqL1xuXG5jb25zdCBiYXNlOiBMaW50ZXIuQ29uZmlnID0ge1xuICBydWxlczoge1xuICAgICdicmFjZS1zdHlsZSc6ICdvZmYnLFxuICAgICdleHRlbmRlZC1icmFjZS1ydWxlcy9icmFjZS1vbi1zYW1lLWxpbmUnOiBbXG4gICAgICAnZXJyb3InLFxuICAgICAgLi4uYmFzZUNvbmZpZ09wdGlvbnMsXG4gICAgXSxcbiAgfSxcbn07XG5cbmNvbnN0IG1peGVkOiBMaW50ZXIuQ29uZmlnID0ge1xuICBydWxlczoge1xuICAgICdicmFjZS1zdHlsZSc6ICdvZmYnLFxuICAgICdleHRlbmRlZC1icmFjZS1ydWxlcy9icmFjZS1vbi1zYW1lLWxpbmUnOiBbXG4gICAgICAnZXJyb3InLFxuICAgICAgLi4ubWl4ZWRDb25maWdPcHRpb25zLFxuICAgIF0sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlncyA9IHsgYmFzZSwgbWl4ZWQgfTtcblxuZXhwb3J0IGNvbnN0IHJ1bGVzID0ge1xuICAnYnJhY2Utb24tc2FtZS1saW5lJzogYnJhY2VPblNhbWVMaW5lLFxufTtcblxuZXhwb3J0IHsgZW51bXMgfTtcbiJdfQ==