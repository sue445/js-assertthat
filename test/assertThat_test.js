/**
 * Created with JetBrains WebStorm.
 * User: sue445
 * Date: 12/04/18
 * Time: 11:18
 * To change this template use File | Settings | File Templates.
 */
TestCase("assertThatTest", {
    "test is.equalsTo" : function(){
        assertNoException(function(){
            assertThat(10, is.equalsTo(10));
        });
    }
});