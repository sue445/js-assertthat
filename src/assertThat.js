/**
 * Created with JetBrains WebStorm.
 * User: sue445
 * Date: 12/04/18
 * Time: 11:22
 * To change this template use File | Settings | File Templates.
 */
var at = (function(){
    // public methods
    var is = {
        equalsTo : function(expected){
            return function(actual){
                doAssert("[expected " + expected + ", but actual is " + actual + "]", actual == expected);
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
        is : is,
        assertThat : assertThat,
        setAssert : setAssert
    };

    // private methods
    var doAssert = function(message, isSuccess){
        // do nothing
    };

}());

is = at.is;
assertThat = at.assertThat;
