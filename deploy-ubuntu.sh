#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/biju-portfolio"

npm install
npm run build

sudo mkdir -p "$APP_DIR"
sudo cp -r dist/* "$APP_DIR/"
sudo chown -R www-data:www-data "$APP_DIR"

echo "Deployed static files to $APP_DIR"
