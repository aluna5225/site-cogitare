import { useState } from "react";
import supabase from "../utils/supabase";
import { Link } from "react-router";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
      event.preventDefault();
      setMessage("");

      const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
      })

      if(error) {
        setMessage(error.message);
        return;
      }

      if(data) {
        setMessage("Usuário cadastrado!");
      }
      setEmail("");
      setPassword("");
 };


  return (
    <>
      <main>
        <div className="form-container">
          <h1>Cadastro</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label>E-mail</label>
            <input
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              type="email" 
              id="email" 
              name="email" 
              required 
            />

            <label>Senha</label>
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              type="password" 
              id="senha" 
              name="senha" 
              required 
            />

            <button type="submit">Cadastrar</button>
          </form>
          <p>
            Já tem uma conta? <Link to="/login">Faça login aqui</Link>
          </p>
          {message && <span>{message}</span>}          
        </div>        
      </main>
      <footer>
          &copy; 2025 Cogitare - Todos os direitos reservados para a empresa DigitalInovaTecnologia.
      </footer>
    </>
  )
}

export default Cadastro;