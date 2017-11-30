[![build status](https://img.shields.io/travis/hugozap/react-samy-svg/master.svg?style=flat-square)](https://travis-ci.org/hugozap/react-samy-svg)

# SamySVG :cyclone:

Usually, the SVG code has to be pasted into the markup to manipulate it. With
SamySVG you can keep your .svg file separated without losing the ability to
manipulate it in a declarative way. :ok_hand:

### Installation

```
npm install react-samy-svg
```

### Usage

Import the `Samy` and `SvgProxy` elements

```js
import { Samy, SvgProxy } from 'react-samy-svg';
```

```jsx
<Samy path="1.svg">
  <SvgProxy selector="#Star" stroke={this.state.strokeColor}>
    {' '}
  </SvgProxy>
</Samy>;
```

In the previous code, the stroke attribute of the element with id "star" is set
to the value of the state property `strokeColor`. **Any property set in the
SvgProxy element will also be set in the svg child node**.

Note: The SVG path can be an external URL (Thanks to SVGInjector and react-svg)

### Components

#### Samy

The basic syntax to load and inject the SVG is:

```jsx
<Samy path="1.svg" />;
```

Properties:

* path: (string) **required** the URL of the svg file
* style: (object) style that will be forwarded to the SVG element when loaded
* onSVGReady (function): Callback called with the svg element.
* set any other props to have them be passed through to the SVG (like the
  viewbox).

#### SvgProxy

Whenever you want to manipulate an SVG internal element you can use the SvgProxy
element.

```jsx
<SvgProxy selector="#myElementId" fill="#000" />;
```

the `select` attribute can target multiple elements, so this is valid:

```jsx
<SvgProxy selector="#rightEye,#leftEye" fill="#000" />;
```

Properties:

* select: (string) CSS selector for the element(s)
* onElementSelected: (function) callback that receives the element (or list of
  elements that this SvgProxy tracks)

#### Changing text nodes

The SvgProxy element can be used to change the text elements inside an SVG. (In
this case by selecting the `tspan` inside `#myTextElement`)

```jsx
<SvgProxy selector="#myTextElement tspan">Text changed</SvgProxy>;
```

### Animation

You can animate elements by using some of the popular React animation libraries
like React-move. It's no different than animating other DOM elements.

```jsx
<Animate
  // Set some default data
  default={{
    rotation: 0
  }}
  // Update your data to whatever you want
  data={{
    rotation: this.state.rotation
  }}
  duration={300}
  easing="cubicin"
>
  {data => <SvgProxy selector="#box" transform={`rotate(${data.rotation})`} />}
</Animate>;
```
