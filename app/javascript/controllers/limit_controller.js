import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "field", "output" ]
  static classes = [ "over" ]
  static values = {number: Number}

  change() {
    let length = this.fieldTarget.value.length
    this.outputTarget.textContent = `${length} characters`

    if (length > this.numberValue) {
        this.outputTarget.classList.add(this.overClass)
      } 
    else {
        this.outputTarget.classList.remove(this.overClass)
      }
  }
}