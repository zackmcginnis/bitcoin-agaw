const Bitcoin = require(`./bitcoin`)

const btc = new Bitcoin(`xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8`)

let count = 1


btc.generate(count++)
btc.generate(count++)
btc.generate(count++)
btc.generate(count++)
btc.generate(count++)
btc.generate(count++)
btc.generate(count++)
btc.generate(count++)