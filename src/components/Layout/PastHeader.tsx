import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useResponsiveWidth from '../hooks/useResponsiveStyles'

const PastHeader = () => {
  const location = useLocation()
  const windowWidth = useResponsiveWidth()

  const screenToSmall = windowWidth < 600

  return (
    <>
      <div style={{ display: 'flex' }}>
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
                width: '270px',
                height: '38px',
                padding: '5px 20px'
              }}
            >
              <span
                style={{
                  display: 'inline-block'
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: 'white',
                    fontSize: '18px',
                    textDecoration: 'none',
                    fontFamily:
                      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
                  }}
                >
                  Before text-to-image models
                </Link>
              </span>
            </div>
          </Link>
        </div>
        {screenToSmall ? (
          ''
        ) : (
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
                padding: '5px 20px'
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
        )}
      </div>
    </>
  )
}

export default PastHeader
