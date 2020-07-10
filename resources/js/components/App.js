import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionTitle: "",
            sectionDesc: "",
            sections: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;

        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Разделы</div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="sectionTitlle">
                                            Название раздела:
                                        </label>
                                        <input
                                            onChange={this.handleInputChange}
                                            name="sectionTitle"
                                            value={this.state.sectionTitle}
                                            className="form-control"
                                            id="sectionTitlle"
                                            maxLength="150"
                                            placeholder="Введите название раздела"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="sectionDesc">
                                            Описание:
                                        </label>
                                        <textarea
                                            onChange={this.handleInputChange}
                                            name="sectionDesc"
                                            value={this.state.sectionDesc}
                                            className="form-control"
                                            id="sectionDesc"
                                            rows="2"
                                            maxLength="500"
                                            placeholder="Введите текст описания"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Создать раздел
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
