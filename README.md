# Biju Behera — AWS DevOps Portfolio

A responsive single-page portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Source-grounding notes

- Experience details are taken from the supplied resume.
- The requested latest entry **Infosys — Full Stack Developer — Feb 2025 - Present** is included exactly as requested.
- The supplied resume does not contain named project entries, so the Projects section intentionally uses **“Details available on request”** rather than inventing project names or project details.
- The Tech Stack uses the technologies listed in the supplied resume.
- WhatsApp uses the phone number from the supplied resume: `+91 7751009113`.
- The GitHub footer icon is a generic navigation placeholder because no GitHub URL is present in the supplied resume. Replace it if you have your GitHub profile URL.

## Assets

Put these two files in `public/`:

```text
public/
├── profile.jpg   # the uploaded profile photograph
└── resume.pdf    # supplied resume
```

The code already references `/profile.jpg` and `/resume.pdf`.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal, normally:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
```

The optimized static site is generated in `dist/`.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Vercel detects the Vite project automatically.
4. Build command:

```bash
npm run build
```

5. Output directory:

```text
dist
```

No server-side runtime is required.

## Deploy on Ubuntu with Nginx

Build the project:

```bash
npm install
npm run build
```

Copy `dist/` to your web root, for example:

```bash
sudo mkdir -p /var/www/biju-portfolio
sudo cp -r dist/* /var/www/biju-portfolio/
```

Example Nginx server block:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    root /var/www/biju-portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Then:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

For HTTPS, use Certbot/Let's Encrypt on the Ubuntu server.
