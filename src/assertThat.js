/**
 * Created with JetBrains WebStorm.
 * User: sue445
 * Date: 12/04/18
 * Time: 11:22
 * To change this template use File | Settings | File Templates.
 */
is = {
    equalsTo : function(expected){
        return function(actual){
            assertEquals(expected, actual);
        };
    }
};

assertThat = function(actual, matcher){
    matcher(actual);
};
