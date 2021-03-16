import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import { NavDropdown, Nav } from "react-bootstrap"
import { mediaBreakpoint } from '../utils/breakpoints'

const StyledMenu = styled.div`
  .nav-link {
    margin: 0.25rem;
    padding: 0;
    list-style: none;
    font-size: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #222222 !important;

    &.active {
    }

    &.orange {
      color: #f17d6e !important;
      font-weight: 400;

      &:hover {
        color: darken(#f17d6e, 10%) !important;
      }
    }
  }

  @media ${mediaBreakpoint.down.sm} {
    .nav-link, .styled-dropdown-item {
      font-size: 22px;
    }
    .styled-dropdown-item.dropdown-item {
      font-size: 20px;
    }
  }

`

export default function Menu() {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      contentfulSiteConfig(title: { eq: "wisp" }) {
        title
        mainMenu {
          title
          slug
          childPages {
            title
            navTitle
            slug
          }
        }
      }
    }
  `)
  const topLevelPages = data.contentfulSiteConfig.mainMenu

  return (
    <>
      <StyledMenu>
        <Nav>
          {/* //TODO - Create active / partially active class styles */}
          {/* //TODO - If you're on a sub cat. Parent is "active" too */}
          {topLevelPages &&
            topLevelPages.map(page => {
              //If the node has child pages - Render Wrapper Dropdown
              if (page.childPages) {
                return (
                  <NavDropdown key={page.slug} title={page.navTitle || page.title}>
                    {page.childPages.map(childPage => {
                      return (
                        <NavDropdown.Item
                          key={childPage.slug}
                          as={Link}
                          to={childPage.slug}
                          activeClassName="active"
                          className="styled-dropdown-item"
                        >
                          {childPage.navTitle || childPage.title}
                        </NavDropdown.Item>
                      )
                    })}
                  </NavDropdown>
                )
              }

              //If the node doesn't have child pages - Render Standard Link
              // if (!page.childPages) {
              return (
                <Nav.Link
                  className={page.title.toLowerCase().includes('quiz') ? 'orange' : ''}
                  key={page.slug}
                  as={Link}
                  to={page.slug}
                  activeClassName="active"
                >
                  {page.title}
                </Nav.Link>
              )
              // }
            })}

          <Nav.Link href="https://secure.hellowisp.com/account/login">
            Login
          </Nav.Link>
        </Nav>
      </StyledMenu>
    </>
  )
}
