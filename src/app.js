import Hello from './hello'

(new Hello({
  target: document.getElementsByTagName('main')[0]
})).run();
