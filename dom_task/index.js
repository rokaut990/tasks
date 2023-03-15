document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  // ваш код поместить тут

  //1
  function isParent(elem1, elem2) {
    return elem2.parentNode == elem1 ? true : false;
    //return elem1.compareDocumentPosition(elem2) == 16 || elem1.compareDocumentPosition(elem2) == 20 ? true : false;
  }
  
  console.log( isParent(document.body, document.body.firstChild) )
  
  //2
  console.log(document.body.firstChild)
  console.log(document.querySelector('ul').previousElementSibling)

  //3
  console.log(document.querySelector('p').textContent)

  //4
  function nodeInfo(node) {
    //console.dir( node );
    console.log(node.nodeType, node.nodeName, node.childNodes)
  }

  console.log( nodeInfo(document.body) )


  //5
  document.querySelector('ul').classList.add('list')


});