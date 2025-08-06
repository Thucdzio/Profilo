# 🧑‍💻 Personal CV Website (Next.js 15)

This is a personal CV/portfolio website built with [Next.js 15](https://nextjs.org/), designed to showcase your skills, experience, projects, and contact information in a modern and responsive format.

> Built with: **Next.js**, **TypeScript**, **Tailwind CSS**, and **Docker**

---

## 🔧 Features

- 📄 Full resume/CV layout
- 🧠 Project and experience sections
- 📱 Responsive design
- 🌐 Optimized image loading from external sources (e.g. GitHub, user-images)
- ⚡️ Production-ready Dockerfile
- 🚀 Easily deployable to any container registry or cloud platform

---

## 📦 Getting Started (Development)

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🐳 Docker Support

This project includes a multi-stage Docker build.

### 🛠 Build the Docker image:

```bash
docker build -t cv-app:v1 .
```

### 🚀 Run the container:

```bash
docker run --name cv-app-v1 -dp 3000:3000 cv-app:v1
```

---

## 📤 Run with Docker Registry

```bash
# Pull the image
docker pull registry.ltthuc.id.vn/cv/myprofilo:v1  

# Run the image
docker run --name myprofile-v1 -dp 3000:3000 registry.ltthuc.id.vn/cv/myprofilo:v1
```


## 🙋‍♂️ Author

Created by **[Lê Tiến Thực]** – connect with me on  [GitHub](https://github.com/Thucdzio), or via [email](letienthuc2004@gmail.com).
