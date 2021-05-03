import './formContact.css';

const FormContact = () => {

    return(
        <>
            <form action="" className="fcontact-container">
                <div className="fc-dataContainer">
                    <div className="fc-data">
                        <div className="fc-name fc-common">
                            <label htmlFor="fc-name">Nombre <span>*</span></label>
                            <input id="fc-name" type="text" required/>
                        </div>
                        <div className="fc-email fc-common">
                            <label htmlFor="fc-email">Email <span>*</span></label>
                            <input id="fc-email" type="email" required/>
                        </div>
                        <div className="fc-subject fc-common">
                            <label htmlFor="fc-subject">Asunto</label>
                            <input id="fc-subject" type="text"/>
                        </div>
                    </div>

                    <div className="fc-message fc-common">
                        <label htmlFor="fc-message">Mensaje <span>*</span></label>
                        <textarea name="fc-message" id="" cols="30" rows="10" required ></textarea>
                    </div>
                </div>
                <button className="fc-btn">Enviar</button>
            </form>
        </>
    );

}

export default FormContact;