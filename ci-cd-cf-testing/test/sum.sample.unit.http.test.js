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
