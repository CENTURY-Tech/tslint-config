"use strict";

module.exports = {
  extends: "tslint:latest",
  rules: {
    "no-namespace": [
      false
    ],
    "max-line-length": [
      true,
      140
    ],
    "member-access": [
      true
    ],
    "object-literal-shorthand": false,
    "trailing-comma": [
      false
    ],
    "no-angle-bracket-type-assertion": false,
    "object-literal-sort-keys": false,
    "whitespace": [
      false
    ],
    "no-consecutive-blank-lines": [
      true
    ],
    "no-console": [
      false
    ],
    "no-string-literal": false,
    "ban-types": false,
    "only-arrow-functions": [
      false
    ],
    "interface-name": [
      true,
      "never-prefix"
    ],
    "no-reference": false,
    "prefer-conditional-expression": false
  }
};
