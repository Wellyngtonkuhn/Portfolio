import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "@/styles/ContainerStyles";
import { ContactSection, Content } from "./style";
import Title from "../Title";

const formShema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("insira um email válido")
    .required("Campo obrigatório"),
  subject: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  message: yup.string().required("Campo obrigatório"),
});

enum SubjectEum {
  offerToFrontEnd = "Offer_To_FrontEnd_Job_Position",
  landingPage = "LandingPage",
  siteInstitucional = "Site_Institucional",
  lojaVirtual = "Loja_Virtual",
  blog = "Blog",
  sistemas = "Sistemas (Saas)",
  other = "other",
}

type FormInput = yup.InferType<typeof formShema>;

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(formShema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const templateParams = {
      from_name: data?.name,
      email: data?.email,
      subject: data?.subject,
      phone: data?.phone,
      message: data?.message,
    };

    setIsLoading(true);
    emailjs
      .send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        templateParams,
        PUBLIC_KEY as string
      )
      .then((result) => {
        if (result.text === "OK") {
          alert("Mensagem enviada");
        }
      })
      .catch(() => alert("Mensagem não enviada, tente mais tarde"))
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Content>
          <Title title="Contato" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Nome
              <input type="text" {...register("name")} />
              <p>{errors.name?.message}</p>
            </label>
            <label>
              Email
              <input type="text" {...register("email")} />
              <p>{errors.email?.message}</p>
            </label>
            <label>
              Celular
              <input type="text" {...register("phone")} />
              <p>{errors.phone?.message}</p>
            </label>
            <label>
              Assunto
              <select {...register("subject")}>
                <option value={SubjectEum.offerToFrontEnd}>
                  Oferta para Frontend Developer
                </option>
                <option value={SubjectEum.landingPage}>LandingPage</option>
                <option value={SubjectEum.siteInstitucional}>
                  Site Institucional
                </option>
                <option value={SubjectEum.lojaVirtual}>Loja Virtual</option>
                <option value={SubjectEum.blog}>Blog</option>
                <option value={SubjectEum.sistemas}>Sistemas "Saas"</option>
                <option value="other">Outros</option>
              </select>
              <p>{errors.subject?.message}</p>
            </label>

            <label>
              Mensagem
              <textarea {...register("message")} />
              <p>{errors.message?.message}</p>
            </label>
            <button type="submit">
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </Content>
      </Container>
    </ContactSection>
  );
}
