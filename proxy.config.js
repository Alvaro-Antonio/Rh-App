const proxy = [
    {
      context: '/api',
      target: 'http://10.0.3.9:8080',
      pathRewrite: {'^/api' : ''}
    }
  ];
  
  module.exports = proxy;