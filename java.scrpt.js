function goToPage(page) {

    const app = document.getElementById("app");


    // =========================
    // HALAMAN 2
    // =========================

    if (page === 2) {

        app.innerHTML = `

        <section class="page">

            <div class="eyebrow">
                LEVEL 01
            </div>

            <div class="icon">
                👀👀
            </div>

            <h2>
                Udah siap belum?
            </h2>

            <p>
                Kalau udah siap,
                klik tombol di bawah ini.
                <br>
                Siap-siap yaaa wkwkwkwk
            </p>

            <button onclick="goToPage(3)">
                siap lah 😭
            </button>

            <br><br>

            <button
                onclick="alert('nggak bisa kabur 😌')"
                style="background:#fff;color:#493733;border:1px solid #f0d5c8;"
            >
                kabur
            </button>

        </section>

        `;

    }


    // =========================
    // HALAMAN 3
    // =========================

    if (page === 3) {

        app.innerHTML = `

        <section class="page">

            <div class="eyebrow">
                LEVEL 02
            </div>

            <div class="icon">
                💗
            </div>

            <h2>
                coba klik klik apa aja di bawah ini.
            </h2>

            <p>
                Ada 5 memory yang harus kamu buka.
            </p>

            <div class="memory-container">

                <button onclick="memory(1)">
                    📸 Memory 01
                </button>

                <button onclick="memory(2)">
                    🫶🏻 Memory 02
                </button>

                <button onclick="memory(3)">
                    😂 Memory 03
                </button>

                <button onclick="memory(4)">
                    🌷 Memory 04
                </button>

                <button onclick="memory(5)">
                    💌 Memory 05
                </button>

            </div>

            <br>

            <button onclick="goToPage(4)">
                lanjut →
            </button>

        </section>

        `;

    }


    // =========================
    // HALAMAN 4
    // =========================

    if (page === 4) {

        app.innerHTML = `

        <section class="page">

            <div class="eyebrow">
                LEVEL 03
            </div>

            <div class="icon">
                🔐
            </div>

            <h2>
                passwordnyaaaa....
            </h2>

            <p>
                Clue:
                nama yang selalu Ayiii panggil ke dd.
            </p>

            <input
                id="password"
                placeholder="type it here..."
            >

            <br><br>

            <button onclick="checkPassword()">
                unlock
            </button>

        </section>

        `;

    }


    // =========================
    // HALAMAN 5
    // =========================

    if (page === 5) {

        app.innerHTML = `

        <section class="page">

            <div class="eyebrow">
                FINAL LEVEL
            </div>

            <div class="icon">
                💗
            </div>

            <h2>
                dikit lagi sabar ya.
            </h2>

            <p>
                Tinggal satu lagi.
                <br>
                Seriuss!!!.
            </p>

            <button onclick="finalPage()">
                open it ♡
            </button>

        </section>

        `;

    }

}

function memory(number) {

    const memories = {

        1: {
            photo: "images/acen1.jpeg",
            title: "Memory #01",
            text: "Salah satu momen besar kita dan kamu cantik bgt di sini. Inget banget dan akan selalu aku kenang bahwa ini salah satu momen ultah terbaik aku, semua bisa tercapai karena acen yang effortful banget buat wujudkan ini semua. happy birthday my dear acen ♡"
        },

        2: {
            photo: "images/acen2.jpeg",
            title: "Memory #02",
            text: "Trip pertama kita ke Jogjaaa! Kita punya banyak banget momen seru di sini dan yaaa SO HAPPY TO BE WITH YOU HUAAAA 😭😭. MAU MENGULANGINYA LAGI!!! yujkkk??"
        },

        3: {
            photo: "images/acen3.jpeg",
            title: "Memory #03",
            text: "you look so happyyyyyyyy in this photo. fine dining fine diningan kita pertama kali wkwkwk, aku lagi awal-awal kecintaan sama dd dan sampe sekarangpun masi kecintaan wgwggw loveyouuu!!!."
        },

        4: {
            photo: "images/acen4.jpeg",
            title: "Memory #04",
            text: "photobox is one of our favorite thing to do. suka sekali foto di kotak alias potobok sama kamoooooo ❤️"
        },

        5: {
            photo: "images/acen5.jpeg",
            title: "Memory #05",
            text: "Aku tutup dengan kecantikan dan keanggunan kamu, youre just simply gorgeus and stunning ❤️."
        }

    };


    const memory = memories[number];


    document.getElementById("app").innerHTML = `

        <section class="page">

            <div class="eyebrow">
                ${memory.title}
            </div>

            <img
                src="${memory.photo}"
                style="
                    width:100%;
                    max-height:350px;
                    object-fit:cover;
                    border-radius:20px;
                    margin:20px 0;
                "
            >

            <h2>
                ${memory.title}
            </h2>

            <p>
                ${memory.text}
            </p>

            <button onclick="goToPage(3)">
                ← back to memories
            </button>

        </section>

    `;

}

function checkPassword() {

    const password =
        document.getElementById("password")
        .value
        .toLowerCase()
        .trim();


    if (
        password === "acennn" ||
        password === "acen"
    ) {

        goToPage(5);

    } else {

        alert(
            "hmm... bukan itu 😭 coba lagi."
        );

    }

}

function finalPage() {

    document.getElementById("app").innerHTML = `

        <section class="page">

            <div class="icon">
                🎂
            </div>

            <div class="eyebrow">
                SELESAIIIII!!!
            </div>

            <h1>
                Happy Birthday,
                <br>
                my dear     Acennn ♡
            </h1>


            <div
                style="
                    text-align:left;
                    background:#fff;
                    padding:25px;
                    border-radius:20px;
                    line-height:1.8;
                "
            >

                <p>
                    halo Acennnn,
                </p>


                <p>
                    Selamat ulang tahun sayangkuuuu. 🤍
                </p>


                <p>
                    Ayiii cuma mau bilang:
                    ayi seneng banget kenal sama dd,
                    dan semoga di umur baru ini,
                    dd terus dikelilingi hal-hal baik,
                    orang-orang yang sayang sama dd,
                    dan bisa cepet kaya biar bisa 
                    menggendong2 terus keluarga hihi
                    JANGAN MARAH MULU YA AMPUNNN.
                </p>


                <p>
                    Trims banyak banyak sudah bertahan 
                    dan berjuang di hidup ini yaa.
                    Terus menjadi baik ya sayang,
                    Ayi sayang banget sama Acennn!!!.
                </p>


                <p>
                    Semoga tahun ini menjadi
                    tahun yang paling baikkkkk di hidup kamu.
                </p>


                <p>
                    and last but not least...
                </p>


                <p>
                    <strong>
                        Ayiii mau tetap ada
                        di setiap momen dd. 🫶🏻
                    </strong>
                </p>


                <p>
                    Happy birthday,
                    my favorite person.
                </p>


                <p
                    style="
                        text-align:right;
                        font-family:serif;
                        font-size:22px;
                    "
                >
                    love,
                    <br>
                    Ayiii ♡
                </p>

            </div>


            <br>


            <button onclick="confetti()">
                one more thing ✨
            </button>

        </section>

    `;

}

function confetti() {

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const colors = ["#f7b59d", "#f28f8f", "#ffd166", "#7bdff2", "#b8e986"];
    const pieces = [];
    const pieceCount = 140;

    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    function resizeCanvas() {
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * pixelRatio;
        canvas.height = window.innerHeight * pixelRatio;
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }

    for (let index = 0; index < pieceCount; index += 1) {
        pieces.push({
            x: Math.random() * window.innerWidth,
            y: -20 - Math.random() * window.innerHeight * 0.4,
            width: 6 + Math.random() * 7,
            height: 8 + Math.random() * 8,
            color: colors[index % colors.length],
            speed: 2 + Math.random() * 3,
            drift: (Math.random() - 0.5) * 2,
            rotation: Math.random() * Math.PI,
            rotationSpeed: (Math.random() - 0.5) * 0.2
        });
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function animate() {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        pieces.forEach((piece) => {
            piece.y += piece.speed;
            piece.x += piece.drift;
            piece.rotation += piece.rotationSpeed;

            context.save();
            context.translate(piece.x, piece.y);
            context.rotate(piece.rotation);
            context.fillStyle = piece.color;
            context.fillRect(-piece.width / 2, -piece.height / 2, piece.width, piece.height);
            context.restore();
        });

        if (pieces.some((piece) => piece.y < window.innerHeight + 30)) {
            window.requestAnimationFrame(animate);
        } else {
            window.removeEventListener("resize", resizeCanvas);
            canvas.remove();
        }
    }

    animate();

}