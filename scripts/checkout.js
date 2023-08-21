const form = document.querySelector("#customerInfo");
const box = document.querySelector("#order-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const number = formData.get("number");
    const address = formData.get("address");

    console.log(name, number, address);

    setTimeout(() => {
        box.innerHTML = "";
        alert("1 sec : Your order has been placed");
        box.innerHTML = `
        <img src="https://cdn.dribbble.com/users/2015153/screenshots/7442124/media/97681cd6ef4e896e8df157b1d1bdca06.gif" alt="checked" />`;
    }, 1000);
    setTimeout(() => {
        box.innerHTML = "";
        alert("4 sec: Your order is Confirmed");
        box.innerHTML = `<img src="https://assets-v2.lottiefiles.com/a/b8df0d98-1189-11ee-80cf-8be00da02100/rfsoTCO2KY.gif" alt="loading"  style="width: 75%; height: 100vh;"/>`;
    },4000)
    setTimeout(() => {
        box.innerHTML = "";
        alert("8 sec: Your order is being Packed");
        box.innerHTML = `<img src="https://i.gifer.com/origin/0e/0ef02e4dedc32b87c71799c133cef346.gif" alt="loading"  style="width: 75%; height: 100vh;"/>`;
    },12000);
    setTimeout(() => {
        box.innerHTML = "";
        alert("12 sec: Your order is on the way");
        box.innerHTML = `<img src="https://cdn.dribbble.com/users/3232028/screenshots/17250321/media/642c6f61b195e721ee4582d5b574e220.gif" alt="loading"  style="width: 75%; height: 100vh;"/>`;
    },18000);
    setTimeout(() => {
        box.innerHTML = "";
        alert("24 sec: Your order has been Delivered");
        box.innerHTML = `<img src="https://assets-v2.lottiefiles.com/a/a90320b8-1174-11ee-9e7e-0b78e1c64b97/4XydPMBhYS.gif" alt="loading"  style="width: 75%; height: 100vh;"/>`;
    },24000);
    setTimeout(() => {
        box.innerHTML = "";
        box.innerHTML = `<img src="https://www.omahasteaks.com/gifs/email/post_trans_order_confirm_01.gif" alt="loading"  style="width: 100%;"/>`;
    }, 35000)
})