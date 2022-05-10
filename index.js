const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write(
      `
            <html>
                <head>
                    <title>Node page</title>
                </head>
                <body>
                   <h1>Hello Node!</h1>
                   <a href="/read-message">Link to read message</a>
                   <a href="/write-message">Link to write message</a>
                </body>
            </html>
        `
    );
    res.end();
  }
  if (url === "/read-message") {
    fs.readFile("message.txt", "utf8", (err, data) => {
      console.log(data);
      return res.end();
    });
    res.write(
      `
          <html>
              <head>
                  <title>Node read message page</title>
              </head>
              <body>
                  <h1>This is read message page</h1>
                  <a href="/">Back to top</a>
              </body>
          </html>
    `
    );
    res.end();
  }
  if (url === "/write-message") {
    res.write(
      `
      <html>
          <head>
              <title>Node write message page</title>
          </head>
          <body>
              <h1>This is write message page</h1>
              <form action="/write-message" method="POST">
                  <input type="text" name="message" />
                  <button type="submit">Submit</button>
              </form>
              <a href="/">Back to top</a>
          </body>
      </html>
`
    );
    res.end();
  }

  if (url === "/write-message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const removeMessage = parsedBody.split("=")[1];
      const message = removeMessage.replaceAll("+", " ");

      fs.writeFile("message.txt", message, (err) => {
        if (err) throw err;
        res.statusCode = 302;
        // res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));
