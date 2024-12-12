import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <form className="mt-4">
        <label className="block">
          Name:
          <input type="text" className="border p-2 w-full mt-2" />
        </label>
        <label className="block mt-4">
          Email:
          <input type="email" className="border p-2 w-full mt-2" />
        </label>
        <label className="block mt-4">
          Message:
          <textarea className="border p-2 w-full mt-2"></textarea>
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </Layout>
  );
}
