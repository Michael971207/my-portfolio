import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4 text-gray-700">
        Hi, I&apos;m Michael Moulay, an IT technician and student at Høgskolen i Molde, specializing in
        digitalization and IT systems. I have extensive experience in technical support, backend development,
        and project management. My goal is to combine technical expertise with innovative solutions to improve team performance.
      </p>
      <h2 className="text-2xl font-bold mt-6">Education</h2>
      <ul className="list-disc pl-6">
        <li>Bachelor in IT and Digitalization, Høgskolen i Molde (2023-2026)</li>
        <li>DAT105 - Artificial Intelligence, Universitetet i Stavanger (2024)</li>
        <li>Two years in Economics and Management, Høyskolen Kristiania (2020-2022)</li>
      </ul>
    </Layout>
  );
}
