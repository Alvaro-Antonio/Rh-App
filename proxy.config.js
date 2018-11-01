const proxy = [
    {
      context: '/api',
      target: 'http://10.0.3.13:8080',
      pathRewrite: {'^/api' : ''}
    }
  ];

  module.exports = proxy;
