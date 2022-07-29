import {useToasts} from "react-toast-notifications"


const FetchProvider = ({children}) => {
 const {addToast}=   useToasts()



const options = {
catchePolicy:"no-catche"
 ,interceptors: {
        
        request: async ({ options, url, path, route }) => {
          //  if (isExpired(token)) {
                //token = await getNewToken()
              //  setToken(token)
         //   }
           // options.headers.Authorization = `Bearer ${token}`
          //  return options
        },
        // every time we make an http request, before getting the response back, this will run
        response: async ({ response }) => {
            if(!response.ok){
                addToast( response.data.message , {appearance:"error",autoDismiss:true})
                
            }
           
            return response
        }
    }


};




    return (  <provider option = {options}>
        {children}

    </provider>);
}
 
export default FetchProvider;