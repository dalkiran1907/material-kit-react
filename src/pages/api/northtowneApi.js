export default async function getUsers(req, res) {
  const { dates } = req.body; // dates değerini alın
  const response = await fetch("http://141.98.112.211/northtownemitsubishi/getUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dates }), // dates değerini API'ye gönderin
  });
  const data = await response.json();

  res.status(200).json(data);
}
