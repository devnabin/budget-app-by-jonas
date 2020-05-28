let Budgetcontroller = (function () {
  
})();

let Uicontroller = (function () {
  let DomString = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",

    okBut: ".add__btn",
  };

  return {
    getdata: function () {
      return {
        type: document.querySelector(DomString.inputType).value, //will be either inc or exp
        description: document.querySelector(DomString.inputDescription).value,
        value: document.querySelector(DomString.inputValue).value,
      };
    },

    DomString: function () {
      return DomString;
    },
  };
})();

let Controller = (function (budgetControl, uiControl) {

    function doEvent() {
    // 1 Get the fill inpute data
    let input = uiControl.getdata();
  

    // 2 Add the iteam to the budget controller

    // 3 Add the item to the UI

    // 4 Calculate the budget

    // 5 Display the budget to the Ui
  }



  let activateEvent = function () {
    let Dom = uiControl.DomString();
    document.querySelector(Dom.okBut).addEventListener("click", doEvent);
    document.addEventListener("keypress", (event) => {
      if (event.keyCode === 13 || event.which == 13) {
        doEvent();
      }
    });
  };



  return {
    activate: activateEvent,
  };


})(Budgetcontroller, Uicontroller);


Controller.activate();
