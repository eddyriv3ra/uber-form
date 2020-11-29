import { createServer, Response } from "miragejs";

const validDomains = ["outlook.com", "gmail.com", "hotmail.com"];

const getDomainFromEmail = (email) => {
  let emailDomain = null;
  const pos = email.search("@");
  if (pos > 0) {
    emailDomain = email.slice(pos + 1);
  }
  return emailDomain;
};

const server = () => {
  return createServer({
    routes() {
      this.post("/api/driver", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const domain = getDomainFromEmail(attrs.email.value);
        const isValidDomain = validDomains.includes(domain);
        if (isValidDomain) {
          return new Response(
            200,
            {},
            { data: "Account created successfully" },
          );
        }
        return new Response(400, {}, { data: "Mail is not valid" });
      });
    },
  });
};

export default server;
