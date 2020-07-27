'use strict';

module.exports.soma = async event => {
  if (event.queryStringParameters == null || !event.queryStringParameters["a"] || !event.queryStringParameters["b"]) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Parametros não informados'
        },
        null,
        2
      ),
    };
  };

  var soma =
    parseInt(event.queryStringParameters["a"]) +
    parseInt(event.queryStringParameters["b"]);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        soma: soma
      },
      null,
      2
    ),
  };
};