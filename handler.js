'use strict';

module.exports.endpoint = async (event, context) => {
  // Event in string format?
  const eventParsed = typeof event === "string" ? JSON.parse(event) : event;
  // Welcome message
  const msg = eventParsed.msg || 'all';

  // Imagine that this is a particularly complex or long code that could by nice to have an unit test.
  const complexResult = 21 + 21;
  // End of complex or long text.

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${msg}, the current time is ${new Date().toTimeString()}.
      The complex result is ${complexResult}`,
    }),
  };

  return response;
};
