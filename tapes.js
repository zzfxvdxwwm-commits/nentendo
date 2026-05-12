async function getProducts() {

    let response = await fetch('tapes.txt');

    let data = await response.json();

    let cards = "";

    for (let i = 0; i < data.length; i++) {

        cards += `

        <div class="col-md-6 col-sm-12 mb-5">

            <div class="tape-card"

            onclick="window.location.href='${data[i].link}'">

                <div class="tape-img-box">

                    <img src="${data[i].image}" class="tape-img">

                </div>

                <div class="tape-info">

                    <span class="tape-label">TAPE</span>

                    <h3>${data[i].name}</h3>

                </div>

                <div class="tape-icon">

                    <div class="reel"></div>

                    <div class="reel"></div>

                </div>

            </div>

        </div>

        `;
    }

    document.getElementById("catl").innerHTML = cards;
}

getProducts();