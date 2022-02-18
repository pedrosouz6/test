import { Section } from "./style";

export default function ConsumerRegister(){
    return (
        <Section>
            <div className="center">
                <div className="container">
                    <article>
                        <h1>Faça seu cadastro na plataforma Produtor</h1>
                    </article>
                    <form>
                        <div className="inputs">
                            <input type="text" placeholder="Primeiro nome" />
                            <input type="text" placeholder="Segundo nome" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Senha" />
                            <input type="text" placeholder="Estado" />
                            <input type="text" placeholder="Cidade" />
                            <input type="text" placeholder="Bairro" />
                            <input type="text" placeholder="Rua" />
                            <input type="number" placeholder="Número" />
                            <div className="input_op">
                                <input type="text" placeholder="Ponto de referência" />
                            </div>
                        </div>
                        <div className="send">
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    )
}