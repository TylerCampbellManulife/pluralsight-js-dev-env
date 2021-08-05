// register babel to transpile before our tests run
require("@babel/register")();

// disable webpack features taht Mocha doesn't understand
require.extensions["css"] = function() {};


