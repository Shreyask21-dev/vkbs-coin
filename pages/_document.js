import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href='/images/favicon.png' sizes="40x40" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" crossOrigin="anonymous" />
    
       {/* elementor links start */}
       <link rel='stylesheet' id='elementor-frontend-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.24.1' media='all' />
       <link rel='stylesheet' id='swiper-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5' media='all' />
       <link rel='stylesheet' id='e-swiper-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css?ver=3.24.1' media='all' />
       <link rel='stylesheet' id='eihe-front-style-css' href='https://vkbs.coinage.host/wp-content/plugins/image-hover-effects-addon-for-elementor/assets/style.min.css?ver=1.4.4' media='all' />
       <link rel='stylesheet' id='elementor-global-css' href='https://vkbs.coinage.host/wp-content/uploads/elementor/css/global.css?ver=1726191684' media='all' />
       <link rel='stylesheet' id='widget-heading-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=3.24.1' media='all' />
       <link rel='stylesheet' id='widget-text-editor-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/css/widget-text-editor.min.css?ver=3.24.1' media='all' />
       <link rel='stylesheet' id='widget-icon-list-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.24.1' media='all' />
       <link rel='stylesheet' id='widget-image-box-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/css/widget-image-box.min.css?ver=3.24.1' media='all' />
       <link rel='stylesheet' id='vkbs-style-css' href='https://vkbs.coinage.host/wp-content/themes/vkbs/style.css' media='all' />
        {/* elementor links end */}

        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
