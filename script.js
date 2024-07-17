document.addEventListener("DOMContentLoaded", (event) => {
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("modal");

  openModalBtn.addEventListener("click", () => {
    modal.classList.add("show");
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });

  // Soumission du formulaire
  const devisForm = document.getElementById("devisForm");
  devisForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const ville = document.getElementById("ville").value;
    const surface = document.getElementById("surface").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const commentaire = document.getElementById("commentaire").value;

    console.log("Formulaire soumis avec les données suivantes :");
    console.log("Ville : ", ville);
    console.log("Surface : ", surface);
    console.log("Téléphone : ", telephone);
    console.log("Email : ", email);
    console.log("Commentaire : ", commentaire);

    devisForm.reset();
    modal.classList.remove("show");
  });
});
