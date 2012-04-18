(function(window){
    var at = {
        matcher: {
            equalsTo : function(expected){
                return function(actual){
                    at.doAssert(at.format(expected, actual),
                        actual === expected);
                };
            },
            greaterThan : function(expected){
                return function(actual){
                    at.doAssert(at.format("is greater than "+expected, actual),
                        actual > expected);
                };
            },
            greaterThanOrEqualTo : function(expected){
                return function(actual){
                    at.doAssert(at.format("is greater than or equal to "+expected, actual),
                        actual >= expected);
                };
            },
            lessThan : function(expected){
                return function(actual){
                    at.doAssert(at.format("is less than "+expected, actual),
                        actual < expected);
                };
            },
            lessThanOrEqualTo : function(expected){
                return function(actual){
                    at.doAssert(at.format("is less than or equal to "+expected, actual),
                        actual <= expected);
                };
            },
            startsWith : function(expected){
                return function(actual){
                    at.doAssert(at.format("starts with "+expected, actual),
                        actual.indexOf(expected) == 0);
                };
            },
            endsWith : function(expected){
                return function(actual){
                    at.doAssert(at.format("ends with "+expected, actual),
                        actual.indexOf(expected) == actual.length-expected.length);
                };
            },
            contains : function(expected){
                return function(actual){
                    at.doAssert(at.format("contains "+expected, actual),
                        actual.indexOf(expected) >= 0);
                };
            },
            equalsToIgnoringCase : function(expected){
                return function(actual){
                    at.doAssert(at.format("is equal to ignoring case "+expected, actual),
                        actual.toLowerCase() === expected.toLowerCase());
                };
            }
        },

        format : function(expected, actual){
            return "expected " + expected + ", but actual is " + actual;
        },

        assertThat : function(actual, matcher){
            matcher(actual);
        },

        doAssert : function(message, isSuccess){
            if(jstestdriver && fail){
                // for JsTestDriver
                if(!isSuccess){
                    fail(message);
                }
            } else{
                throw new Error("not match assertion.");
            }
        }
    };

    window.at = at;
})(window);

is = at.matcher;
assertThat = at.assertThat;
