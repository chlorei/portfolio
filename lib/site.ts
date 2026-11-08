export const site = {
  url: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000",
  name: "Aleksandr Alekseev",
  email: "aaalekseevhi@gmail.com",
  github: "https://github.com/chlorei",
  linkedin: "https://www.linkedin.com/in/aleksandr-alekseev-715326346/",
  cv: "/CV.pdf",
  cvFileName: "Aleksandr_Alekseev_CV.pdf",
}
