const assert = require('assert');
const sinon = require('sinon');
const {ci_cd_sum} = require('..');
it('sum: should return sum of x and y', () => {
    // Mock ExpressJS 'req' and 'res' parameters
    const x = 4;
    const y = 3;
    const req = {
        query: { x: x,
            y: y}
    };
    const res = {send: sinon.stub()};
    res.status = sinon.stub().returns(res);
// Call tested function
    ci_cd_sum(req, res);
// Verify behavior of tested function
    assert.ok(res.send.calledOnce);
    assert.deepStrictEqual(res.send.firstCall.args, ["7"]);
});
Our package.json file should look like:

{
  "name": "ci-cd-cf",
  "version": "1.2.0",
  "description": "A small guide for CI\\CD in GCP CloudFunctions",
  "main": "index.js",
  "scripts": {
    "test": "mocha test"
  },
  "keywords": [],
  "author": "Soliman",
  "license": "ISC",
  "dependencies": {
    "mocha": "^6.2.2",
    "sinon": "^7.5.0"
  }
}
