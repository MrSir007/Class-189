AFRAME.registerComponent("target-coin", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `coin${i}`;

      //position variables
      var posX = Math.random() * 3000 + -1000;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 3000 + -1000;

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createCoins(id, position);
    }
  },

  createCoins: function (id, position) {
    var terrainEl = document.querySelector("#terrain");
    var coinEl = document.createElement("a-entity");

    coinEl.setAttribute("id", id);
    coinEl.setAttribute("material", "color", "yellow");
    coinEl.setAttribute("position", position);
    coinEl.setAttribute("geometry", { primitive: "cylinder", radius: 8, height: 1 });

    //set the static body attribute of physics system
    coinEl.setAttribute("static-body", {
      shape: "cylinder",
      cylinderRadius: 8,
      cylinderHeight: 1
    });

    coinEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    terrainEl.appendChild(coinEl);
  },
});
