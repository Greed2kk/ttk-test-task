import React, { Component } from "react"

class SectionFormEdit extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <div className="card">
            <div className="card-header">{this.props.formTitle} раздела</div>
            <div className="card-body">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="sectionTitlle">
                           <b> Название раздела: </b>
                        </label>
                        <input
                            onChange={this.props.handleInputChange}
                            name="sectionTitle"
                            value={this.props.valueTitle}
                            className="form-control"
                            id="sectionTitlle"
                            maxLength="150"
                            placeholder="Введите название раздела"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sectionDesc">
                            <b>Описание:</b>
                        </label>
                        <textarea
                            onChange={this.props.handleInputChange}
                            name="sectionDesc"
                            value={this.props.valueDesc}
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
                        {this.props.formAction} раздел
                    </button>
                </form>                            
            </div>
        </div>
        )
    }
}

export default SectionFormEdit