[Tiếng Việt](./README.vi.md)
---
# C2C-terminal

C2C-terminal is a project that connects two Pterodactyl terminals together, enabling the execution of commands that the default console or eggs do not support (except eggs with custom startup). The goal of this project is to break the default limitations, allowing you to run system commands such as `bash`, `chmod`, and manage files and permissions that normal eggs do not allow.

## Main Features

- **Connect two Pterodactyl terminals**: Direct interaction between terminals.
- **Execute advanced system commands**: Supports commands like bash, chmod, and other management commands which are normally blocked by default eggs.
- **No egg configuration changes required**: No need for custom startup, no egg modifications, works independently.
- **Multi-platform client**: Client files support Node.js, Python, TypeScript, Bun.
- **Main file uses Bun only**: The main file of the project runs on Bun, handling connection and command processing between terminals.

## Special: No external libraries required

- **All files in this project do not depend on any external libraries.**
- You only need Bun (or Node.js/Python/TS environment for the client) and use built-in APIs.
- No need to run `bun install`, `npm install`, or `pip install`.

## How It Works

- **Main file (`main`)**: Runs with Bun, manages terminal connections and command transmission, without any external libraries.
- **Client files**: Support multiple languages (Node.js, Python, TypeScript, Bun), no external packages, allowing integration or use in various environments to send commands and receive data from the Bun server.
- Secure transmission of commands, output, and data between servers.

## Command Limitations

- Since Pterodactyl runs in a sandbox environment, **certain system commands like `apt` and `sudo` will not work**.
- Environment-changing commands like `cd` will also not have any effect, as the console is restricted in folder access and does not maintain session state.
- This project focuses on supporting file execution, permission management, and actions allowed by the original console.

## Installation & Usage Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/hoangiabaol/C2C-terminal.git
   ```
2. Make sure you have Bun installed (or Node.js/Python/TS if using a client).
3. Run the main file:
   ```bash
   bun main.ts
   ```
4. Use the client files:
   - Choose the appropriate environment (Node.js/Python/TS/Bun) and run the corresponding client to connect to the Bun server.

## Supported Command Examples

- Run bash directly:
  ```bash
  bash
  ```
- Change file permissions:
  ```bash
  chmod +x file.sh
  ```
- Other system management commands...

## Notes

- Ensure you have proper access rights to the Pterodactyl terminals.
- Always check and protect your data when executing potentially dangerous commands.

## Author & Intended Use

- **Author:** hoangiabaol
- **Purpose:** This project is for learning, research, and expanding knowledge about terminals, Pterodactyl, and Bun.
- **Disclaimer:** The author is not responsible for any damage caused by using this project for malicious purposes such as botnets, DDoS, or illegal activities. Users are fully responsible for their own actions.

## Contribution & License

- Feel free to contribute ideas or code by creating a PR or new issue.
- Open-source project under the MIT license.

---

**C2C-terminal** helps you unlock the full power and flexibility of Pterodactyl, overcoming the default limitations of egg consoles!