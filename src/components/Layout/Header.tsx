import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useResponsiveWidth from '../hooks/useResponsiveStyles'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const windowWidth = useResponsiveWidth()
  const screenToSmall = windowWidth < 365

  const handleArchiveDoubleClick = () => {
    navigate('/past')
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        {screenToSmall ? (
          ''
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'fixed',
              top: '8px',
              left: '16px',
              gap: '7px',
              zIndex: '9999'
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                  color: '#000 !important',
                  backgroundColor: 'black',
                  borderRadius: '50px',
                  width: '110px',
                  height: '38px',
                  padding: '5px 20px',
                  textDecoration: 'none'
                }}
              >
                <span
                  style={{
                    display: 'inline-block'
                  }}
                >
                  <Link
                    to="/info"
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      textDecoration: 'none',
                      fontFamily:
                        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
                    }}
                  >
                    Erik Esso
                  </Link>
                </span>
              </div>
            </Link>
          </div>
        )}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'fixed',
            top: '8px',
            right: '16px',
            gap: '7px',
            zIndex: '9999'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              boxSizing: 'border-box',
              color: location.pathname === '/' ? '#000' : '#FFF',
              backgroundColor: location.pathname === '/' ? '#FFF' : 'black',
              borderRadius: '50px',
              width: '105px',
              height: '38px',
              padding: '5px 20px',
            }}
          >
            <Link
              to="/"
              style={{
                color: location.pathname === '/' ? '#000' : '#FFF',
                fontSize: '18px',
                textDecoration: 'none',
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
              }}
            >
              Projects
            </Link>
          </div>
          <div
            onDoubleClick={handleArchiveDoubleClick}
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              boxSizing: 'border-box',
              color: location.pathname === '/archive' ? '#000' : '#FFF',
              backgroundColor:
                location.pathname === '/archive' ? '#FFF' : 'black',
              borderRadius: '50px',
              width: '105px',
              height: '38px',
              padding: '5px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Link
              to="/archive"
              style={{
                color: location.pathname === '/archive' ? '#000' : '#FFF',
                fontSize: '18px',
                textDecoration: 'none',
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
              }}
            >
              Archive
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
