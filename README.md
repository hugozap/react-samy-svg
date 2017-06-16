# SamySVG :cyclone:

Usually, the SVG code has to be pasted into the markup to manipulate it. With SamySVG you can keep your .svg file separated without losing the ability to manipulate it in a declarative way. :ok_hand:

### Installation

```
npm install react-samy-svg
```

### Usage

Import the `Samy` and `Proxy` elements

```js
import {Samy, Proxy} from 'react-samy-svg'

```

Inside the render method of your component:

```jsx
<Samy path="1.svg" style={{width:400, height:'auto'}}>
  <Proxy select="#Star" stroke={this.state.strokeColor}> </Proxy>
</Samy>
```
In the previous code, the stroke attribute of the element with id "star" is set to the value of the state property `strokeColor`

The .svg file can evolve separately as long as the selectors used by the `Proxy` elements are valid :star2: :star2: :star2:




