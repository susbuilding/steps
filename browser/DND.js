import React, { Component } from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';
import Controls from './Controls';
import { start, up, down, left, right, reset} from './action-creators';
import { connect } from 'react-redux';

class DND extends React.Component {
    constructor() {
        super()
        this.state = {
            draggable : ['MOVE UP','MOVE DOWN','MOVE LEFT','MOVE RIGHT'],
            dropped   : [],
            hovering  : false,
            something: false
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
        console.log('DND PROPS', this.props)
        let moveUp = () => {
            console.log('UP')
            let current = this.props.playerPosition;
                let newCurrent;
                (current - 6) >= 0 ? newCurrent = (current - 6) : newCurrent = current;
                const squares = this.props.squares.slice(); //copies the array
                this.props.dispatch(up(newCurrent))
                squares[current] = '';
                squares[newCurrent] = '🐼';
                this.props.dispatch(start(squares))
        }
        let moveDown = () => {
            console.log('DOWN')
            let current = this.props.playerPosition;
                    let newCurrent;
                    (current + 6) <= 35 ? newCurrent = (current + 6) : newCurrent = current;
                    console.log('NEW CURRENT CALC', newCurrent, 'CURRENT', current)
                    this.props.dispatch(down(newCurrent))
                    const squares = this.props.squares.slice(); //copies the array
                    squares[current] = '';
                    squares[newCurrent] = '🐼';
                    this.props.dispatch(start(squares))
                    this.setState({
                        something: !this.state.something
                    })
                    console.log("STATE", this.state)
        }
        let moveLeft = () => {
            console.log('LEFT')
            let current = this.props.playerPosition;
                let newCurrent;
                (current - 1) >= 0 ? newCurrent = (current - 1) : newCurrent = current;
                this.props.dispatch(left(newCurrent))
                    const squares = this.props.squares.slice(); //copies the array
                    squares[current] = '';
                    squares[newCurrent] = '🐼';
                    this.props.dispatch(start(squares))
        }
        let moveRight = () => {
            console.log('RIGHT')
            let current = this.props.playerPosition;
                let newCurrent;
                (current + 1) <= 35 ? newCurrent = (current + 1) : newCurrent = current;
                this.props.dispatch(right(newCurrent))
                    const squares = this.props.squares.slice(); //copies the array
                    squares[current] = '';
                    squares[newCurrent] = '🐼';
                    this.props.dispatch(start(squares))
        }

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
        return (
            <div>
                <ul>{draggable}</ul>
                 <span><center><button
                className='Action' type="button" className="btn btn-primary btn-sm"
                onClick={() => {
                    console.log('DROPPED', this.state.dropped)
                    this.state.dropped.forEach(drop => {
                        console.log(drop)
                        if (drop === "MOVE UP") {
                            // console.log('up')
                            moveUp()
                        }
                        if (drop === "MOVE DOWN") {
                            //  console.log('down')
                            moveDown()
                        }
                        if (drop === "MOVE LEFT") {
                            // console.log('left')
                           moveLeft()
                        }
                        if (drop === "MOVE RIGHT") {
                            // console.log('right')
                            moveRight()
                        }
                    })
                }
                }
                >Run All
                </button></center>
                </span>
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
                            return <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                > {/** this should have a key**/}
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

