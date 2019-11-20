function letterCounter() {

    const alphabet = ['jakarta', 'bandung', 'bogor']
    const b = alphabet.map(s => s.length)
    const c = alphabet.filter(t => t.length > 5).length
    const d = alphabet.filter(t => t.length > 5)
    const e = alphabet.sort(b)

    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
}

letterCounter()