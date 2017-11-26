const ReactDom = require('react-dom');
const React = require('react');
const { Samy, SvgProxy } = require('../src/index');

export default props => {
  //Note: The selector is "#text-3 tspan"
  return (
    <Samy path="text.svg" style={{ width: 400, height: 'auto' }}>
      <SvgProxy selector="#text-3 tspan">Text changed</SvgProxy>
    </Samy>
  );
};
