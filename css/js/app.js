// Karadeniz Rehber - Ana JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Kartlara yumuşak tıklama efekti
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("click", function () {
            card.style.transform = "scale(0.98)";

            setTimeout(function () {
                card.style.transform = "";
            }, 150);
        });

    });

    // Sayfa aşağı kaydırıldığında animasyon
    const features = document.querySelectorAll(".feature");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    features.forEach(function (feature) {

        feature.style.opacity = "0";
        feature.style.transform = "translateY(30px)";
        feature.style.transition = "all 0.6s ease";

        observer.observe(feature);

    });

});
