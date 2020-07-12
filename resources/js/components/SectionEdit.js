import React, { Component } from 'react'
import SectionFormEdit from "./SectionFormEdit"


class SectionEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionTitle: "",
            sectionDesc: "",
            sections: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.put(`/sections/${this.props.match.params.id}`, {
                title: this.state.sectionTitle,
                description: this.state.sectionDesc,
            })
            .then(() => {
                this.props.history.push('/')
            })
    }

    getSections() {
        axios.get(`/sections/${this.props.match.params.id}/edit`).then(response =>
            this.setState({
                section: response.data.section,
                sectionTitle: response.data.section.title,
                sectionDesc: response.data.section.description,
            })
        )
    }
 
    componentDidMount(){
        this.getSections()
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <SectionFormEdit
                                 handleSubmit={this.handleSubmit}
                                 handleInputChange={this.handleChange}
                                 valueTitle={this.state.sectionTitle}
                                 valueDesc={this.state.sectionDesc} 
                                 formTitle='Измение'
                                 formAction='Изменить'
                        />
                        <div />
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionEdit