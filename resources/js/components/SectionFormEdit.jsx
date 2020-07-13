import React from "react"

const SectionFormEdit = (props) => (
    <div className="card">
        <div className="card-header">{props.formTitle} раздела</div>
        <div className="card-body">
            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="sectionTitlle">
                        <b> Название раздела: </b>
                    </label>
                    <input
                        onChange={props.handleInputChange}
                        name="sectionTitle"
                        value={props.valueTitle}
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
                        onChange={props.handleInputChange}
                        name="sectionDesc"
                        value={props.valueDesc}
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
                    {props.formAction} раздел
                    </button>
            </form>
        </div>
    </div>
)


export default SectionFormEdit