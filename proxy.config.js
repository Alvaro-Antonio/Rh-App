const proxy = [
    {
      context: '/api',
      target: 'http://10.0.2.45:8080',
      pathRewrite: {'^/api' : ''}
    }
  ];

  module.exports = proxy;
