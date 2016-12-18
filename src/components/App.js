// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';

// this.props.children is a prop passed down to App by React. it is the nested child component within App.

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};


export default App;
