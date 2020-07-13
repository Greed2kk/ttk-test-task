import React, { Component } from "react"
import Spinner from "./Spinner"
import SectionFormEdit from "./SectionFormEdit"
import { Link } from 'react-router-dom'
import Books from './Books'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            sectionTitle: "",
            sectionDesc: "",
            sections: [],
            permissions: "",
            userId: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderSections = this.renderSections.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;

        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post("/sections", {
            title: this.state.sectionTitle,
            description: this.state.sectionDesc
        })
            .then(response => {
                this.setState({
                    sections: [response.data, ...this.state.sections],
                    sectionTitle: "",
                    sectionDesc: ""
                });
            })
            .catch(err => {
                if (err.response) {
                    alert("Только админ может создавать разделы");
                }
            })
    }

    renderSections() {
        return this.state.sections.map(section => (
            <div key={section.id} className="media">

                <div
                    className="media-body border border-danger rounded ml-auto p-1"
                    style={{ marginTop: "10px" }}
                >
                    <div className="buttons-group">
                        <button
                            onClick={() => this.handleDelete(section.id)}
                            className="btn btn-sm ml-auto mr-1 btn-danger float-right"
                        >
                            Удалить
                            </button>
                        <Link
                            to={`/${section.id}/edit`}
                            className="btn btn-sm ml-auto mr-1 btn-primary float-right"
                        >
                            Изменить
                            </Link>
                    </div>
                    <div
                        className="media-content"
                        style={{ marginBottom: "10px" }}
                    >
                        <b>Название раздела: </b> {section.title} <br />{" "}
                        <b>Описание раздела:</b> {section.description}
                    </div>
                    <Books
                        section_id={section.id}
                        user_id={section.user_id}
                    />
                </div>
            </div>
        ));
    }

    getSections() {
        axios.get("/sections").then(response => {
            return this.setState({
                loading: false,
                sections: [...response.data.sections]
            });
        });
    }

    componentDidMount() {
        this.getSections();
    }

    handleDelete(id) {
        const isNotId = section => section.id !== id;
        const updatedSections = this.state.sections.filter(isNotId);
        this.setState({ sections: updatedSections });

        axios.delete(`/sections/${id}`);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <SectionFormEdit
                            actionName="Создать раздел"
                            handleSubmit={this.handleSubmit}
                            handleInputChange={this.handleInputChange}
                            valueTitle={this.state.sectionTitle}
                            valueDesc={this.state.sectionDesc}
                            formTitle="Создание"
                            formAction="Создать"
                        />
                        <div className="card" style={{ marginTop: "10px" }}>
                            <div className="card-header">
                                Актуальные разделы
                            </div>
                            <div className="card-body">
                                {this.state.loading ?
                                    <Spinner />
                                    :
                                    this.renderSections()
                                }
                            </div>
                        </div>
                        <div />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
