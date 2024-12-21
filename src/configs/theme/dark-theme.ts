import THEME_MODE from '../../enums/theme-mode'
import AppThemeModel from '../../models/theme-model'
import buttonTheme from './button-theme'
import darkColor from './dark-color'
import inputTheme from './input-theme'
import radiousTheme from './radious-theme'
import spacingTheme from './spacing-theme'

const darkTheme: AppThemeModel = {
    mode: THEME_MODE.DARK,
    color: darkColor,
    button: buttonTheme,
    input: inputTheme,
    spacing: spacingTheme,
    radious: radiousTheme,
}

export default darkTheme