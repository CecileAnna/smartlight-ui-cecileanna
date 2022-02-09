import React from 'react';
import Error from './components/Error';

class ErrorBoundary extends React.Component {

    state = {hasError: false};

    static getDerivedStateFromError(error) {

        return { hasError: true};

    }

    componentDidCatch(error, errorInfo){

        error.service.log({error, errorInfo});

    }

    render() {

        if (this.state.hasError = true) {

           return (

            <Error/>

           );

        }

       
        return this.props.children
    }

}

export default ErrorBoundary;