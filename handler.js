'use strict';

module.exports.endpoint = (event, context, callback) => {
  const msg = event.msg || 'all';
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${msg}, the current time is ${new Date().toTimeString()}.`,
    }),
  };

  callback(null, response);
};
