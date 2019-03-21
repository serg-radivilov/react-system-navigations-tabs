// necessary
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { systemNavigationTabsInitializationAction } from "../shared/system-navigation-tabs/actions";
// actions custom
import { createNewTabAction } from "../shared/system-navigation-tabs/actions";

// components
import SystemNavigationTabs from "../shared/system-navigation-tabs/system-navigation-tabs";
import SystemNavigationComponents from "../shared/system-navigation-tabs/system-navigation-components";

// style
import "../style/index.css";

// redux props
const mapDispatchToProps = (dispatch) => bindActionCreators({
    systemNavigationTabsInitializationAction,
    createNewTabAction
}, dispatch);

// export component
class App extends Component {
    componentDidMount () {
        const { systemNavigationTabsInitializationAction } = this.props;
        console.clear();
        console.warn('App - componentDidMount');
        systemNavigationTabsInitializationAction();
    }

    render () {
        const { createNewTabAction } = this.props;

        return (
            <div className="app-wrapper">
                <div className="top-custom-control-panel">

                    <button onClick={ () => createNewTabAction() }>Добавить новый рандомный таб</button>

                    <button onClick={ () => createNewTabAction({
                        id: "0001112222",
                        tabTitle: "Кастомный Tab - 1",
                        testName: "Заголовок для кастомного Таба 1",
                        testText: "Тут может быть ваш текст, для этого нужно открыть среду разработки и ввести сюда ваш текст"
                    }) }>Добавить кастомный таб 1</button>

                    <button onClick={ () => createNewTabAction({
                        id: "000222333",
                        tabTitle: "Кастомный Tab - 2",
                        testName: "Заголовок Второго кастомного Таба",
                        testText: "Халям балям..."
                    }) }>Добавить кастомный таб 2</button>

                </div>

                <div className="tabs-list">
                    <SystemNavigationTabs/>
                </div>

                <div className="components">
                    <SystemNavigationComponents/>
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(App);