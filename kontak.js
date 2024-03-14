// Render Kontak
document.querySelector("#ulKontak").innerHTML = `<li class="list-group-item small py-0 text-muted"><i class="bi bi-geo-alt me-2"></i> ${dataAlamat}</li>
                    <li class="list-group-item small py-0 text-muted"><i class="bi bi-whatsapp me-2"></i> <a href="https://wa.me/${dataTelepon}" class="text-decoration-none text-muted" target="_blank">+${dataTelepon}</a></li>
                    <li class="list-group-item small py-0 text-muted"><i class="bi bi-envelope-at me-2"></i> ${dataEmail}</li>
                    <li class="list-group-item small py-0 text-muted"><i class="bi bi-browser-chrome me-2"></i> <a href="https://${dataWebsite}" class="text-decoration-none text-muted" target="_blank">${dataWebsite}</a></li>`;