import React, { Component } from 'react'

class Confirm extends Component {
    render() {
        const { content, onOk, onCancel, okText="确定", cancleText="取消" } = this.props
        return (
            <div className="ski-modal-confirm dialog">
                <div className="dialog-con">{content}</div>
                <div className="button-wrapper">
                    <button type="button" className="cancle" onClick={() => { onCancel && onCancel() }}>{cancleText}</button>
                    <button type="button" className="ok" onClick={() => { onOk && onOk() }}>{okText}</button>
                </div>
            </div>
        )
    }
}

export default Confirm