import React, { Component } from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';
import Controls from './Controls';
import { connect } from 'react-redux';

class DND extends React.Component {
    constructor() {
        super()
        this.state = {
            draggable : ['MOVE UP','MOVE DOWN','MOVE LEFT','MOVE RIGHT'],
            dropped   : [],
            hovering  : false
        }

        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }
    onDragEnter() {
        this.setState({ hovering : true })
    }
    onDragLeave() {
        this.setState({ hovering : false })
    }
    onDrop(e) {
        let newDropped = this.state.dropped.slice();
        newDropped.push(e.item);
        this.setState({ hovering : false, dropped : newDropped })
        clearTimeout(this.dropTimeout)
        // this.dropTimeout = setTimeout(() => {
        //     this.setState({ dropped : '' })
        // },1500)
    }
    render() {
        let draggable = this.state.draggable.map((title, index) => {
            return (
                // <li key={title}>
                //     <Draggable enabled={index < 4} type="item" data={title}>{title}</Draggable>
                // </li>
                <button type="button" className="btn btn-primary btn-sm" key={title}>
                <Draggable enabled={index < 4} type="item" data={title}>{title}</Draggable>
                </button>
            )
        })
        let droppableStyle = {
            height : '200px'
        }
        if (this.state.hovering) droppableStyle.backgroundColor = 'pink'
        console.log('DROPPED', this.state.dropped)
        return (
            <div>
                <ul>{draggable}</ul>
                <div style={{border:'1px solid black', width:'400px',height:'200px', position:'relative'}}>
                    <span style={{position:'absolute',float:'left',color:'gray'}}>Drop here...</span>
                    <Droppable
                        types={['item']}
                        style={droppableStyle}
                        onDrop={this.onDrop}
                        onDragEnter={this.onDragEnter}
                        onDragLeave={this.onDragLeave}>
                        {/** <div style={{textAlign:'center', lineHeight:'50px'}}> **/}
                        {this.state.dropped && this.state.dropped.map((title, index) => {
                            return <button type="button" className="btn btn-primary btn-sm"> {/** this should have a key**/}
                                {title}
                            </button>
                        })
                        }
                        {/** </div> **/}
                    </Droppable>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        squares: state.squares,
        playerPosition: state.playerPosition
    }
}

export default connect(mapStateToProps)(DND)

