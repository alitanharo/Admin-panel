const FetchProvider = ({children}) => {

const options = {
catchePolicy:"no-catche"


};




    return (  <provider option = {options}>
        {children}

    </provider>);
}
 
export default FetchProvider;