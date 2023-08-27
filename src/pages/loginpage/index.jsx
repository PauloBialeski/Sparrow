export default function LoginPage () {
    return (
        <main>
            <section id="login">
            <div id="imagem"></div>
               <div id="form">
                   <form  method="post" autocomplete="off">
                        <div className="campo">
                            <label for="usuario">Usuário:</label> <br/>
                            <input type="text" name="usuario" id="usuario" placeholder="Insira o usuário..." minlength="5" maxlength="15" required></input>
                        </div>
                        <div className="campo">
                            <label for="senha">Senha:</label> <br/>
                            <input type="password" name="senha" id="senha" placeholder="Insira a senha..." minlength="5" maxlength="20" required></input>
                        </div>
                        <input type="submit" value="Login" onclick="logar(); return false"></input>
                    </form>
               </div>
            </section>
        </main>
    );
}