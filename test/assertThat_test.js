/**
 * Created with JetBrains WebStorm.
 * User: sue445
 * Date: 12/04/18
 * Time: 11:18
 * To change this template use File | Settings | File Templates.
 */

TestCase("assertThatTest", {
    setUp : function(){
        at.setAssert(function(message, isSuccess){
            assertTrue(message, isSuccess);
        });
    },

    tearDown : function(){
        at.setAssert(function(){
        });
    },

    "test is.equalsTo" : function(){
        assertNoException(function(){
            assertThat(10, is.equalsTo(10));
        });
    },

    "test is.greaterThan" : function(){
        assertNoException(function(){
            assertThat(15, is.greaterThan(10));
        });
    },

    "test is.greaterThanOrEqualTo" : function(){
        assertNoException(function(){
            assertThat(15, is.greaterThanOrEqualTo(10));
            assertThat(10, is.greaterThanOrEqualTo(10));
        });
    }
});
