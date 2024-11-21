export default function saveData(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  };

}