require('dotenv').config();
const chai = require('chai');
const { complexTask } = require('../handler');
const EVENT = require('./event.json');
const eventBody = 5 || JSON.parse(EVENT.Records[0].body);

describe("Example of complex function from a lambda function unit test.", () => {
    it("It shold be 42", async () => {
        let result;
        try {
            result = await complexTask(eventBody);
        } catch (err) {
            chai.expect(err).to.deep.equal(true);
            return;
        }
        console.log(result);
        debugger;
        chai.expect(result).to.deep.equal(true);
        return;
    });
    it("It shold catch error", async () => {
        let result;
        try {
            result = await complexTask(eventBody);
        } catch (err) {
            chai.expect(err).to.deep.equal(true);
            return;
        }
        console.log(result);
        debugger;
        chai.expect(result).to.deep.equal(true);
        return;
    });
});
