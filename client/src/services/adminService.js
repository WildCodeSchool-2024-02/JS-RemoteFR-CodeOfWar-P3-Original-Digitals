import myAxios from "./myAxios";

export default async function adminUploadAction({ request }) {
  const formData = await request.formData();
  const movie = {
    title: formData.get("title"),
    duration: formData.get("duration"),
    synopsis: formData.get("synopsis"),
    date: formData.get("date"),
    classification: formData.get("classification"),
    picture: formData.get("picture"),
    URL: formData.get("movie"),
  };

  try {
    await myAxios.post("/api/movies/add", movie);
    return { success: true, message: "Le film a été ajouté avec succès." };
  } catch (error) {
    return {
      success: false,
      message: "Une erreur est survenue lors de l'ajout du film.",
    };
  }
}
