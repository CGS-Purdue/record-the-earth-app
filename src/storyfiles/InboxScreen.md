
<!-- STORY -->

      <Button>Click</Button>

### imports

  - 'React' from `react`
  - 'PropTypes' from `prop-types`
  - `connect` from `react-redux`
  - `TaskList` from `./TaskList`

\`\`\`js import { TaskList } from '../../components/Task/TaskList'; \`\`\`

### exports

```js
function PureInboxScreen({ error }) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}
```

__default__

```js
connect(({ error }) => ({ error }))(PureInboxScreen);
```

### props

<!-- PROPS -->

  - [error] <string> *null*
