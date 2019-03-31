/*
    For more information on how customize-cra works check out its official github repo at:
    https://github.com/arackaf/customize-cra
  */

const { override, addBabelPlugins } = require('customize-cra');
module.exports = override(

  /*
    For more information on addBabelPlugins check out its official github repo at:
    https://github.com/arackaf/customize-cra#addbabelpluginsplugins
  */

  ...addBabelPlugins(
    [
      'module-resolver', 
        {
          root: ["./src"],
          alias: {
            dir1: "./src/Dir1",
            dir2: "./src/Dir2"
          }
        }
    ],
  ),
);