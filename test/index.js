
var session = pl.create(1000);

session.consult("doge.pl");

session.query("init.");
// Find answers
session.answer(console.log);
