function upload() {
  const file = document.getElementById('fileInput').files[0];
  const msg = document.getElementById('message');
  if (!file) {
    msg.textContent = 'Seleziona un file.';
    return;
  }
  const url = `https://toolsfriends.it001.s3.amazonaws.com/${encodeURIComponent(file.name)}`;
  fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': file.type },
    body: file
  }).then(res => {
    if (res.ok) {
      msg.textContent = 'Caricato con successo: ' + url;
    } else {
      msg.textContent = 'Errore nel caricamento';
    }
  }).catch(err => {
    msg.textContent = 'Errore: ' + err;
  });
}

document.getElementById('uploadBtn').addEventListener('click', upload);
