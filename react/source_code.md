# React 18 源码

## react 最终项目架构设计

### `react-reconciler`
```js
const queue = [];
let index = 0;

const useState = (initialState) => {
  queue.push(initialState);

  const update = (state) => {
    // 为什么在 React中，为什么hooks不能写在判断里
    queue.push(state);
    index++;
  };
  return [queue[index], update];
};

const [count, setCount] = useState(0);
```

### `react-dom`
处理端事情 浏览器相关`react-dom` 跨端开发 `react-native` 3D 相关 `react-three-fiber`
称为渲染器的逻辑
```js
const render = () => {
  console.log("Render");
  document.body.innerHTML = queue[index];
};

render();
```

### `scheduler`
设置优先级调度的 requestIdealCallback scheduler.pushTask 他们都无法满足
一旦有了优先级，你就需要知道当下什么任务最紧急
```js
const reconcile = () => {
  if (prevCount !== queue[index]) {
    render();
    prevCount = queue[index];
  }
};

// 当数据发生了变化 render 要重新调用
// 调度器
const workLoop = () => {
  // render()
  reconcile();

  requestIdleCallback(() => {
    workLoop();
  });
};
workLoop();
```

### `react`
归功于 react react 包是为了统一为外部开发者提供接口协议

所以 react 源码阅读过程，各个包的理解顺序

### `react`
```js
 // 定义宿主配置
 hostConfig = {
  commitMount() {}
  commitUpdate() {}
 }
```

1. react-dom
  - createRoot, (ReactDom.createRoot), createContainer
  - render, updateRender
2. react
  - useState
  - useEffect
3. react-reconciler
  - createFiberRoot
  - initializeUpdateQueue
  - createUpdate
  - enqueueUpdate
4. scheduler
  -