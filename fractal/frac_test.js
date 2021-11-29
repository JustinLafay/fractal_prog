const c = document.querySelector("#c")
const ctx = c.getContext("2d")

//Zone de dessin
const x1 = -2.1
const x2 = 0.6
const y1 = -1.2
const y2 = 1.2
const zoom = 200 //Pour une distance de 1 sur le plan, on a 100 sur l'image
const iteration_max = 500

let image_x = (x2 - x1)*zoom
let image_y = (y2 - y1)*zoom

let c_r
let c_i
let z_r
let z_i
let i

for (let x = 0; x < image_x; x++) {
    for (let y = 0; y < image_y; y++) {

        c_r = (x / zoom) + x1
        c_i = (y / zoom) + y1
        z_r = 0
        z_i = 0
        i = 0

        do {
            let tmp = z_r
            z_r = (z_r*z_r) - (z_i*z_i) + c_r
            z_i = 2*z_i*tmp + c_i
            i = i+1
        } while ((z_r*z_r+z_i*z_i)<4 && i < iteration_max);

        if (i == iteration_max) {
            ctx.strokeStyle = 'rgb(0, 0, 0)';
            ctx.strokeRect(x, y, 1, 1);
        }   
    }   
}