import React, { Component ,Fragment} from 'react'

export default class Demo extends Component {
    render() {
        return (
            <Fragment key={1} children="111">
                <input type="text" />
                <input type="text" />
            </Fragment>
        )
    }
}
