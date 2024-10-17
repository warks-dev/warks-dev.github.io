# Copyright WARKS.DEV Contributors.
# SPDX-License-Identifier: MIT

import os
from http.server import SimpleHTTPRequestHandler, HTTPServer

class CustomHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Check if the path ends with a slash (indicating a directory)
        if self.path.endswith('/'):
            # Append index.html if the path is a directory
            self.path += "index.html"
        
        # If no file extension, append .html to the URL
        elif not os.path.splitext(self.path)[1]:
            self.path += ".html"

        # Call the superclass to serve the file
        return super().do_GET()

# Define the server address and port
PORT = 8000
server_address = ("", PORT)

# Create and start the server
httpd = HTTPServer(server_address, CustomHandler)
print(f"Serving on http://localhost:{PORT}")
httpd.serve_forever()
