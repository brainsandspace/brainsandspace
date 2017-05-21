import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
}

  html,body {
    font-family: Arial, sans-serif;
    font-size: 13px;
  }

  body.fontLoaded {
    font-family: 'Open Sans', Arial, sans-serif;
  }

  footer {
    margin: 0;
    padding: 0;
  }

  #app {
    // background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p {
    margin: 0;
  }

.orange-hover:hover {
  color: #e47911;
}

.bold-hover:hover {
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #0066c0;
}

a:hover {
  color: #c45500;
  text-decoration: underline;
}

.stars {
  background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS-sprite_1x-28bd59af93d9b1c745bb0aca4de58763b54df7cf._V2_.png);
  -webkit-background-size: 400px 670px;
  background-size: 400px 670px;
  width: 80px;
  height: 18px;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: text-top;
}

`;
