basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'scripts/lib/angular.js',
  'test/lib/angular/angular-mocks.js',
  'scripts/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
