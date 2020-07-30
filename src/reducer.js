import {makeVar} from '@apollo/client'
export const Todos = makeVar([])
if(localStorage.getItem('todos')){
   Todos(JSON.parse(localStorage.getItem('todos')))
}
function todoApp(action) {
  switch (action.type) {
    case 'ADD_TODO': {
        localStorage.setItem('todos',JSON.stringify([...Todos(), action.todo]))
      return Todos([...Todos(), action.todo]);
    }
    case 'UPDATE_TODO': {
      let {text} = action.todo;
      let newState = Todos().map((i) => {
        if (i.Id === action.todo.Id) {
          return {
            ...action.todo,
            text
          };
        } else return i;
      });
      localStorage.setItem('todos',JSON.stringify([...newState]))

      return Todos([...newState]);
    }
    case 'COMPLETE_TODO':{
      let {complete} = !action.todo;
      let newState = Todos().map((i) => {
        if (i.Id === action.todo.Id) {
          return {
            ...action.todo,
            complete
          };
        } else return i;
      });
      localStorage.setItem('todos',JSON.stringify([...newState]))

      return Todos([...newState]);
    }
    case 'DELETE_TODO': {
        let {Id} = action.todo;
        let newState = Todos().filter(i=>i.Id!==Id);
        localStorage.setItem('todos',JSON.stringify([...newState]))

        return Todos(newState);
        
    }

    default:
      return Todos();
  }
}

export default todoApp