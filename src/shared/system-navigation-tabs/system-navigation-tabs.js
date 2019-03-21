// necessary
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { updateNavigationListAction } from "./actions";


// redux props
const mapStateToProps = (state) => ({
    navigationTabsList: state.systemNavigationTabsState.navigationTabsList
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateNavigationListAction
}, dispatch);

// export component
class SystemNavigationTabs extends Component {
    _openComponent = (id) => {
        const {
            navigationTabsList,
            updateNavigationListAction
        } = this.props;

        const updateNavigationList = navigationTabsList.map((item) => ({
            ...item,
            isOpen: item.id === id
        }));

        updateNavigationListAction(updateNavigationList);
    };

    _closeTab = (id) => {
        const {
            navigationTabsList,
            updateNavigationListAction
        } = this.props;

        const updateNavigationList = navigationTabsList.filter((item) => (item.id !== id));

        updateNavigationListAction(updateNavigationList)
    };

    _renderTab = (id, tabTitle, isOpen, hideBtnClose) => {
        const classList = ["tab-item"];

        if (isOpen) {
            classList.push("tab-item-active")
        }

        return (
            <div key={ id } className={ classList.join(" ") }>
                <span onClick={ () => this._openComponent(id) }>{ tabTitle }</span>
                { !hideBtnClose && <button onClick={ () => this._closeTab(id) }>X</button> }
            </div>
        )
    };

    render () {
        const { navigationTabsList } = this.props;

        return navigationTabsList.map((item) => {
            return this._renderTab(item.id, item.tabTitle, item.isOpen, item.hideBtnClose)
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SystemNavigationTabs);