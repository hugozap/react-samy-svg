import { mount } from 'enzyme';
import fs from 'fs';
import path from 'path';
import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { Samy, SvgProxy } from '../src';

/* Note: We use a different svg filename to avoid the cache
   otherwise errors will occur due to lack of SVGElement in jsdom
*/
jest.useFakeTimers();
describe('SamySVG', () => {
  let container;
  let xhr;
  let requests = [];
  let testfile = fs.readFileSync(path.join(__dirname, '1.svg'), 'utf8');

  beforeEach(() => {
    container = document.body.appendChild(document.createElement('div'));
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = xhr => {
      requests.push(xhr);
    };
  });

  afterEach(() => {
    xhr.restore();
    document.body.removeChild(container);
  });

  it('loads SVG', done => {
    const component = mount(
      <Samy
        path="1.svg"
        onSVGReady={svg => {
          expect(svg).toBeTruthy();
          done();
        }}
      />,
      { attachTo: container }
    );
    requests[0].respond(200, {}, testfile);
    jest.runAllTimers();
  });

  it('applies style', done => {
    const component = mount(
      <Samy
        path="2.svg"
        style={{ width: '150px' }}
        onSVGReady={svg => {
          expect(svg.style.width).toBe('150px');
          done();
        }}
      />,
      { attachTo: container }
    );
    requests[0].respond(200, {}, testfile);
    jest.runAllTimers();
  });

  it('applies svgAttributes to SVG', done => {
    const component = mount(
      <Samy
        path="3.svg"
        viewBox="10 10 100 200"
        onSVGReady={svg => {
          expect(svg.getAttribute('viewBox')).toBe('10 10 100 200');
          done();
        }}
      />,
      { attachTo: container }
    );
    requests[0].respond(200, {}, testfile);
    jest.runAllTimers();
  });

  it('SvgProxy changes attribute', done => {
    const component = mount(
      <Samy
        path="4.svg"
        viewBox="10 10 100 200"
        onSVGReady={svg => {
          expect(svg.querySelector('#Star').getAttribute('test')).toBe('xyz');
          done();
        }}
      >
        <SvgProxy selector="#Star" test="xyz" />
      </Samy>,
      { attachTo: container }
    );
    requests[0].respond(200, {}, testfile);
    jest.runAllTimers();
  });

  it('Changing parent element prop updates the SVG node', done => {
    const component = mount(
      <Samy
        path="4.svg"
        viewBox="10 10 100 200"
        onSVGReady={svg => {
          component.setProps({width:'200px'});
          console.log(svg.innerHTML);
          expect(svg.getAttribute('width')).toBe('200px')
        }}
      >
        <SvgProxy selector="#Star" test="xyz" />
      </Samy>,
      { attachTo: container }
    );
    requests[0].respond(200, {}, testfile);
    jest.runAllTimers();
  });

  it('SvgProxy changes text', done => {
    const component = mount(
      <Samy
        path="5.svg"
        viewBox="10 10 100 200"
        onSVGReady={svg => {
          expect(svg.querySelector('#Star').innerHTML.includes('hello')).toBe(
            true
          );
          done();
        }}
      >
        <SvgProxy selector="#Star">hello</SvgProxy>
      </Samy>,
      { attachTo: container }
    );
    requests[0].respond(200, {}, testfile);
    jest.runAllTimers();
  });
});
