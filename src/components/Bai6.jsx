import React, { Component } from 'react'
import "../bai6.css"
import Bai6_1 from './Bai6_1'
import Bai6_2 from './Bai6_2'
import Bai6_3 from './Bai6_3'
import Bai6_4 from './Bai6_4'
import Bai6_5 from './Bai6_5'

export default class Bai6 extends Component {
    render() {
        return (
            <>
                <Bai6_1 />
                {/* End header area */}
                {/* End site branding area */}
                <Bai6_2 />
                {/* End mainmenu area */}
                <Bai6_3 />
                {/* List product */}
                <Bai6_4 />
                {/* Footer area */}
                <Bai6_5 />
            </>
        )
    }
}
