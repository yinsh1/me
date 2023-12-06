export default defineAppConfig({
  alpine: {
    title: 'Yinsh1',
    description: 'Aim Sorry Maker',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'yinsh1' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: 'left', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      github: 'yinsh1',
      bilibili: {
        icon: 'ri:bilibili-line',
        label: 'bilibili',
        href: 'https://space.bilibili.com/7181347'
      },
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
