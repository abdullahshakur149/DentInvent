#!/bin/bash
echo "Installing npm dependencies for client and server..."
npm install # Install global dependencies (if any)
npm run installer
echo "All npm installations completed."
