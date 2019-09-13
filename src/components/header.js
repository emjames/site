import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/mainImage"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Header = ({ siteTitle }) => (
  <header>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: `2rem` }}>
      <Link to="/">
        <Image />
      </Link>

      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark Mode
          </label>
        )}
      </ThemeToggler>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
