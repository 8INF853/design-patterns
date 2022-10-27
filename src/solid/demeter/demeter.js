class Voiture {
  constructor(moteur) {
    this.moteur = moteur
  }

  demarrer(cle) {
    ports = new Ports()
    autorise = cle.tourner()
    moteur.demarrer()
    misajourTableauDeBord()
    portes.verrouiller()
  }
  misajourTableauDeBord() {}
}