/**
 * Created with JetBrains WebStorm.
 * User: sue445
 * Date: 12/04/18
 * Time: 11:22
 * To change this template use File | Settings | File Templates.
 */
var at = (function(){
    // public methods
    var matcher = {
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
    };

    var assertThat = function(actual, matcher){
        matcher(actual);
    };

    var setAssert = function(asserttion){
        doAssert = asserttion;
    }

    return {
        matcher : matcher,
        assertThat : assertThat,
        setAssert : setAssert
    };

    // private methods
    var doAssert = function(message, isSuccess){
        // do nothing
    };

}());

is = at.matcher;
assertThat = at.assertThat;
