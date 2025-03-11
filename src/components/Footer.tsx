import ManicureFooter from "../../public/manicureFooter.webp"
import "./Footer.scss"

export function Footer() {
  return (
    <div className="container-footer">
        <div className="footer-info">
            <h1>
                MARCELLA VIEIRA
            </h1>
            <p>
                Marcella Vieira é especialista em unhas naturais e criadora do Método Marcella Vieira, uma metodologia exclusiva que ensina manicuras a alcançarem um acabamento impecável, fidelizarem clientes e se destacarem no mercado da beleza. Com mais de 12 anos de experiência na área da beleza e 6 anos com Nail Designer, Marcella já domino toda as técnicas disponíveis no mercado, mas escolheu se especializar em unhas naturais, trabalhando exclusivamente com elas há mais de 3 anos.<br/> 
                E também atua a mais de 3 anos na área do ensino, ajudando outras profissionais a crescerem e conquistarem o reconhecimento que merecem.<br/> 
                Seu método já transformou a vida de mais de 800 profissionais pelo Brasil, ensinando técncias avançadas, estratégias para valorização profissional e um passo a passo completo para quem quer evoluir na profissão e conquistar clientes fieis... 
            </p>
        </div>
        <img src={ManicureFooter}/>
    </div>
  )
}
