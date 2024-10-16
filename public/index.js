
function createQuoteCard(quote, author) {

  let quoteCard =
  `<section class="quote-card">
    <div>
        “${quote}”
    </div>
    <div class="author">
        <i>Author -- ${author}</i>
    </div>
</section>`

  // let quoteCard = Handlebars.templates.quoteCard({
  //   quote: quote,
  //   author: author
  // })

  return quoteCard;
}


function handleModalAcceptClick() {

  var quoteAuthor = document.getElementById('quote-author-input').value.trim();
  var quoteText = document.getElementById('quote-text-input').value.trim();

  if (!quoteAuthor || !quoteText) {
    alert("You must fill in all of the fields!");
  } else {
    var newQuoteCard = createQuoteCard(quoteAuthor, quoteText);
    var quoteCardContainer = document.querySelector('.quote-card-container');
    quoteCardContainer.insertAdjacentHTML("beforeend", newQuoteCard)
    hideModal();
  }
}


function showModal() {

  var modal = document.getElementById('add-quote-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  modal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');

}


function clearModalInputs() {

  var modalInputElements = document.querySelectorAll('#add-quote-modal input')
  for (var i = 0; i < modalInputElements.length; i++) {
    modalInputElements[i].value = '';
  }

}


function hideModal() {

  var modal = document.getElementById('add-quote-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  modal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');

  clearModalInputs();

}


/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
window.addEventListener('DOMContentLoaded', function () {

  var addQuoteButton = document.getElementById('add-quote-button');
  addQuoteButton.addEventListener('click', showModal);

  var modalAcceptButton = document.getElementById('modal-accept');
  modalAcceptButton.addEventListener('click', handleModalAcceptClick);

  var modalHideButtons = document.getElementsByClassName('modal-hide-button');
  for (var i = 0; i < modalHideButtons.length; i++) {
    modalHideButtons[i].addEventListener('click', hideModal);
  }

});