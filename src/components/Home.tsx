import manicure from "../../public/IMG_5616 2.svg"
import './Home.scss'


export function Home() {
  return (
    <div className="container-home">
      <div className="fumaça1"></div>
      <div className="fumaça2"></div>
      <div className="fumaça3"></div>
      <div className="container-info">
        <div className="info">
          <h1>
            MANICURE EXPERT no ONLINE
          </h1>
          <p>
            Aprenda o Método definitivo que vai transformar a sua entrega em resultado 
            de excelência e assim fidelize clientes, 
            fature mais e se torne uma profissional reconhecida.
          </p>
          <p>
            Agora o curso presencial que já transformou a vida de mais de 800 
            profissionais pelo Brasil, no online.
          </p>
        </div>
        <div className="button-whatsApp">
          <button>
              Entre no grupo exclusivo!
          </button>
        </div>
      </div>
        <img src={manicure}/>
    </div>
  )
}
