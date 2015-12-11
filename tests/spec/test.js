/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:6, maxcomplexity:2 */

/*global expect, module, require, describe, it, returnExports */

(function () {
  'use strict';

  var isNil;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    isNil = require('../../index.js');
  } else {
    isNil = returnExports;
  }

  describe('isNil', function () {
    it('should return true for `undefined` or `null`', function () {
      expect(isNil()).toBe(true);
      expect(isNil(undefined)).toBe(true);
      expect(isNil(null)).toBe(true);
    });

    it('should return false for anything else', function () {
      expect(isNil(true)).toBe(false);
      expect(isNil(1)).toBe(false);
      expect(isNil('')).toBe(false);
      expect(isNil([])).toBe(false);
      expect(isNil({})).toBe(false);
    });
  });
}());
