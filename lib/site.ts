export const site = {
  url: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000",
  name: "Aleksandr Alekseev",
  description:
    "Computer Science student at TUHH and full-stack developer in Hamburg. Looking for a Werkstudent position. German C1, English C1.",
  email: "aaalekseevhi@gmail.com",
  github: "https://github.com/chlorei",
  linkedin: "https://www.linkedin.com/in/aleksandr-alekseev-715326346/",
  cv: "/CV.pdf",
  cvFileName: "Aleksandr_Alekseev_CV.pdf",
}
