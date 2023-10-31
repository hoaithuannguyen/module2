import React, { Component } from 'react'
import Bai4_1 from './Bai4_1'
import Bai4_2 from './Bai4_2'

export default class Bai4 extends Component {
    render() {
        return (
            <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">

                                        <Bai4_1 />

                                        <Bai4_2 />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
