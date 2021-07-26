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
      fontFamily: "nanum-square",
    },

    h2: {
      fontSize: '24px',
      fontWeight: 500,
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

    h3: {
      fontSize: '22px',
      fontWeight: 800,
      fontFamily: "nanum-square",
    },

    h4: {
      fontSize: '18px',
      fontWeight: 800,
      fontFamily: "nanum-square",
    },

    h5: {
      fontWeight: 800,
      fontFamily: "nanum-square",
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
