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
    },

    "test is.lessThan" : function(){
        assertNoException(function(){
            assertThat(5, is.lessThan(10));
        });
    },

    "test is.lessThanOrEqualTo" : function(){
        assertNoException(function(){
            assertThat(5, is.lessThanOrEqualTo(10));
            assertThat(10, is.lessThanOrEqualTo(10));
        });
    }

});
