import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";
import React from "react";
import { useRouter } from "next/router";

function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.primary[200]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

/* function HomePage() {
    return (
    <div>
        <GlobalStyle />
        <Titulo tag="h1">Bem Vindos de Volta!</Titulo>
        <h2>Discord - Alura Matrix</h2>

        <style jsx>{`
      h1 {
        color: red;
      }
    `}</style>
    </div>
    )
  }
  
  export default HomePage */

export default function PaginaInicial() {
  /* const username = "airtondiniz"; */
  const [username, setUsername] = React.useState("");
  const roteamento = useRouter();
  const [image, setImage] = React.useState(
    `https://github.com/${username}.png`
  );

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          /* backgroundColor: appConfig.theme.colors.primary[500], */
          backgroundImage: "url(https://www.mnrubber.com/wp-content/uploads/2020/11/network-3357642_1280.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          /* backgroundBlendMode: 'multiply', */ height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(27 102 121 / 70%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
            opacity: "0.9",
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (event) {
              event.preventDefault();
              roteamento.push("/chat");
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Bem Vindo de volta!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            {/* <input 
              type="text"
              value={username}
              onChange={function (event) {
                const valor = event.target.value;
                setUsername(valor);
              }}
              /> */}

            <TextField
              placeholder="Usuário do GitHub"
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[400],
                  mainColorHighlight: appConfig.theme.colors.primary[200],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
              value={username}
              onChange={function handler(event) {
                const valor = event.target.value;

                setUsername(valor);
                if (valor.length >= 3) {
                  setImage(`https://github.com/${valor}.png`);
                } else {
                  setImage(
                    `https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg`
                  );
                }
              }}
            />

            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals[999],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[600],
                mainColorStrong: appConfig.theme.colors.primary[400],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`${image}`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
