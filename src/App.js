import React from 'react';

class App extends React.Component{
  render(){
    const boss = '李云龙';
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <一营 老大="张大喵"></一营>
        <骑兵连 老大="孙德胜"></骑兵连>
      </div>
    )
  }
}

function 骑兵连(props){
  return <h2>骑兵连连长，{props.老大}</h2>
}

class 一营 extends React.Component{
  render(){
    return (
      <div>
        <h2>一营营长，{this.props.老大}</h2>
      </div>
    )
  }
}

export default App;