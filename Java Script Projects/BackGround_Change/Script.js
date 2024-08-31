const backgroundImages = document.querySelectorAll('.background-image');
        let currentIndex = 0;

        function changeBackground() {
            const backgroundContainer = document.getElementById('background-container');
            currentIndex = (currentIndex + 1) % backgroundImages.length;
            backgroundContainer.style.backgroundImage = `url(${backgroundImages[currentIndex].src})`;
        }

        setInterval(changeBackground, 3000);


        document.getElementById('background-container').style.backgroundImage = `url(${backgroundImages[0].src})`;
