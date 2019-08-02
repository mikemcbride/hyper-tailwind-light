'use strict'

const black = '#4A5568'
const white = '#F7FAFC'
const red = '#C53030'
const green = '#48BB78'
const yellow = '#D69E2E'
const blue = '#3182CE'
const magenta = '#6B46C1'
const cyan = '#4FD1C5'
const lightBlack = '#A0AEC0'
const lightWhite = '#CBD5E0'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: white
}

module.exports.decorateConfig = config => {
  const backgroundColor = white
  const foregroundColor = black
  const cursorColor = config.cursorColor || '#4FD1C5'
  const borderColor = lightWhite
  const tabText = lightBlack
  const tabTextActive = black
  
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .terminal a {
        color: ${cyan};
      }
    `,
    css: `
      ${config.css || ''}
      .tabs_title {
  			display: none !important;
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .splitpane_divider {
        background-color: ${borderColor} !important;
      }
    `
  })
}