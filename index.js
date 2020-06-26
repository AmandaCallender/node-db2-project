const server = require("./api/server.js");

const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`API RUNNING ON ${port}`)); 