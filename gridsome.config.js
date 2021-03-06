module.exports = {
  siteName: '良禽佳木&木匠小强官网 ｜ 实木定制家具品牌',
  siteDescription: '良禽佳木由木匠世家创立，秉持“真材实料好工艺”的产品理念，从原料着手，自建工厂，用好原料、好工艺做禁得住用，耐得住看的现代实木家具。',
  titleTemplate: '良禽佳木&木匠小强官网',
  icon: './src/assets/favicon.png',
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Carousel',
      path: 'src/admin/contents/carousel/*.json',
    }
  }, {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Expo',
      path: 'src/admin/contents/expo/*.json',
    }
  }, {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Case',
      path: 'src/admin/contents/case/*.json',
    }
  }, {
    use: 'gridsome-plugin-netlify-cms',
    options: {
      htmlTitle: '内容编辑系统'
    }
  }]
}
