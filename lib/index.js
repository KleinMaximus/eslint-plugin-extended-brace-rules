"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "rules", {
  enumerable: true,
  get: function get() {
    return _rules["default"];
  }
});
exports.enums = exports.configs = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _rules = _interopRequireDefault(require("./rules"));

var _configs = require("./configs");

var enums = _interopRequireWildcard(require("./enums"));

exports.enums = enums;

/**
 * use in ESLint config
 * {
 *   extends: ['plugin:extended-brace-plugin/mixed']
 * }
 */
var base = {
  plugins: ['extended-brace-plugin'],
  rules: {
    'brace-style': 'off',
    'extended-brace-plugin/brace-on-same-line': ['error'].concat((0, _toConsumableArray2["default"])(_configs.base))
  }
};
var mixed = {
  plugins: ['extended-brace-plugin'],
  rules: {
    'brace-style': 'off',
    'extended-brace-plugin/brace-on-same-line': ['error'].concat((0, _toConsumableArray2["default"])(_configs.mixed))
  }
};
var configs = {
  base: base,
  mixed: mixed
};
exports.configs = configs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJiYXNlIiwicGx1Z2lucyIsInJ1bGVzIiwiYmFzZUNvbmZpZ09wdGlvbnMiLCJtaXhlZCIsIm1peGVkQ29uZmlnT3B0aW9ucyIsImNvbmZpZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7Ozs7QUFPQSxJQUFNQSxJQUF1QixHQUFHO0FBQzlCQyxFQUFBQSxPQUFPLEVBQUUsQ0FBQyx1QkFBRCxDQURxQjtBQUU5QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0wsbUJBQWUsS0FEVjtBQUVMLGlEQUNFLE9BREYsNkNBRUtDLGFBRkw7QUFGSztBQUZ1QixDQUFoQztBQVdBLElBQU1DLEtBQXdCLEdBQUc7QUFDL0JILEVBQUFBLE9BQU8sRUFBRSxDQUFDLHVCQUFELENBRHNCO0FBRS9CQyxFQUFBQSxLQUFLLEVBQUU7QUFDTCxtQkFBZSxLQURWO0FBRUwsaURBQ0UsT0FERiw2Q0FFS0csY0FGTDtBQUZLO0FBRndCLENBQWpDO0FBV0EsSUFBTUMsT0FBTyxHQUFHO0FBQUVOLEVBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRSSxFQUFBQSxLQUFLLEVBQUxBO0FBQVIsQ0FBaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDTElFbmdpbmUgfSBmcm9tICdlc2xpbnQnO1xuaW1wb3J0IHJ1bGVzIGZyb20gJy4vcnVsZXMnO1xuaW1wb3J0IHsgYmFzZSBhcyBiYXNlQ29uZmlnT3B0aW9ucywgbWl4ZWQgYXMgbWl4ZWRDb25maWdPcHRpb25zIH0gZnJvbSAnLi9jb25maWdzJztcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gJy4vZW51bXMnO1xuXG4vKipcbiAqIHVzZSBpbiBFU0xpbnQgY29uZmlnXG4gKiB7XG4gKiAgIGV4dGVuZHM6IFsncGx1Z2luOmV4dGVuZGVkLWJyYWNlLXBsdWdpbi9taXhlZCddXG4gKiB9XG4gKi9cblxuY29uc3QgYmFzZTogQ0xJRW5naW5lLk9wdGlvbnMgPSB7XG4gIHBsdWdpbnM6IFsnZXh0ZW5kZWQtYnJhY2UtcGx1Z2luJ10sXG4gIHJ1bGVzOiB7XG4gICAgJ2JyYWNlLXN0eWxlJzogJ29mZicsXG4gICAgJ2V4dGVuZGVkLWJyYWNlLXBsdWdpbi9icmFjZS1vbi1zYW1lLWxpbmUnOiBbXG4gICAgICAnZXJyb3InLFxuICAgICAgLi4uYmFzZUNvbmZpZ09wdGlvbnMsXG4gICAgXSxcbiAgfSxcbn07XG5cbmNvbnN0IG1peGVkOiBDTElFbmdpbmUuT3B0aW9ucyA9IHtcbiAgcGx1Z2luczogWydleHRlbmRlZC1icmFjZS1wbHVnaW4nXSxcbiAgcnVsZXM6IHtcbiAgICAnYnJhY2Utc3R5bGUnOiAnb2ZmJyxcbiAgICAnZXh0ZW5kZWQtYnJhY2UtcGx1Z2luL2JyYWNlLW9uLXNhbWUtbGluZSc6IFtcbiAgICAgICdlcnJvcicsXG4gICAgICAuLi5taXhlZENvbmZpZ09wdGlvbnMsXG4gICAgXSxcbiAgfSxcbn07XG5cbmNvbnN0IGNvbmZpZ3MgPSB7IGJhc2UsIG1peGVkIH07XG5cbmV4cG9ydCB7XG4gIGNvbmZpZ3MsXG4gIGVudW1zLFxuICBydWxlcyxcbn07XG4iXX0=