import React from 'react';

class App extends React.Component{
  render(){
    const boss = '李云龙';
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <一营></一营>
      </div>
    )
  }
}

class 一营 extends React.Component{
  render(){
    const boss = '张大喵';
    return (
      <div>
        <h2>一营营长，{boss}</h2>
      </div>
    )
  }
}

export default App;