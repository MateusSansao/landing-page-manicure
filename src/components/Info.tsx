import money from "../../public/Design sem nome (1) 1.svg"
import augema from "../../public/Design sem nome (4) (1) 1.svg"
import loading from "../../public/Captura de Tela 2025-03-07 às 10.41.01 1.svg"
import trofeu from "../../public/Design sem nome (5) (1) 1.svg"
import "./Info.scss"

export function Path() {

    const linkInfo = () => {
        window.open("https://chat.whatsapp.com/BPTY09YTeMHJnBScBw2o3q", "_blank");
      };

  return (
    <div className="container-path">
        <div className="title">
            <h1>O <span>"caminho para se tornar uma manicure expert"</span> é para que você que...</h1>
        </div>  
        <div className="container-list">
            <div className="list">
                <div className="list-info1">
                    <img src={money}/>
                    <p>
                        Quer elevar seu nível de entrega e cobrar mais pelo seus serviços.
                    </p>
                </div>
                <div className="list-info2">
                    <img src={augema}/>
                    <p>
                        Está presa em técnicas básicas e se sente insegura na hora de entregar um trabalho perfeito.
                    </p>
                </div>
            </div>
            <div className="list">
                <div className="list-info3">
                    <img src={loading}/>
                    <p>
                        Sente que não fidelize clientes porque não tem durabilidade na sua entrega.
                    </p>
                </div>
                <div className="list-info4">
                    <img src={trofeu}/>
                    <p>
                        Sonha em se tornar referência na área das unhas.
                    </p>
                </div>

            </div>
        </div>
        <div className="container-button">
            <div className="button-info">
                <button onClick={linkInfo}>
                    Entar no grupo vip!
                </button>
            </div>
        </div>
    </div>
  )
}
