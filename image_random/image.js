     images = [
    'mickey.jpg', 
    'minnie.jpg', 
    'red_chick.jpg', 
    'goofy.jpg', 
    'pluto.jpg', 
    'ludwig.jpg', 
    'Clarabelle.jpg', 
    'daisy.jpg', 
    'donald.jpg', 
    'pete.jpg',
    'toodles.jpg'];

function get_random_img()
    {
        random_index = Math.floor(Math.random() * images.length);

        selected_image = images[random_index]

        document.getElementById('img_disney').src = `./img/${selected_image}`
    }


function start()
    {
        interval = setInterval(get_random_img, 70);
    }
function stop()
    {
        clearInterval(interval);
    }
