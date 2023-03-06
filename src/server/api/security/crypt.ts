import bcrypt from 'bcrypt'

async function encrypt(value: string) {
    const hash = await bcrypt.hash(value, 10)

    return hash
}

async function verify(value: string, hashValue: string) {
    const result = await bcrypt.compare(value, hashValue)

    return result
}

export {
    encrypt,
    verify
}