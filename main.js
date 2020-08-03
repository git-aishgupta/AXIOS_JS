/*jshint esversion: 6 */

function getTodos() {
  axios
    .get("http://localhost:5000/getNodeData")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

function showOutput(res) {
  document.getElementById("output").innerHTML = `
      <div>
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    `;
}

document.getElementById("get").addEventListener("click", getTodos);
