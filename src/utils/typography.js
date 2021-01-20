import Typography from 'typography'
import GitHubTheme from 'typography-theme-github'

GitHubTheme.overrideThemeStyles = () => {
  return {
    a: {
      boxShadow: `none`,
      textDecoration: `none`,
      color: `#0687f0`,
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
      textDecoration: `none`,
    },

    'a:hover': {
      textDecoration: `none`,
    },

    h1: {
      fontWeight: 800,
      lineHeight: 1.2,
      fontFamily: 'nanum-square',
    },

    h2: {
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: 1.2,
      marginTop: '56px',
      marginBottom: '20px',
      fontFamily: 'bm-dohyeon',
    },

    ul: {
      marginBottom: '5px',
    },

    li: {
      marginBottom: '2px',
    },

    'h3,h4,h5,h6': {
      marginTop: '1.925rem',
    },

    h3: {
      fontSize: '21px',
      fontWeight: 800,
      fontFamily: 'nanum-square',
    },

    h4: {
      fontSize: '17px',
      fontWeight: 800,
      fontFamily: 'nanum-square',
    },

    h5: {
      fontWeight: 800,
      fontFamily: 'nanum-square',
    },

    details: {
      marginBottom: '32px',
    },

    'ol, ul': {
      marginLeft: '1.8rem',
    },

    'li>ol, li>ul': {
      marginLeft: '1.325rem',
    },
  }
}

const typography = new Typography(GitHubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
