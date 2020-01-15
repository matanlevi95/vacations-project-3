import React from 'react';

export interface HeaderProps {
    title: string
}

export interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {
    state = {}
    render() {
        {
            const { title } = this.props
            return (<div>
                <h1>{title}</h1>
            </div>);
        }

    }
}
export default Header;