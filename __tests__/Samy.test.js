import React from 'react';
import { Samy, Proxy } from '../src';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { mount } from 'enzyme';
import fs from 'fs';
import path from 'path';

let container;
let xhr;
let requests = [];
let testfile = fs.readFileSync(path.join(__dirname, '1.svg'), 'utf8');

/* Note: We use a different svg filename to avoid the cache
   otherwise errors will occur due to lack of SVGElement in jsdom
*/
jest.useFakeTimers();
describe('SamySVG', () => {
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
        svgAttributes={{ viewBox: '10 10 100 200' }}
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

  it('Proxy changes attribute', done => {
    const component = mount(
      <Samy
        path="4.svg"
        svgAttributes={{ viewBox: '10 10 100 200' }}
        onSVGReady={svg => {
          expect(svg.querySelector('#Star').getAttribute('test')).toBe('xyz');
          done();
        }}
      >
        <Proxy select="#Star" test="xyz" />
      </Samy>,
      { attachTo: container }
    );
    requests[0].respond(200, {}, testfile);
    jest.runAllTimers();
  });

  it('Proxy changes text', done => {
    const component = mount(
      <Samy
        path="5.svg"
        svgAttributes={{ viewBox: '10 10 100 200' }}
        onSVGReady={svg => {
          console.log(svg.innerHTML);
          expect(svg.querySelector('#Star').innerHTML.includes('hello')).toBe(
            true
          );
          done();
        }}
      >
        <Proxy select="#Star">hello</Proxy>
      </Samy>,
      { attachTo: container }
    );
    requests[0].respond(200, {}, testfile);
    jest.runAllTimers();
  });
});
