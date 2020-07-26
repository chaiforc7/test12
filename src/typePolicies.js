import {makeVar} from '@apollo/client'
export const Todos = makeVar([])
if(localStorage.getItem('todos')){
   Todos(JSON.parse(localStorage.getItem('todos')))

}
let typePolicies = {
    Query:{
        fields:{
            Todos:{
                read(_,){
                    return Todos()
                }
            }
        }
    },

}

export default typePolicies