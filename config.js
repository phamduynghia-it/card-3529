window.__MOCK_DATA__ = {
    title: `gửi em`,

    // Dòng chữ hiển thị lúc đang tải trang (Loading)
    loadingText: `Món quà đang đến trong giây lát...`,

    // Nhạc nền (Tải lên file MP3 tùy chọn, hoặc fallback sang CDN)
    music: `./assets/user_music.mp3` || "https://pub-b20e97fa235346679eb882246abe5bed.r2.dev/musics/thangcuoipiano.mp3",

    // Các câu chúc chạy vòng tròn xung quanh trái tim 3D
    messages: ["Yêu em nhiều","Chúc em 20-10 vui vẻ"],

    // Ảnh người yêu / kỉ niệm hiển thị bên trong trái tim 3D
    images: (["./assets/user_images_0.jpg"] && ["./assets/user_images_0.jpg"].length > 0 && ["./assets/user_images_0.jpg"][0]) ? ["./assets/user_images_0.jpg"] : ["./images/mid_autumn_moon_center.png"],

    // Nội dung bức thư hiện ra khi chạm vào phong bì
    letter: {
        title: `Gửi Em`,
        body: `      Gửi công chúa híp của a ❤️❤️❤️ 
Chúc em ngày 20/10 vui vẻ, rạng rỡ và cảm ơn em đã mang đến những điều đặc biệt cho cuộc đời anh. Anh mong em có một ngày ngập tràn hoa, quà và những bất ngờ ngọt ngào nhất. Em là cả thế giới của anh và anh luôn yêu em thật nhiều. Cảm ơn em đã làm cho cuộc sống của anh trở nên tươi đẹp và tràn đầy ý nghĩa.
        Mylove  😘😘   Yêu em công chúa híp của anh`,
        sender: `Yêu em thật nhiều ♡`
    }
};
