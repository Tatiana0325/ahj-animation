export default class Model {
  constructor(container) {
    this.container = container;
  }

  start() {
    this.createCollapse();
    this.createCallbackChat();
    this.createLike();
  }

  createCollapse() {
    const cont = document.createElement("div");
    cont.classList.add("collapse-container");

    const btn = document.createElement("button");
    btn.classList.add("btn-collapse");
    btn.classList.add("collapsed");
    btn.textContent = "Collapse";

    const textCont = document.createElement("div");
    textCont.classList.add("text-container");

    const textCol = document.createElement("div");
    textCol.classList.add("text-collapse");
    textCol.textContent = `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
		Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.`;

    const textCopy = document.createElement("div");
    textCopy.classList.add("copy");
    textCopy.textContent = "Copy";

    textCont.appendChild(textCol);
    cont.appendChild(btn);
    cont.appendChild(textCont);
    cont.appendChild(textCopy);

    this.container.insertAdjacentElement("beforeend", cont);

    btn.addEventListener("click", (event) => {
      event.preventDefault();

      btn.classList.toggle("collapsed");

      if (btn.classList.contains("collapsed")) {
        textCont.classList.remove("show");
      } else {
        textCont.classList.add("show");
      }
    });
  }

  createCallbackChat() {
    const contChat = document.createElement("div");
    contChat.classList.add("callback-container");
    contChat.innerHTML = `
			<div class="btn-callback-chat active"></div>
		`;

    this.container.insertAdjacentElement("beforeend", contChat);

    const btn = contChat.querySelector(".btn-callback-chat");

    btn.addEventListener("click", (event) => {
      this.createFormChat(btn);
    });
  }

  createFormChat(btn) {
    const chat = document.createElement("div");
    chat.classList.add("chat-container");
    chat.innerHTML = `	
			<form class="chat-form">
				<div class="title-form>
					<h3 class="chat-title">Напишите нам</h3>

					<button type="reset" class="btn-close">X</button>
				</div>

				<textarea name="comment" class="chat-text" rows="10"></textarea>

				<button type="submit" class="chat-button">Отправить</button>
			</form>`;

    const clCont = this.container.querySelector(".callback-container");

    clCont.insertAdjacentElement("afterbegin", chat);

    this.showForm(chat, btn);

    chat.addEventListener("submit", (event) => {
      event.preventDefault();

      this.closeForm(chat, btn, clCont);
    });

    chat.addEventListener("reset", (event) => {
      event.preventDefault();

      this.closeForm(chat, btn, clCont);
    });
  }

  showForm(el, btn) {
    btn.classList.remove("active");
    btn.classList.add("hidden");
    el.classList.remove("hidden");
    el.classList.add("active");
  }

  closeForm(el, btn, cont) {
    el.classList.remove("active");
    el.classList.add("hidden");
    cont.removeChild(el);
    btn.classList.remove("hidden");
    btn.classList.add("active");
  }

  createLike() {
    const contLike = document.createElement("div");
    contLike.classList.add("like-container");
    const btnLike = document.createElement("button");
    btnLike.classList.add("btn-like");
    btnLike.textContent = "Like";

    contLike.appendChild(btnLike);

    this.container.insertAdjacentElement("beforeend", contLike);

    btnLike.addEventListener("click", (event) => {
      event.preventDefault();

      const heart = document.createElement("img");
      heart.src = "../img/heart.png";
      heart.classList.add("heart");

      contLike.appendChild(heart);

      const random = Math.floor(Math.random() * 4) + 1;

      let animationClass = null;

      switch (random) {
        case 1:
          animationClass = "heart-anim_1";
          break;
        case 2:
          animationClass = "heart-anim_2";
          break;
        case 3:
          animationClass = "heart-anim_3";
          break;
        case 4:
          animationClass = "heart-anim_4";
          break;
        default:
          animationClass = "heart-anim_1";
          break;
      }

      heart.classList.add(animationClass);

      heart.addEventListener("animationend", () => {
        heart.remove();
      });
    });
  }
}
