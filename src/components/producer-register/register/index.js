import { Section } from "./style";
import { useState } from "react";
import Axios from "axios";

export default function ConsumerRegister(){
    //Inputs
    const [ firstName, setFirstName ]    = useState('');
    const [ secondName, setSecondName ]  = useState('');
    const [ email, setEmail ]            = useState('');
    const [ password , setPassword ]     = useState('');
    const [ state, setState ]            = useState('');
    const [ city, setCity ]              = useState('');
    const [ district, setDistrict ]      = useState('');
    const [ street, setStreet ]          = useState('');
    const [ number, setNumber ]          = useState('');
    
    //Messages
    const [ messageValidate, setMessageValidate ] = useState(false);
    const [ messageAPI, setMessageAPI ] = useState('');
    
    const sendForm = (e) => {
        e.preventDefault();

        //Check the inputs
        const validate = 
        firstName == ""  || 
        secondName == "" || 
        email  == ""     || 
        password  == ""  || 
        state  == ""     || 
        city  == ""      || 
        district  == ""  || 
        street  == ""    || 
        number  == "";

        if(!validate) {
            addProducer();
            setMessageValidate(false);
        } else {
            setMessageValidate(true);
        }  
    }

    const addProducer = () => {
        Axios.post("http://localhost:3333/add/user/producer", {
        firstName: firstName,
        secondName: secondName,
        email: email,
        password: password,
        state: state,
        city: city,
        district: district,
        street: street,
        number: number,
        })
        .then(response => response.data)
        .then(respost => setMessageAPI(respost.message));
    }

    return (
        <Section>
            <div className="center">
                <div className="container">
                    <article>
                        <h1>Faça seu cadastro na plataforma Produtor</h1>
                        {messageAPI}
                    </article>
                    <form onSubmit={sendForm}>
                        <div className="inputs">

                            <input type="text" 
                            placeholder="Primeiro nome" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            />

                            <input type="text" 
                            placeholder="Segundo nome" 
                            value={secondName}
                            onChange={(e) => setSecondName(e.target.value)}
                            />

                            <input type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            
                            <input type="text" 
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            />

                            <input type="text" 
                            placeholder="Estado" 
                            value={state}
                            onChange={(e) => setState(e.target.value)} 
                            />

                            <input type="text" 
                            placeholder="Cidade" 
                            value={city}
                            onChange={(e) => setCity(e.target.value)} 
                            />

                            <input type="text" 
                            placeholder="Bairro" 
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)} 
                            />

                            <input type="text" 
                            placeholder="Rua" 
                            value={street}
                            onChange={(e) => setStreet(e.target.value)} 
                            />

                            <input type="number" 
                            placeholder="Número" 
                            value={number}
                            onChange={(e) => setNumber(e.target.value)} 
                            />
                        </div>

                        {
                            messageValidate && (
                            <div className="message_erro">
                                <p>Favor preencher o(s) campo(s) acima</p>
                            </div>
                            ) 
                        }

                        <div className="send">
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    )
}