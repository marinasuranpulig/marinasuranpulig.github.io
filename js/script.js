function onload() {
    add_swap_img_handlers();
}

function add_swap_img_handlers() {
    let imgs = document.getElementsByTagName("img");
    let swap_imgs = [];
    for (let i = 0; i < imgs.length; i++) {
        if(imgs[i].className === "swapable") {
            console.log("swapable images: ", imgs[i].src)
            imgs[i].addEventListener("mouseenter", image_focus_handler);
            imgs[i].addEventListener("mouseleave", image_focus_handler);
            imgs[i].addEventListener("touchstart", image_focus_handler);
            imgs[i].addEventListener("touchend", image_focus_handler);
            // preload the swap image
            swap_imgs.push(new Image);
            swap_imgs[i].src = swap_images(imgs[0].src);
        }
    }
}

function swap_images(src_path) {
    let src_path_spl = src_path.split(".");
    let src_extension = src_path_spl.pop();
    let src_base = src_path_spl.join("");

    let current_nr = src_base.charAt(src_base.length - 1);
    let next_nr = (Number(current_nr) % 2) + 1;

    return final = src_base.substring(0, src_base.length - 1) + next_nr + "." + src_extension;
}

function image_focus_handler(e) {
    e.srcElement.src = swap_images(e.srcElement.src);
}
