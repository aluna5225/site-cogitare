
import empresa from '../img/empresa.png';

function Sobre() {
  return (
    <>
      <main>
        <div className="sobre-container">
            <img src={empresa} alt="Equipe Cogitare" />
            <div className="sobre-texto">
                <h1>Sobre a Empresa</h1>
                <p> A Inova Tecnologia possui a missão de desenvolver soluções digitais unindo, acessibilidade e qualidade. Nossa empresa acredita que a tecnologia deve promover avanços e transformar realidades, abrindo caminho para um futuro melhor.
                Com esse propósito, criamos o Cogitare, um aplicativo educacional que busca tornar o conhecimento acessível a todos. O Cogitare foi idealizado para atender estudantes, oferecendo recursos modernos que facilitam a aprendizagem. Mais do que um simples app, ele é um espaço onde a educação se conecta à tecnologia
                Nosso objetivo é democratizar o acesso ao conhecimento. Sabemos que muitos estudantes enfrentam dificuldades para alcançar seus sonhos por conta da falta de oportunidades e de ferramentas adequadas. Por isso, trabalhamos para oferecer uma solução que seja simples de usar, acessível a qualquer pessoa e eficiente no apoio ao aprendizado.</p>
            </div>
        </div>
      </main>

      <footer>
          &copy; 2025 Cogitare - Todos os direitos reservados para a empresa DigitalInovaTecnologia.
      </footer>    
    </>
  )
}

export default Sobre;