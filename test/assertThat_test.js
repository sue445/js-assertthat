TestCase("assertThat", {
    setUp : function(){
        var that = this;
        this.beforeDoAssert = at.doAssert;
        this.calledCount = 0;
        at.doAssert = function(message, isSuccess){
            that.calledCount++;
            if(!isSuccess){
                fail(message);
            }
        };
    },

    tearDown : function(){
        at.doAssert = this.beforeDoAssert;
        if(this.calledCount === 0){
            fail("assertion is not called");
        }
    },

    "test is.equalsTo" : function(){
        assertNoException(function(){
            assertThat(10).is.equalsTo(10);
        });
    },

    "test is.greaterThan" : function(){
        assertNoException(function(){
            assertThat(15).is.greaterThan(10);
        });
    },

    "test is.greaterThanOrEqualTo" : function(){
        assertNoException(function(){
            assertThat(15).is.greaterThanOrEqualTo(10);
            assertThat(10).is.greaterThanOrEqualTo(10);
        });
    },

    "test is.lessThan" : function(){
        assertNoException(function(){
            assertThat(5).is.lessThan(10);
        });
    },

    "test is.lessThanOrEqualTo" : function(){
        assertNoException(function(){
            assertThat(5).is.lessThanOrEqualTo(10);
            assertThat(10).is.lessThanOrEqualTo(10);
        });
    },

    "test startsWith" : function(){
        assertNoException(function(){
            assertThat("sue445").startsWith("sue");
        });
    },

    "test endsWith" : function(){
        assertNoException(function(){
            assertThat("sue445").endsWith("445");
        });
    },

    "test contains" : function(){
        assertNoException(function(){
            assertThat("sue445").contains("ue4");
        });
    },

    "test is.equalsToIgnoringCase" : function(){
        assertNoException(function(){
            assertThat("sue445").is.equalsToIgnoringCase("SUe445");
        });
    }

});

TestCase("assertThat not", {
    setUp : function(){
        var that = this;
        this.beforeDoAssert = at.doAssert;
        this.calledCount = 0;
        at.doAssert = function(message, isSuccess){
            that.calledCount++;
            if(!isSuccess){
                fail(message);
            }
        };
    },

    tearDown : function(){
        at.doAssert = this.beforeDoAssert;
        if(this.calledCount === 0){
            fail("assertion is not called");
        }
    },

    "test is.not.equalsTo" : function(){
        assertNoException(function(){
            assertThat(10).is.not.equalsTo(100);
        });
    },

    "test is.not.greaterThan" : function(){
        assertNoException(function(){
            assertThat(15).is.not.greaterThan(20);
            assertThat(15).is.not.greaterThan(15);
        });
    },

    "test is.not.greaterThanOrEqualTo" : function(){
        assertNoException(function(){
            assertThat(15).is.not.greaterThanOrEqualTo(20);
            assertThat(10).is.not.greaterThanOrEqualTo(20);
        });
    },

    "test is.not.lessThan" : function(){
        assertNoException(function(){
            assertThat(5).is.not.lessThan(4);
            assertThat(5).is.not.lessThan(5);
        });
    },

    "test is.not.lessThanOrEqualTo" : function(){
        assertNoException(function(){
            assertThat(5).is.not.lessThanOrEqualTo(4);
            assertThat(10).is.not.lessThanOrEqualTo(4);
        });
    },

    "test not.startsWith" : function(){
        assertNoException(function(){
            assertThat("sue445").not.startsWith("ue");
        });
    },

    "test not.endsWith" : function(){
        assertNoException(function(){
            assertThat("sue445").not.endsWith("44");
        });
    },

    "test not.contains" : function(){
        assertNoException(function(){
            assertThat("sue445").not.contains("uee");
        });
    },

    "test is.not.equalsToIgnoringCase" : function(){
        assertNoException(function(){
            assertThat("sue445").is.not.equalsToIgnoringCase("44555");
        });
    }

});

TestCase("assertThatTest(not setup)", {
    "test should use default assertion" : function(){
        assertNoException(function(){
            assertThat(10).is.equalsTo(10);
        });
    }
});

TestCase("extend matcher", {
    setUp : function(){
        at.matcher.anything = function(){
            return function(expected){
                // do nothing
            }
        };
    },

    tearDown : function(){
        at.matcher.anything = undefined;
    },

    "test should use extend assertion" : function(){
        assertNoException(function(){
            assertThat(10).is.anything(100);
        });
    }
});
