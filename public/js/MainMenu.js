'use strict';

PhaserGame.MainMenu = {
  create: function create() {
    this.createScale();
    this.createSplashScreen();
    this.createBackgroundMusic();
    game.input.onDown.addOnce(this.start, this);
  },
  createScale: function createScale() {
    this.scale = 1;
    if (window.innerWidth < 1024 || window.innerHeight < 768) {
      if (window.innerWidth / 1024 > window.innerHeight / 768) {
        this.scale = window.innerHeight / 768;
      } else {
        this.scale = window.innerWidth / 1024;
      }
    }
  },
  createSplashScreen: function createSplashScreen() {
    var _this = this;

    var map = this.add.tilemap('title');
    map.addTilesetImage('terrain_atlas', 'terrain');
    map.addTilesetImage('15_tank_set 68x68', 'tanks');
    var layers = ['Rock', 'Fire', 'Sand', 'Grass', '11Tanks'];
    layers.forEach(function (layer) {
      var thisLayer = map.createLayer(layer);
      thisLayer.scale.set(_this.scale);
    });
  },
  createBackgroundMusic: function createBackgroundMusic() {
    this.menuBackgroundMusic = game.add.audio('menuBackgroundMusic');
    this.menuBackgroundMusic.play('', 0, 0.1);
  },
  start: function start() {
    this.menuBackgroundMusic.stop();
    game.state.start('Game');
  }
};

game.state.add('MainMenu', PhaserGame.MainMenu);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9NYWluTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFVBQVUsQ0FBQyxRQUFRLEdBQUc7QUFDcEIsUUFBTSxFQUFBLGtCQUFHO0FBQ1AsUUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25CLFFBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzFCLFFBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQzdCLFFBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQzdDO0FBQ0QsYUFBVyxFQUFBLHVCQUFHO0FBQ1osUUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZixRQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFO0FBQ3hELFVBQUksQUFBQyxNQUFNLENBQUMsVUFBVSxHQUFDLElBQUksR0FBSyxNQUFNLENBQUMsV0FBVyxHQUFDLEdBQUcsQUFBQyxFQUFFO0FBQ3ZELFlBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBQyxHQUFHLENBQUM7T0FDckMsTUFBTTtBQUNMLFlBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUM7T0FDckM7S0FDRjtHQUNGO0FBQ0Qsb0JBQWtCLEVBQUEsOEJBQUc7OztBQUNuQixRQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0QyxPQUFHLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNoRCxPQUFHLENBQUMsZUFBZSxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELFFBQUksTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzFELFVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLLEVBQUk7QUFDdEIsVUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QyxlQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFLLEtBQUssQ0FBQyxDQUFDO0tBQ2pDLENBQUMsQ0FBQztHQUNKO0FBQ0QsdUJBQXFCLEVBQUEsaUNBQUc7QUFDdEIsUUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDakUsUUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0dBQzNDO0FBQ0QsT0FBSyxFQUFBLGlCQUFHO0FBQ04sUUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hDLFFBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQzFCO0NBQ0YsQ0FBQzs7QUFFRixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDIiwiZmlsZSI6Ik1haW5NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUGhhc2VyR2FtZS5NYWluTWVudSA9IHtcbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuY3JlYXRlU2NhbGUoKTtcbiAgICB0aGlzLmNyZWF0ZVNwbGFzaFNjcmVlbigpO1xuICAgIHRoaXMuY3JlYXRlQmFja2dyb3VuZE11c2ljKCk7XG4gICAgZ2FtZS5pbnB1dC5vbkRvd24uYWRkT25jZSh0aGlzLnN0YXJ0LCB0aGlzKTtcbiAgfSxcbiAgY3JlYXRlU2NhbGUoKSB7XG4gICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQgPCA3NjgpIHtcbiAgICAgIGlmICgod2luZG93LmlubmVyV2lkdGgvMTAyNCkgPiAod2luZG93LmlubmVySGVpZ2h0Lzc2OCkpIHtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHdpbmRvdy5pbm5lckhlaWdodC83Njg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNjYWxlID0gd2luZG93LmlubmVyV2lkdGgvMTAyNDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZVNwbGFzaFNjcmVlbigpIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLmFkZC50aWxlbWFwKCd0aXRsZScpO1xuICAgIG1hcC5hZGRUaWxlc2V0SW1hZ2UoJ3RlcnJhaW5fYXRsYXMnLCAndGVycmFpbicpO1xuICAgIG1hcC5hZGRUaWxlc2V0SW1hZ2UoJzE1X3Rhbmtfc2V0IDY4eDY4JywgJ3RhbmtzJyk7XG4gICAgbGV0IGxheWVycyA9IFsnUm9jaycsICdGaXJlJywgJ1NhbmQnLCAnR3Jhc3MnLCAnMTFUYW5rcyddO1xuICAgIGxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgIGxldCB0aGlzTGF5ZXIgPSBtYXAuY3JlYXRlTGF5ZXIobGF5ZXIpO1xuICAgICAgdGhpc0xheWVyLnNjYWxlLnNldCh0aGlzLnNjYWxlKTtcbiAgICB9KTtcbiAgfSxcbiAgY3JlYXRlQmFja2dyb3VuZE11c2ljKCkge1xuICAgIHRoaXMubWVudUJhY2tncm91bmRNdXNpYyA9IGdhbWUuYWRkLmF1ZGlvKCdtZW51QmFja2dyb3VuZE11c2ljJyk7XG4gICAgdGhpcy5tZW51QmFja2dyb3VuZE11c2ljLnBsYXkoJycsIDAsIDAuMSk7XG4gIH0sXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMubWVudUJhY2tncm91bmRNdXNpYy5zdG9wKCk7XG4gICAgZ2FtZS5zdGF0ZS5zdGFydCgnR2FtZScpO1xuICB9XG59O1xuXG5nYW1lLnN0YXRlLmFkZCgnTWFpbk1lbnUnLCBQaGFzZXJHYW1lLk1haW5NZW51KTsiXX0=
