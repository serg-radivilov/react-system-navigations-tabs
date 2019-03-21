// necessary
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// initial components
import initialNavigationComponents from "./initial-navigation-components";

// redux props
const mapStateToProps = (state) => ({
    navigationTabsList: state.systemNavigationTabsState.navigationTabsList
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

// export component
class SystemNavigationComponents extends Component {
    render () {        
        const { navigationTabsList } = this.props;

        return navigationTabsList.map((item) => {
            const Component = initialNavigationComponents[item.componentId];

            return (
                <div key={ item.id } style={ { display: item.isOpen ? "" : "none" } }>
                    <Component
                        testName={ item.testName }
                        testText={ item.testText }
                    />
                </div>
            )
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SystemNavigationComponents);