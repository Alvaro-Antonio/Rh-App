const proxy = [
    {
      context: '/api',
      target: 'http://172.17.13.224:8080',
      pathRewrite: {'^/api' : ''}
    }
  ];

  module.exports = proxy;
