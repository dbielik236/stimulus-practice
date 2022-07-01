
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "hideable", "showable", "text" ]
  static classes = [ "highlight" ]

  swapTargets() {
    this.hideableTarget.hidden = true
    this.showableTarget.hidden = false
  }

  hideTargets() {
    this.hideableTarget.hidden = true
    
  }

  toggleTargets() {
    this.hideableTarget.hidden = !this.hideableTarget.hidden

  }

  highlightTargets() {
    this.textTarget.classList.add(this.highlightClass)
  }

}