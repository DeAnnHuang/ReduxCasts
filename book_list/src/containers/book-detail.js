import React, { Component } from 'react';
import connect from 'react-redux';


class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return <div>selected a book to start!</div>;
        }

        return (
            <div>
                <h2>Book detail:</h2>
                <p>{this.props.book.title}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        book: state.activeBook
    };
}
export default connect(mapStateToProps)(BookDetail);