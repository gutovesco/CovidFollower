import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <div>
            <footer class="p-5 md-p-l5 bg-indigo-lightest-10">
                <div class="flex flex-wrap">
                    <div class="md-w-25pc mb-10">
                        <img src="assets/images/logo.png" class="w-l5" alt="" />
                        <div class="white opacity-70 fs-s2 mt-4 md-pr-10">
                            <p>Este projeto foi desenvolvido na disciplina de Programação Orientada a Objetos do curso de Análise e Desenvolvimento do Sistemas da FATEC Mogi Mirim. Criado por Augusto Vesco Raveli.</p>
                        </div>
                    </div>
                    <div class="w-100pc md-w-50pc">
                        <div class="flex justify-around">
                            <div class="w-33pc md-px-10 mb-10">
                                <h5 class="white">Índice</h5>
                                <ul class="list-none mt-5 fs-s2">
                                    <li class="my-3"><a href="#home" class="white opacity-70 no-underline hover-underline">Início</a></li>
                                    <li class="my-3"><a href="#features" class="white opacity-70 no-underline hover-underline">Casos</a>
                                    </li>
                                    <li class="my-3"><a href="#news"
                                        class="white opacity-70 no-underline hover-underline">Notícias</a></li>
                                    <li class="my-3"><a href="#blog" class="white opacity-70 no-underline hover-underline">Prevenção</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-33pc md-px-10 mb-10">
                                <h5 class="white">Contato</h5>
                                <ul class="list-none mt-5 fs-s2">
                                    <li class="my-3"><a href="/" class="white opacity-70 no-underline hover-underline">Email</a></li>
                                    <li class="my-3"><a href="/" class="white opacity-70 no-underline hover-underline">Telefone</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="w-100pc md-w-25pc">
                    <p href="/" class="white opacity-70 no-underline hover-underline mb-5">Tem alguma duvida? Informe seu email que entraremos em contato!</p>
                        <div class="flex w-75pc md-w-100pc mx-auto">
                            <input type="text"
                                class="input flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 br-r-0"
                                placeholder="E-mail" />
                            <button class="button bg-indigo indigo-lightest fw-300 fs-s3 br-l-0">Enviar</button>
                        </div>
                        <div class="flex justify-around my-8">
                            <a href="/" style={{height: 60, width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center'}} class="bg-indigo br-round white hover-scale-up-1 ease-400">
                                <FiTwitter/>
                            </a>
                            <a href="/" style={{height: 60, width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center'}} class="bg-indigo br-round white hover-scale-up-1 ease-400">
                                <FiInstagram/>
                            </a>
                            <a href="https://www.linkedin.com/in/augusto-raveli-a01254180/" style={{height: 60, width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center'}} class="bg-indigo br-round white hover-scale-up-1 ease-400">
                                <FiLinkedin/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;