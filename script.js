// ========================================
// KARADENİZ LEZZET HARİTASI
// Ana sayfa etkileşimleri
// ========================================


// "Yakınımdaki Mekanlar" butonu
const locationButtons = document.querySelectorAll(".hero-btn");

locationButtons.forEach(button => {

  button.addEventListener("click", () => {

    if (!navigator.geolocation) {
      alert("Tarayıcınız konum özelliğini desteklemiyor.");
      return;
    }

    button.textContent = "📍 Konum aranıyor...";

    navigator.geolocation.getCurrentPosition(

      position => {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Konum:", latitude, longitude);

        alert(
          "Konumunuz alındı! 📍\n\n" +
          "Bir sonraki aşamada size en yakın mekanları göstereceğiz."
        );

        button.textContent = "📍 Yakınımdaki Mekanlar";
      },

      error => {

        console.log(error);

        alert(
          "Konumunuza erişemedik.\n\n" +
          "Tarayıcıdan konum iznini açarak tekrar deneyebilirsiniz."
        );

        button.textContent = "📍 Yakınımdaki Mekanlar";
      }

    );

  });

});


// ========================================
// BUGÜN NE YAPALIM?
// ========================================

const discoverButton = document.querySelector(".discover-btn");

const recommendations = [

  "🌄 Elevit Yaylası'na git!",
  "🏔️ Pokut Yaylası'nı keşfet!",
  "🌲 Uzungöl'e doğru yola çık!",
  "⛰️ Sümela'yı keşfet!",
  "🫕 Güzel bir kuymak ye!",
  "🍳 Karadeniz kahvaltısı yap!",
  "📸 Manzaralı bir fotoğraf noktası bul!"

];

if (discoverButton) {

  discoverButton.addEventListener("click", () => {

    const randomIndex =
      Math.floor(Math.random() * recommendations.length);

    const recommendation =
      recommendations[randomIndex];

    alert(
      "Bugünkü önerimiz:\n\n" +
      recommendation
    );

  });

}


// ========================================
// ŞEHİR KARTLARI
// ========================================

const rizeCard = document.querySelector(".city-card.rize");
const trabzonCard = document.querySelector(".city-card.trabzon");

if (rizeCard) {

  rizeCard.addEventListener("click", () => {

    window.location.href = "rize.html";

  });

}


if (trabzonCard) {

  trabzonCard.addEventListener("click", () => {

    alert(
      "🏔️ TRABZON\n\n" +
      "Trabzon keşif sayfasını birazdan oluşturacağız."
    );

  });

}


// ========================================
// SERVICE WORKER
// ========================================

if ("serviceWorker" in navigator) {

  navigator.serviceWorker.register("sw.js")
    .then(() => {
      console.log("Service Worker aktif.");
    })
    .catch(error => {
      console.log("Service Worker hatası:", error);
    });

}
