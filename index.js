const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/profile") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is the profile page!");
  } else if (parsedUrl.pathname === "/products") {
    const searchQuery = parsedUrl.query.search || "";

    if (productList.includes(searchQuery.toLowerCase())) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`Product "${searchQuery}" found.`);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`Product "${searchQuery}" not found.`);
    }
  } else if (parsedUrl.pathname === "/cart") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is the cart page!");
  } else if (parsedUrl.pathname === "/register") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is the register page!");
  } else if (parsedUrl.pathname === "/login") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is the login page!");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Page not found");
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
