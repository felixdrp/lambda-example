'use strict';

async function complexTask(data) {
  const param = parseInt(data) || 0
  if (data === 23) {
    return Promise.reject('error ' + data);
  }
  // Imagine that this is a particularly complex or long code that could by nice to have an unit test.
  const task = 21 + 21 + param;
  // End of complex or long text.
  return task;
}
module.exports.complexTask = complexTask;

module.exports.endpoint = async (event, context) => {
  // Event in string format?
  const eventParsed = typeof event === "string" ? JSON.parse(event) : event;
  // Welcome message
  const msg = eventParsed.msg || 'all';

  const complexResult = await complexTask();

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${msg}, the current time is ${new Date().toTimeString()}.
      The complex result is ${complexResult}`,
    }),
  };

  return response;
};
