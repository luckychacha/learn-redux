import React, { Component } from 'react'
import { Link } from 'react-router'

class Head extends Component{
    render() {
        return (
            <div>
                <Link to="/">
                    首页
                </Link>
                <Link to="/Todo">
                    <div>
                        显示Todo组件
                    </div>
                </Link>
                <Link to="/RedditApi">
                    <div>
                        显示reddit组件
                    </div>
                </Link>
                {this.props.children}
            </div>
        )
    }
}

export default Head