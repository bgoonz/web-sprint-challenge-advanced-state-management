# createStore | Redux

> API > createStore: creating a core Redux store

Creates a Redux [store](https://redux.js.org/api/store) that holds the complete state tree of your app. There should only be a single store in your app.

([_`Store`_](https://redux.js.org/api/store)): An object that holds the complete state of your app. The only way to change its state is by [dispatching actions](https://redux.js.org/api/store#dispatchaction). You may also [subscribe](https://redux.js.org/api/store#subscribelistener) to the changes to its state to update the UI.

*   Don't create more than one store in an application! Instead, use [`combineReducers`](https://redux.js.org/api/combinereducers) to create a single root reducer out of many.
    
*   Redux state is normally plain JS objects and arrays.
    
*   If your state is a plain object, make sure you never mutate it! For example, instead of returning something like `Object.assign(state, newData)` from your reducers, return `Object.assign({}, state, newData)`. This way you don't override the previous `state`. You can also write `return { ...state, ...newData }` if you enable the [object spread operator proposal](https://redux.js.org/recipes/using-object-spread-operator).
    
*   For universal apps that run on the server, create a store instance with every request so that they are isolated. Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.
    
*   When a store is created, Redux dispatches a dummy action to your reducer to populate the store with the initial state. You are not meant to handle the dummy action directly. Just remember that your reducer should return some kind of initial state if the state given to it as the first argument is `undefined`, and you're all set.
    
*   To apply multiple store enhancers, you may use [`compose()`](https://redux.js.org/api/compose).


[Source](https://redux.js.org/api/createstore)
