

var click = 0;
var modulo;

function mostrar() {
  // document.getElementById('menu-movil').style.display = 'block';
  click++;
  modulo = click % 2;
  console.log(modulo);

  if( modulo == 0) {
    document.getElementById('menu-movil').style.display = 'none';
  }

  else

  if  ( modulo > 0 ) {
      document.getElementById('menu-movil').style.display = 'block';
    }


}

function ocultar() {
  document.getElementById('menu-movil').style.display = 'none';
  click++;
}
