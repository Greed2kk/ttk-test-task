import React, { Component } from 'react'
import Spinner from './Spinner'


class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            loading: true,
        }
        this.renderBooks = this.renderBooks.bind(this);
    }

    getBooks() {
        axios.get("/books").then(response => {
            return this.setState({
                loading: false,
                books: [...response.data.books]
            });
        });
    }

    componentDidMount() {
        this.getBooks();
    }

    renderBooks() {
        return this.state.books.map((book) => {
            if (this.props.section_id === book.section_id){
                return (
                    <tr id={book.id} key={book.id}>
                        <th scope="row">{book.id}</th>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.year}</td>
                    </tr>
                )
            }
        }, this)
     
        
    }

    render() {
        return (

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Автор</th>
                        <th scope="col">Год</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderBooks()}
                </tbody>
            </table>
        )
    }


}

export default Books