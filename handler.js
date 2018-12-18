'use strict';

module.exports.endpoint = (event, context, callback) => {
  // Event in string format?
  const eventParsed = typeof event === "string" ? JSON.parse(event) : event;
  // Welcome message
  const msg = eventParsed.msg || 'all';

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${msg}, the current time is ${new Date().toTimeString()}.`,
    }),
  };

  callback(null, response);
};
