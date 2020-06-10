import React from 'react';
import Button from './Component/Button'
import './App.css';

function App() {
  return (
    <div className="container">
      <div>
      <h4>Button Types</h4>
      <Button text="solid" type="solid"  />
      <Button text="outlined" type="outlined" />
      <Button text="flat" type="flat" />
      <h4>Button Size</h4>
     <Button text="large" type="large" />
     <Button text="medium" type="medium" />
     <Button text="small" type="small" />
     <Button text="flat small" type="flat" size="small" />
     <Button text="outlined small" type="outlined" size="small" />
     <h4>Button With Icon</h4>
     <Button size="large" type="flat" icon={true} text="SAMPLE TEXT" />
    <Button size="large" icon={true} text="SAMPLE TEXT" />
    <Button icon="true" text="SAMPLE TEXT" />
    <Button type="outlined" icon={true} text="SAMPLE TEXT"/>
      </div>
     
    </div>
  );
}

export default App;
