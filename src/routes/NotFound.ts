import { Component } from '../core/heropy'

export default class Headline extends Component {
  render() {
    this.el.classList.add('container', 'not-found')
    this.el.innerHTML = /* html */`
      <h1>
        404 Error!<br />
        Page Not Found!
      </h1>
    `
  }
}
