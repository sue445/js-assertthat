(function(window){
    var at = {
        matcher: {
            equalsTo : function(expected){
                return function(actual){
                    doAssert("[expected " + expected + ", but actual is " + actual + "]",
                        actual == expected);
                };
            },
            greaterThan : function(expected){
                return function(actual){
                    doAssert("[expected greater than " + expected + ", but actual is " + actual + "]",
                        actual > expected);
                };
            },
            greaterThanOrEqualTo : function(expected){
                return function(actual){
                    doAssert("[expected greater than or equal to " + expected + ", but actual is " + actual + "]",
                        actual >= expected);
                };
            },
            lessThan : function(expected){
                return function(actual){
                    doAssert("[expected less than " + expected + ", but actual is " + actual + "]",
                        actual < expected);
                };
            },
            lessThanOrEqualTo : function(expected){
                return function(actual){
                    doAssert("[expected less than or equal to " + expected + ", but actual is " + actual + "]",
                        actual <= expected);
                };
            }
        },

        assertThat : function(actual, matcher){
            matcher(actual);
        },

        setAssert : function(asserttion){
            doAssert = asserttion;
        },

        doAssert : function(message, isSuccess){
            // do nothing
        }
    }

    window.at = at;
})(window);

is = at.matcher;
assertThat = at.assertThat;
