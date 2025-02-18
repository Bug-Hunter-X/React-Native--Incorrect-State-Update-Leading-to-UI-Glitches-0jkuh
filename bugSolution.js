```javascript
//Correct way to handle state updates
this.setState(prevState => ({ count: prevState.count + 1 }));
```