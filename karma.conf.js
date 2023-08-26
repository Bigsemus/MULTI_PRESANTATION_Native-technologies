module.exports = function (config) {
  config.set({
    basePath: '.',
    autoWatch: true,
     frameworks: ['jasmine', 'browserify', 'jasmine-matchers'],
    files: [
      './js/sliderOneCard.js',
      './js/sliderOneCard.spec.js'
    ],
    browsers: ['Chrome'],
    reporters: ['kjhtml', 'coverage'],
    preprocessors: {
       'js/sliderOneCard.js': ['babel', 'browserify', 'coverage'],
      'js/sliderOneCard.spec.js': ['babel', 'browserify']
    },

    "babelPreprocessor": {
      // options go here
      options: {
        presets: ["@babel/preset-env"],
        sourceMap: "inline"
      },
    },
    browserify: {
      //debug: true,
      transform: [ 'babelify', 'browserify-istanbul' ]
    },
    coverageReporter: {
      reporters : [
        {"type": "text"},
        {"type": "html", dir: 'coverage'}
      ]
    },
    singleRun: false,
    plugins: [
      'karma-coverage',
      'karma-browserify',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-jasmine-html-reporter',
      'karma-babel-preprocessor',
    ],
    colors: true,
    client:{
      clearContext: false
    },

  })
};