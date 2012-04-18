TestCase("assertThatTest", {
    setUp : function(){
        this.beforeDoAssert = at.doAssert;
        at.doAssert = function(message, isSuccess){
            if(!isSuccess){
                fail(message);
            }
        };
    },

    tearDown : function(){
        at.doAssert = this.beforeDoAssert;
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
    },

    "test is.startsWith" : function(){
        assertNoException(function(){
            assertThat("sue445", is.startsWith("sue"));
        });
    }
});

TestCase("assertThatTest(not setup)", {
    "test should use default assertion" : function(){
        assertNoException(function(){
            assertThat(10, is.equalsTo(10));
        });
    }
});

TestCase("extend matcher", {
    setUp : function(){
        is.anything = function(){
            return function(expected){
                // do nothing
            }
        };
    },

    tearDown : function(){
        is.anything = undefined;
    },

    "test should use extend assertion" : function(){
        assertNoException(function(){
            assertThat(10, is.anything(100));
        });
    }
});
