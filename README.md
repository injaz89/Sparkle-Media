# ✨ Sparkle Media Corporate Website

Welcome to the official repository for the **Sparkle Media** corporate website. Sparkle Media is a premier creative and digital agency specializing in branding, design, photography, video production, and digital marketing.

🌐 **Live Website:** [https://sparklemedia.lk](https://sparklemedia.lk)

---

## 🛠️ Tech Stack & Technologies Used

This project is built using modern web technologies to ensure speed, accessibility, security, and smooth user interactions:

*   **Framework:** [Next.js](https://nextjs.org/) (Version 16 - App Router) for optimized server rendering, routing, and fast load times.
*   **Library:** [React 19](https://react.dev/) for component-driven UI architecture.
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) for modern, utility-first responsive styling and typography.
*   **Animations:** [Framer Motion](https://www.framer.com/motion/) for fluid transitions and engaging micro-interactions.
*   **Icons:** [Lucide React](https://lucide.dev/) for crisp, SVG-based icons.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) for static type checking and code quality.
*   **Bundler:** [Webpack](https://webpack.js.org/) configured for building on virtual environment/cPanel servers.

---

## 🚀 Getting Started (Local Development)

To run the project on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (Node 20+ is recommended).

### Installation
1. Clone the repository or open the project folder:
   ```bash
   cd "D:\Websites\Sparkle Media\SM"
   ```
2. Install all development and production dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the local site.

---

## ☁️ Deployment Guide (cPanel Hosting - Register.lk)

This project is hosted on a high-performance **cPanel Node.js (Phusion Passenger)** environment at **register.lk**. 

Follow these steps to deploy updates to the live website:

### Step 1: Prepare the Deployment Package
On your local machine, compress the project files into a ZIP archive. 

> ⚠️ **IMPORTANT:** Do **not** include the `node_modules` or `.next` folders in the ZIP file. The server will generate these fresh.

**Files to include in the ZIP:**
*   📁 `src`
*   📁 `public`
*   📄 `package.json`
*   📄 `package-lock.json`
*   📄 `tsconfig.json`
*   📄 `next.config.ts`
*   📄 `server.js` (cPanel startup file)
*   📄 `postcss.config.mjs`
*   📄 `eslint.config.mjs`

### Step 2: Upload and Extract in cPanel
1. Log in to your register.lk cPanel.
2. Open **File Manager** and enter the **`sparkle-media`** directory (outside of `public_html`).
3. Upload your ZIP file and **Extract** it.

### Step 3: Install & Build via cPanel Terminal
Because this environment uses custom symlinks, we use Webpack rather than Turbopack to build the application.

1. Open **Setup Node.js App** in cPanel.
2. Copy the virtual environment command at the top of the page (starts with `source /home/...`).
3. Open **Terminal** in cPanel, paste the command, and press **Enter**.
4. Run the following commands to install dependencies (including build tools) and compile the project:
   ```bash
   # Install all packages including devDependencies
   npm install --include=dev
   
   # Build the optimized production bundle
   npm run build
   ```

### Step 4: Restart the Application
Once the build compiles successfully:
1. Go back to the **Setup Node.js App** page in cPanel.
2. Click the **Restart** button at the top to clear the cache and load the new version.

---

## 📂 Project Structure

```text
├── public/             # Static assets (images, icons, logos)
├── src/
│   ├── app/            # Next.js App Router Pages (about, contact, services, etc.)
│   └── components/     # Reusable UI components (Navbar, Footer, Hero, etc.)
├── package.json        # Project metadata and script commands
├── server.js           # Custom Node.js server entrypoint for cPanel
├── tsconfig.json       # TypeScript configuration settings
└── next.config.ts      # Next.js framework configuration rules
```

---

*Developed by Sparkle Media. All rights reserved.*
