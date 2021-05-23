const info = {
    history: "orem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus iusto quos explicabo voluptas repudiandae, tempore delectus rerum expedita quae harusto quos explicabo voluptas repudiandae, tempore delectus rerum expedita quae harum quisquam et quo rem porro libero ea dolore, cum odi",
    vision: " amet consectetur adipisicing elit. Accusamus iusto quos explicabo voluptas repudiandae, tempore delectus rerum expedita quae harum quisquam et quo rem porro libero ea dolore, cum odi",
    goals: "orem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus iusto quos explicabo voluptas repudiandae, tempore delectus rerum expedita quae harum quisquam et quo rem porro libero ea dolor"
};

let forChangeEl = document.getElementById("for-change");
let btns = document.querySelectorAll("#btn-container button");
let prev = btns[0];

changeInfo(btns[0].id);

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        prev.classList.remove("active");
        btn.classList.add("active");
        prev = btn;
        changeInfo(btn.id);
    })
});


function changeInfo(id) {
    forChangeEl.querySelector("h4").textContent = id;
    forChangeEl.querySelector("p").textContent = info[id];
}
