import supabase from "../utils/supabase";
import { useNavigate } from "react-router";
import app from '/public/Bluetooth.apk';

function Aplicativo() {
    const navigate = useNavigate();

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        navigate("/login");
    }  

    return (
        <>
            <main className="container-app">
                
                <h1>Olá, seja bem vindo a COGITARE</h1>
                
                <h2>Agora você tem acesso à sua conta da cogitare, e pode baixar o aplicativo aqui mesmo, pelo nosso site!</h2>
              
                <h2>Basta você clicar no link abaixo, e você será redirecionado para o local de upload do app.</h2>
                <a href={app}>Click para fazer download do App </a>
                <br /><br />
                
                <h4>caso queira fazer o logout, é so clicar no botâo a baixo</h4>
                <button onClick={signOut}>LogOut</button>
            </main>
            
            <br /><br /><br /><br /><br />
            
            <footer>
                &copy; 2025 Cogitare - Todos os direitos reservados para a empresa DigitalInovaTecnologia.
            </footer>                
        </>
    )
}

export default Aplicativo