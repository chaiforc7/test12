import { Todos } from "./reducer";


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