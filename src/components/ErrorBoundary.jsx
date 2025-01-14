import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorInfo: null
        }
    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error,errorInfo){
        this.setState({errorInfo})
        console.log('error caught by error boundary' )
    }


    render(){
        if (this.state.hasError){
            <h2>Hello Aakash!!</h2>
        }
        return this.props.children;
    }
}


export default ErrorBoundary;

/*

catches: 
- Errors thrown during rendering(during mounting).

dosen't catch:
- Errorsin event handlers(eg. onClick,onSubmit)
- Errors in lifecycle methods(eg. componentDidMount,componentDidUpdate)use try-catch

- Error during async operations(eg. fetch)

*/

// Memoization- memoization is an optimization technique that helps to improve performance by caching the results of expensive 
// function calls and reusing the cached result when the same inputs occur again.

// function child({props}){
//     displaying props 
// }

// function parent {
//     const [props, setprops] = useState(0)
//     setprops(10)
//     <child props ={props}/>
// }



