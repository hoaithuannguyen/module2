import React, { Component } from 'react'

export default class Bai1 extends Component {
    render() {
        let students = ["html", "python", "ruby", "diamon"];
        return (
            <>
                <h1>Danh sách khóa học</h1>
                {
                    students.map((item, index) => (
                        <li key={index}>{item}</li>
                    )
                    )
                }
            </>
        )
    }
}
