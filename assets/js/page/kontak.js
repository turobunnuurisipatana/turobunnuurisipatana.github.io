// Render Kontak
document.querySelector("#divKontak").innerHTML = `<span class="d-block py-1 text-muted"><i class="text-success bi bi-geo-alt mr-1"></i> ${dataAlamat}</span>
                    <span class="d-block py-1 text-muted"><i class="text-success bi bi-whatsapp mr-1"></i> <a href="https://wa.me/${dataTelepon}" class="text-decoration-none text-muted" target="_blank">+${dataTelepon}</a></span>
                    <span class="d-block py-1 text-muted"><i class="text-success bi bi-envelope-at mr-1"></i> ${dataEmail}</span>
                    <span class="d-block py-1 text-muted"><i class="text-success bi bi-browser-chrome mr-1"></i> <a href="https://${dataWebsite}" class="text-decoration-none text-muted" target="_blank">${dataWebsite}</a></span>
                    <span class="d-block py-1 text-muted"><i class="text-success bi bi-github mr-1"></i> <a href="https://github.com/${dataGithub}" class="text-decoration-none text-muted" target="_blank">@${dataGithub}</a></span>`;