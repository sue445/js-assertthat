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
                assertEquals(expected, actual);
            };
        }
    };

    var assertThat = function(actual, matcher){
        matcher(actual);
    };

    return {
        is : is,
        assertThat : assertThat
    };

    // private methods
}());

is = at.is;
assertThat = at.assertThat;
