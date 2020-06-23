const DescCtrl = {};

DescCtrl.getimg1 = async(req,res) => {
  res.download("src/images/fichaPago.jpg")
}
DescCtrl.getimg2 = async(req,res) => {
  res.download("src/images/ticketEntrada.PNG")
}

module.exports = DescCtrl;
