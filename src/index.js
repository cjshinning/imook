import {createStore} from 'redux'

// 创建一个reducer
// 根据旧的state和action生成新的state
function counter(state=0,action){
    switch(action.type){
        case '加机关枪':
            return state+1
        case '减机关枪':
            return state-1
        default: 
            return 10
    }
}

// 新建一个store
let store=createStore(counter)

function listener(){
    let current=store.getState();
    console.log(`现在有机枪${current}把`)
}

store.subscribe(listener)

let init=store.getState()
console.log(init)

// 派发事件，传递action
store.dispatch({type:'加机关枪'})

store.dispatch({type:'加机关枪'})

store.dispatch({type:'减机关枪'})