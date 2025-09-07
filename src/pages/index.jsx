import banner from '../img/banner.png'

function Home() {
  return (
    <>
      <main>
          <section className="banner">
            <img src={banner} height={500} alt="banner" />
          </section>

          <div className="container">
              <h1>O que é a Cogitare?</h1>
              <p>A <strong>Cogitare</strong> é um aplicativo gratuito que oferece conteúdos e materiais de estudo para quem está se preparando para o vestibular. 
              Com ele, você terá acesso a diversas matérias, simulados e dicas de estudo para aumentar suas chances de aprovação.</p>

              <h1>Vantagens:</h1>
              <ul>
                  <li>Acesso gratuito a todos os conteúdos</li>
                  <li>Materiais organizados por matéria</li>
                  <li>Simulados para testar seus conhecimentos</li>
                  <li>Dicas e estratégias para o vestibular</li>
              </ul>
              <h1>Porque existimos?</h1>
              <p>A <strong>Cogitare</strong> nasceu para auxiliar aos alunos sem condições financeiras para pagar um cursinho para o vestibular e precisam de 
              um meio de estudo voltado ao apredizado focado do aluno, auxiliando sua ascensão no mundo acadêmico</p>

              <h1>Quer baixar o nosso app?</h1>
              <p>Faça seu cadastro e baixa direto deste site!</p>
              
          </div>
      </main>
      <footer>
          &copy; 2025 Cogitare - Todos os direitos reservados para a empresa DigitalInovaTecnologia
      </footer>
    </>
  )
}

export default Home