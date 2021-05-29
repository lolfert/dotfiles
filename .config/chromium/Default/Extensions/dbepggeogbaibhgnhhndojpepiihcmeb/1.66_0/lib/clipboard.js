// Generated by CoffeeScript 1.12.7
(function() {
  var Clipboard, root;

  Clipboard = {
    _createTextArea: function(tagName) {
      var textArea;
      if (tagName == null) {
        tagName = "textarea";
      }
      textArea = document.createElement(tagName);
      textArea.style.position = "absolute";
      textArea.style.left = "-100%";
      textArea.contentEditable = "true";
      return textArea;
    },
    copy: function(arg) {
      var data, textArea;
      data = arg.data;
      textArea = this._createTextArea();
      textArea.value = data.replace(/\xa0/g, " ");
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      return document.body.removeChild(textArea);
    },
    paste: function() {
      var textArea, value;
      textArea = this._createTextArea("div");
      document.body.appendChild(textArea);
      textArea.focus();
      document.execCommand("Paste");
      value = textArea.innerText;
      document.body.removeChild(textArea);
      return value.replace(/\xa0/g, " ");
    }
  };

  root = typeof exports !== "undefined" && exports !== null ? exports : (window.root != null ? window.root : window.root = {});

  root.Clipboard = Clipboard;

  if (typeof exports === "undefined" || exports === null) {
    extend(window, root);
  }

}).call(this);