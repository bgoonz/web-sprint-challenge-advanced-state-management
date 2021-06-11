# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


---
---



1. What problem does the context API help solve?

> Sometimes for smaller applications with simple but deeply nested components... redux is overkill. In these situations you don't nescissarily need a library to deal with state managment the way you would with a larger application. In these situations it is convinient not to add unessicary complexity that comes with the teritroy of using REDUX.




---

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. 
   What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-  actions: Actions are plain JavaScript object that must have a type attribute to indicate the type of action performed. They provide information (called a payload) to the Redux store. Action creators send actions via the dispatch function to reducers.


- reducers: A pure function that takes in state and action and creates a new state based on the action.type. A reducer is a set of options that can be preformed on the current state to get to the updated state and a central location where the state is held until an action type matces a specific case described in the reducer... this case will result in the exicution of a set of instructions on how to modify the state based on the nature of the action and payload recieved from the action object.


- store: The Redux store an object that represents the current state of the application. Whenever the store is updated, it will update the React components subscribed to it. It is updated by either spreadig the previous state or using object.assign() but importantly an update in state must not mutate the store object contaning the previous state.The store is used for  storing, reading, and updating state.

---

1. What does `redux-thunk` allow us to do? How does it change our `action-creators`?


>Redux Thunk is used when communicating asynchronously with an external API to retrieve or save data ...in which case it serves as middlewareenabling us to call action creators that return a function instead of an action object. Said function receives the store’s dispatch method, which is in turn used to dispatch regular synchronous actions inside the function’s body once the asynchronous operations have resolved.



---

4. What is your favorite state management system you've learned and this sprint? Please explain why!

> I think the most important takeaway from this week was not to play favorites ... because for the range of apps you might end up developing there is no one size fit's all solution. My favorite state managment system depends wholly on the use case.






---
