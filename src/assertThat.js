(function(window){
    var at = {
        matcher: {
            equalsTo : function(expected){
                return function(actual){
                    at.doAssert("expected " + expected + ", but actual is " + actual,
                        actual == expected);
                };
            },
            greaterThan : function(expected){
                return function(actual){
                    at.doAssert("[expected greater than " + expected + ", but actual is " + actual,
                        actual > expected);
                };
            },
            greaterThanOrEqualTo : function(expected){
                return function(actual){
                    at.doAssert("[expected greater than or equal to " + expected + ", but actual is " + actual,
                        actual >= expected);
                };
            },
            lessThan : function(expected){
                return function(actual){
                    at.doAssert("[expected less than " + expected + ", but actual is " + actual,
                        actual < expected);
                };
            },
            lessThanOrEqualTo : function(expected){
                return function(actual){
                    at.doAssert("[expected less than or equal to " + expected + ", but actual is " + actual,
                        actual <= expected);
                };
            }
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
    }

    window.at = at;
})(window);

is = at.matcher;
assertThat = at.assertThat;
