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
var rules = {
  'brace-on-same-line': _rules.braceOnSameLine
};
exports.rules = rules;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJiYXNlIiwicGx1Z2lucyIsInJ1bGVzIiwiYmFzZUNvbmZpZ09wdGlvbnMiLCJtaXhlZCIsIm1peGVkQ29uZmlnT3B0aW9ucyIsImNvbmZpZ3MiLCJicmFjZU9uU2FtZUxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7Ozs7QUFPQSxJQUFNQSxJQUF1QixHQUFHO0FBQzlCQyxFQUFBQSxPQUFPLEVBQUUsQ0FBQyx1QkFBRCxDQURxQjtBQUU5QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0wsbUJBQWUsS0FEVjtBQUVMLGlEQUNFLE9BREYsNkNBRUtDLGFBRkw7QUFGSztBQUZ1QixDQUFoQztBQVdBLElBQU1DLEtBQXdCLEdBQUc7QUFDL0JILEVBQUFBLE9BQU8sRUFBRSxDQUFDLHVCQUFELENBRHNCO0FBRS9CQyxFQUFBQSxLQUFLLEVBQUU7QUFDTCxtQkFBZSxLQURWO0FBRUwsaURBQ0UsT0FERiw2Q0FFS0csY0FGTDtBQUZLO0FBRndCLENBQWpDO0FBV0EsSUFBTUMsT0FBTyxHQUFHO0FBQUVOLEVBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRSSxFQUFBQSxLQUFLLEVBQUxBO0FBQVIsQ0FBaEI7O0FBRUEsSUFBTUYsS0FBSyxHQUFHO0FBQ1osd0JBQXNCSztBQURWLENBQWQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDTElFbmdpbmUgfSBmcm9tICdlc2xpbnQnO1xuaW1wb3J0IHsgYnJhY2VPblNhbWVMaW5lIH0gZnJvbSAnLi9ydWxlcyc7XG5pbXBvcnQgeyBiYXNlIGFzIGJhc2VDb25maWdPcHRpb25zLCBtaXhlZCBhcyBtaXhlZENvbmZpZ09wdGlvbnMgfSBmcm9tICcuL2NvbmZpZ3MnO1xuaW1wb3J0ICogYXMgZW51bXMgZnJvbSAnLi9lbnVtcyc7XG5cbi8qKlxuICogdXNlIGluIEVTTGludCBjb25maWdcbiAqIHtcbiAqICAgZXh0ZW5kczogWydwbHVnaW46ZXh0ZW5kZWQtYnJhY2UtcGx1Z2luL21peGVkJ11cbiAqIH1cbiAqL1xuXG5jb25zdCBiYXNlOiBDTElFbmdpbmUuT3B0aW9ucyA9IHtcbiAgcGx1Z2luczogWydleHRlbmRlZC1icmFjZS1wbHVnaW4nXSxcbiAgcnVsZXM6IHtcbiAgICAnYnJhY2Utc3R5bGUnOiAnb2ZmJyxcbiAgICAnZXh0ZW5kZWQtYnJhY2UtcGx1Z2luL2JyYWNlLW9uLXNhbWUtbGluZSc6IFtcbiAgICAgICdlcnJvcicsXG4gICAgICAuLi5iYXNlQ29uZmlnT3B0aW9ucyxcbiAgICBdLFxuICB9LFxufTtcblxuY29uc3QgbWl4ZWQ6IENMSUVuZ2luZS5PcHRpb25zID0ge1xuICBwbHVnaW5zOiBbJ2V4dGVuZGVkLWJyYWNlLXBsdWdpbiddLFxuICBydWxlczoge1xuICAgICdicmFjZS1zdHlsZSc6ICdvZmYnLFxuICAgICdleHRlbmRlZC1icmFjZS1wbHVnaW4vYnJhY2Utb24tc2FtZS1saW5lJzogW1xuICAgICAgJ2Vycm9yJyxcbiAgICAgIC4uLm1peGVkQ29uZmlnT3B0aW9ucyxcbiAgICBdLFxuICB9LFxufTtcblxuY29uc3QgY29uZmlncyA9IHsgYmFzZSwgbWl4ZWQgfTtcblxuY29uc3QgcnVsZXMgPSB7XG4gICdicmFjZS1vbi1zYW1lLWxpbmUnOiBicmFjZU9uU2FtZUxpbmUsXG59O1xuXG5leHBvcnQge1xuICBjb25maWdzLFxuICBlbnVtcyxcbiAgcnVsZXMsXG59O1xuIl19