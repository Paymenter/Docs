
import React from 'react'
import vercelOGPagesPlugin from '@cloudflare/pages-plugin-vercel-og'

export const onRequest = vercelOGPagesPlugin({
  imagePathSuffix: '/social-image.png',
  component: ({ ogTitle, ogDescription, pathname }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '630px',
          width: '1200px',
          // backgroundImage: 'linear-gradient(135deg, #111827 0%, #4213CE 100%)',
          backgroundImage: 'url(https://paymenter.org/seo-image-base.png)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <img
          src='https://paymenter.org/logo-dark.svg'
          width='675px'
          height='150px'
          style={{ margin: '60px' }}
        />
        <p style={{ fontSize: '1px', color: 'transparent' }}>
          Hi developer! If you're seeing this, you're reading too deep into the code. Have a great day! And yes, this text is included for fun! 🎉
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
            paddingTop: '120px',
            paddingLeft: '60px',
            color: 'white'
          }}
        >
          <h1
            style={{
              fontSize: '70px',
              fontWeight: '600',
              margin: '0',
              fontFamily: 'inter',
            }}
          >
            {ogTitle}
          </h1>
          <p
            style={{
              fontSize: '35px',
              paddingTop: '5px',
              margin: '0',
              fontFamily: 'inter',
              color: '#cfd0d2'
            }}
          >
            {ogDescription}
          </p>
        </div>
      </div>
    )
  },
  extractors: {
    on: {
      'meta[property="image:title"]': props => ({
        element (element) {
          props.ogTitle = element.getAttribute('content')
        }
      }),
      'meta[property="image:description"]': props => ({
        element (element) {
          props.ogDescription = element.getAttribute('content')
        }
      })
    }
  },
})
