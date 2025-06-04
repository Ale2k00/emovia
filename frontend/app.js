function App() {
  const [file, setFile] = React.useState(null);
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/upload", { method: "POST", body: formData });
      const text = await res.text();
      setMessage(text);
    } catch (err) {
      setMessage("Upload failed");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Emovia File Upload Demo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="border" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Upload</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

