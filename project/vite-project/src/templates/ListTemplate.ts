import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();
    fullList.list.forEach((listItem) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "item";

      const check = document.createElement("input") as HTMLInputElement;
      check.type = "checkbox";
      check.id = listItem.id;
      check.addEventListener("change", () => {
        listItem.checked = !listItem.checked;
        fullList.save();
      });

      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = listItem.id;
      label.textContent = listItem.item;

      const button = document.createElement("button") as HTMLButtonElement;
      button.className = "button";
      button.textContent = "X";
      button.addEventListener("click", () => {
        fullList.removeItem(listItem.id);
        this.render(fullList);
      });

      li.append(check, label, button);
      this.ul.append(li);
    });
  }
}
