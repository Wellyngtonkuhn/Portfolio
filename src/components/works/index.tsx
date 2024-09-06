import { Container } from "@/styles/ContainerStyles";
import { Cards, Content, WorkSection } from "./style";
import Title from "../Title";
import Image from "next/image";
import { Ecommerce, StudioOn, WaveOfGrace, ViajarEInvestir } from "@/assets";
import Link from "next/link";

export default function Works() {
	return (
		<WorkSection id="works">
			<Container>
				<Title title="Trabalhos" />
				<Content>
					<Cards className="reversed_row">
						<div>
							<Image
								src={ViajarEInvestir}
								alt="Viajar e Investir"
								loading="lazy"
							/>
						</div>

						<div>
							<h3>Blog - Viajar & Investir</h3>
							<p>
								O blog Viajar e Investir é seu guia completo para alcançar
								a{" "}
								<Link
									href="https://viajareinvestir.com/blog/guia-de-educacao-financeira"
									target="_blank"
									rel="dofollow"
								>
									liberdade financeira
								</Link>
								. Aqui, você encontra conteúdos sobre{" "}
								<Link
									href="https://viajareinvestir.com"
									target="_blank"
									rel="dofollow"
								>
									investimentos
								</Link>
								, estratégias para aumentar sua{" "}
								<Link
									href="https://viajareinvestir.com/blog/6-ideias-de-renda-online-em-2024"
									target="_blank"
									rel="dofollow"
								>
									renda extra
								</Link>
								, dicas de{" "}
								<Link
									href="https://viajareinvestir.com/blog/guia-de-educacao-financeira"
									target="_blank"
									rel="dofollow"
								>
									educação financeira
								</Link>
								, como usar seu{" "}
								<Link
									href="https://viajareinvestir.com/blog/genial-black-ou-inter-black-acessos-as-salas-vip"
									target="_blank"
									rel="dofollow"
								>
									cartão de crédito
								</Link>{" "}
								de forma inteligente, e aproveitar programas de
								fidelidade, pontos e milhas. Além disso, exploramos opções
								de investimento como a{" "}
								<Link
									href="https://viajareinvestir.com/blog/o-que-e-a-poupanca-e-quanto-rende-segredos-da-rentabilidade"
									target="_blank"
									rel="dofollow"
								>
									poupança
								</Link>
								,{" "}
								<Link
									href="https://viajareinvestir.com/blog/top-10-acoes-de-dividendos-na-bolsa-em-2024"
									target="_blank"
									rel="dofollow"
								>
									ações
								</Link>
								,{" "}
								<Link
									href="https://viajareinvestir.com/blog/fundos-imobiliarios-guia-completo-para-investir-com-seguranca"
									target="_blank"
									rel="dofollow"
								>
									fundos imobiliarios
								</Link>
								,{" "}
								<Link
									href="https://viajareinvestir.com/blog/seguranca-e-rentabilidade-da-renda-fixa"
									target="_blank"
									rel="dofollow"
								>
									renda fixa
								</Link>
								,{" "}
								<Link
									href="https://viajareinvestir.com/blog/como-investir-em-bitcoin-de-forma-estrategica-guia-completo"
									target="_blank"
									rel="dofollow"
								>
									criptomoeda
								</Link>{" "}
								e os benefícios de acesso a{" "}
								<Link
									href="https://viajareinvestir.com/blog/sala-vip-mastercard-guarulhos"
									target="_blank"
									rel="dofollow"
								>
									salas VIP
								</Link>{" "}
								para tornar suas{" "}
								<Link
									href="https://viajareinvestir.com/blog/stopover-gol"
									target="_blank"
									rel="dofollow"
								>
									viagens
								</Link>{" "}
								mais confortáveis e econômicas.
							</p>
							<Link
								href="https://viajareinvestir.com/"
								target="_blank"
								rel="dofollow"
							>
								Viajar & Investir
							</Link>
						</div>
					</Cards>

					<Cards>
						<div>
							<Image
								src={Ecommerce}
								alt="Eyeware Loja virtal"
								loading="lazy"
							/>
						</div>

						<div>
							<h3>Eyeware</h3>
							<p>
								A Eyeware é uma loja virtual, seu nicho é vender óculos
								refinados e de qualidade. Essa loja conta com um sistema
								que calcula a taxa de entrega, ela é integrada com meios
								de pagamentos e um dashboard para o cliente administrar
								suas compras, seus favoritos e dados pessoas.
							</p>
							<a
								href="https://e-commerce-seven-indol.vercel.app/"
								target="_blank"
							>
								Ver Site
							</a>
						</div>
					</Cards>

					<Cards className="reversed_row">
						<div>
							<Image
								src={StudioOn}
								alt="StudioOn site de eventos"
								loading="lazy"
							/>
						</div>

						<div>
							<h3>StudioOn</h3>
							<p>
								O StudioOn é um site de eventos, ele é responsável por
								mostrar os todos eventos de empresas parceiras.
							</p>
							<a
								href="https://wellyngtonkuhn.github.io/studion/"
								target="_blank"
							>
								Ver Site
							</a>
						</div>
					</Cards>
					<Cards>
						<div>
							<Image
								src={WaveOfGrace}
								alt="Loja virtal EyeWare"
								loading="lazy"
							/>
						</div>

						<div>
							<h3>Wave of Grace</h3>
							<p>
								A Wave Of Grace é uma loja virtual cuja visão é ser uma
								empresa que vai além da venda de produtos, investindo em
								pessoas que fazem o bem para um mundo melhor. Sua missão é
								gerar transformação e impacto ao redor do mundo, através
								da criação de produtos feitos à mão com um design
								exclusivo, inspirados pela criação e pelo criador.
							</p>
							<a href="https://www.waveofgrace.com.br/" target="_blank">
								Ver Site
							</a>
						</div>
					</Cards>
				</Content>
			</Container>
		</WorkSection>
	);
}
