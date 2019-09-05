// Component API
//
// this.props
// Components can be configured upon instantiation by passing properties to the constructor -
// these properties are called props.
// props may be accessed from within the component's methods as this.props,
// in order to alter how the component is rendered and/or how it behaves.
// However, props must not be altered from within the component's methods.
//
// A parent element may alter a child element's props at any time.
// The child element will generally re-render itself to reflect its new configuration parameters.
// A child component may decide not to re-render itself even though its configuration has changed,
// as determined by shouldComponentUpdate() (more on this in the Component Lifecycle API section).
//
// this.state
// Components may maintain their state internally within the object state.
//  this.state may be accessed from within component methods.
// Unlike props, parent elements may not access a child's state,
// as it is intended to manage the child's internal state rather than external configuration.
//
// Note that you should never directly assign to a specific key within the state object,
// e.g. this.state.foo = 'bar', but instead use the method this.setState().
//
// this.setState(object newState)
// Components may update their state by passing an object to the method this.setState().
// Any keys in the object passed to the method will be merged into (and override any existing keys in) this.state.
//

// Mounting Cycle
//
// constructor(object props)
// --The parameters to the constructor are the element's initial props,
//  as specified by the parent element. You can optionally specify an initial state for the element by assigning an object to this.state
//
//  componentWillMount()
// This method is invoked only once, before rendering occurs for the first time
//
// render() -> React Element
// The render method must return a React Element to render (or null, to render nothing).
// componentDidMount()
// This method is invoked only once, after rendering occurs for the first time.
//  At this point, the native UI for this element has finished rendering,
//  and may be accessed through 'this.refs' for direct manipulation.
//  If you need to make async API calls or execute delayed code with setTimeout, that should generally be done in this method.

// Updating Cycle
//
// componentWillReceiveProps(object nextProps)
// The parent of this component has passed a new set of props.
// This component will re-render.
// You may optionally call 'this.setState()' to update this component's
// internal state before the render method is called.
//
// shouldComponentUpdate(object nextProps, object nextState) -> boolean
// Based on the next values of props and state, a component may decide to re-render or not to re-render. The base class's implementation of this method always returns true (the component should re-render). For optimization, override this method and check if either props or state have been modified, e.g. run an equality test of each key/value in these objects. Returning false will prevent the render method from being called.
//
// componentWillUpdate(object nextProps, object nextState)
// This method is invoked, after the decision has been made to re-render.
// You may not call this.setState() here, since an update is already in progress.

// render() -> React Element
// This method is called, assuming shouldComponentUpdate returned true.
// The render method must return a React Element to render (or null, to render nothing).
//
// componentDidUpdate(object prevProps, object prevState)
// This method is invoked after re-rendering occurs.
// At this point, the native UI for this component has been updated to
//  reflect the React Element returned from the render() method
