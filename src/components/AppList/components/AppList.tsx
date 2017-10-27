import * as React from 'react';
import { App } from '../../../models/App';
import { AppListItem } from './AppListItem';

export interface AppListOwnProps { }

export interface AppListDispatchProps {
    getApps(): void;
}

export interface AppListStateProps {
    apps: App[];
}

export type AppListProps = AppListOwnProps & AppListStateProps & AppListDispatchProps;


export interface AppListState {

}

export class AppList extends React.PureComponent<AppListProps, AppListState> {

    componentWillMount() {
        this.props.getApps();
    }

    handleAppSelected(app: App) {
        console.log(`App ${app.name} selected`);
        document.getElementById('appTitle').innerHTML = app.name;
        document.getElementById('appDescription').innerHTML = app.description;
        document.getElementById('appImage').src = app.smallIcon;
    }

    render() {

        const { apps } = this.props;

        const appListItems: JSX.Element[] = apps.map((app, index) => {
            return (<AppListItem app={app} key={index} onClick={this.handleAppSelected.bind(this, app)} />);
        });

        return (
            <ul>
                <div id="errorLoadingApps" className="alert alert-info">Loading...</div>
                {appListItems}
            </ul>
        );
    }
}
