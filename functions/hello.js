const awaiter = () =>
  new Promise(res => {
    setTimeout(() => {
      res();
    }, 3000);
  });

exports.handler = async event => {
  const subject = event.queryStringParameters.name || "World";

  await awaiter();

  return {
    statusCode: 200,
    body: `Hello ${subject}!`
  };
};
