# Changelog

## [3.0.0] - 2018-01-16

- Added svgXML prop to load the svg contents from string (no ajax load)
- Docs updated
- Tests switched to cypress.io


## [2.1.0] - 2017-12-19

- Removes wrapper div. Uses React fragments.
- Updated react-svg dependency.

## [2.0.2] - 2017-12-03

- Support for react naming convention for events e.g onClick (previously only onclick worked).
- Cleaning

## [2.0.1] - 2017-11-27

- Fix #7 (old references to 'select' attribute)

## [2.0.0] - 2017-11-26

- Api Breaking changes
  - Renamed "select" attribute to "selector"
  - Renamed "Proxy" to "SvgProxy"

## [1.0.11] - 2017-11-25

- Fix react 16 (using prop-types)
- Simplified build
- Fixed example dependency (react-move)