function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === "games") loadGames(); // dynamically load games when you open Games
}


async function loadGames() {
  const response = await fetch("https://api.github.com/repos/bubbls/ugss/contents/");
  const files = await response.json();
  const list = document.getElementById("gameList");
  list.innerHTML = "";
  files.forEach(file => {
    if (file.name.endsWith(".z64")) {
      const li = document.createElement("li");
      li.textContent = file.name;
      li.onclick = () => {
        document.getElementById("gameFrame").src =
          "emulator.html?game=" + encodeURIComponent(file.download_url);
      };
      list.appendChild(li);
    }
  });
}
