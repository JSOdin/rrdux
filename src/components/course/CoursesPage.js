import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from'../../actions/courseActions';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          course:{title:''}
        };

        this.onTitleChange = this.onTitleChange.bind(this); // without binding, "this" in the functions refers to the input element and not our class instance.
                                                              // React with ES5 using createClass autobound for you, but not with ES6
        this.onClickSave=this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave(){
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course,index){
        return (<div key={index}>{course.title}</div>);
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}/>
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}/>

            </div>
        );
    }
}

CoursesPage.propTypes = {
  /*dispatch: PropTypes.func.isRequired,*/
    actions:PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

// redux stuff

function mapStateToProps(state, ownProps){  // state gets passed in from store from Provider. this func will
// get called every time the store data changes and gets passed in the new state (made by reducer)
    debugger;
    return {
        courses: state.courses  // "courses" available as this.props.courses in our component
    };
}

function mapDispatchToProps(dispatch){ // determines what actions are available in our component. now available as part of component props
    /*return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    };*/

    return {
        actions: bindActionCreators(courseActions, dispatch) // will go through courseActions and find all the actions in that file then wrap them in a call to dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);   // optional second parameter 'mapDispatchToProps'.
// if ommitted, connect will automatically assign "dispatch" function as a prop in the component
// dispatch is a function that lets you fire off your actions
