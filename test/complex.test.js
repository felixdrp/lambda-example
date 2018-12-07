require('dotenv').config();
const chai = require('chai');
const { complexTask } = require('../handler');
const EVENT = require('./event.json');
const eventData = EVENT.number;
const envData = process.env.ENV_VAR;

describe("Example of complex function from a lambda function unit test.", () => {
    it("It should be 42", async () => {
        let result;
        try {
            result = await complexTask();
        } catch (err) {
            chai.expect(err).to.deep.equal('error ' + err);
            return;
        }
        chai.expect(result).to.equal(42);
        return;
    });
    it("It should be 56", async () => {
        let result;
        try {
            result = await complexTask(eventData);
        } catch (err) {
            chai.expect(err).to.deep.equal('error ' + err);
            return;
        }
        chai.expect(result).to.deep.equal(56);
        return;
    });
    it("It should catch error", async () => {
        let result;
        try {
            result = await complexTask(envData);
        } catch (err) {
            chai.expect(err).to.deep.equal('error 23');
            return;
        }
        chai.expect(result).to.deep.equal(true);
        return;
    });
});
