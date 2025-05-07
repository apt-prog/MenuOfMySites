const MainArray = [
  {
    name: "Fenil's Portfolio",
    linkedin: "#",
    github: "#",
    live: "#",
  },
  {
    name: "Fenil's Portfolio",
    linkedin: "#",
    github: "#",
    live: "#",
  },
];

const RenderItems = () => {
  const container = document.querySelector(".CardsSpaces");
  container.innerHTML = MainArray.map((item, index) => {
    return `
        <tr class="Card">
          <td>${index + 1}</td>
          <td>${item.name}</td>
          <td>
            <a href="${
              item.linkedin
            }" target="#"><i class="bi bi-linkedin"></i></a>
            <a href="${item.github}" target="#"><i class="bi bi-github"></i></a>
          </td>
          <td><a href="${item.live}" target="#">Live</a></td>
        </tr>
      `;
  }).join("");
};

RenderItems();
