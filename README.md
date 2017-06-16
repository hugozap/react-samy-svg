# SamySVG :cyclone:

SVG embedding and (declarative) manipulation for React.

The main benefit of using SamySVG is that you don't need to paste the SVG code into the markup. By using the `Proxy` element you can
refer to SVG elements using React declarative way.

```jsx
<Samy path="1.svg" style={{width:400, height:'auto'}}>
  <Proxy select="#Star" stroke={strokeColor}> </Proxy>
</Samy>
```

