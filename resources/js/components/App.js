import React, { Component } from "react"
import LoadingSpinner from "./Spinner"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            sectionTitle: "",
            sectionDesc: "",
            sections: []
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderSections = this.renderSections.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;

        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.post('/sections', { 
            title: this.state.sectionTitle,
            description: this.state.sectionDesc,
        }).then(response => {
            this.setState({
                sections: [response.data, ...this.state.sections],
                sectionTitle: '',
                sectionDesc: '',
            })
        })
    }

    renderSections(){
        return this.state.sections.map(section => (
            <div key={section.id} className="media">
                <div className="media-body">
                    <div>
                        {section.title}
                    </div>
                </div>
            </div>
        )) 
    }

    getSections() {
        axios.get('/sections').then((response) => {
            return this.setState({
                loading: false,
                sections: [...response.data.sections],
            })
        })
    }

    componentDidMount(){
        this.getSections()
    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Создать раздел</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
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
                        <div className="card" style={{ marginTop: '10px' }}>
                            <div className="card-header">Актуальные разделы</div>
                            <div className="card-body">
                            {this.state.loading ? <LoadingSpinner /> : this.renderSections()}
                            </div>
                        </div>
                        <div/>   
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
