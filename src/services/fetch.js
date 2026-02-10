
export default async function fnPostAPI({
    url,
    method='POST',
    payload={},
}) {
    const data = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }
    let resposne = await fetch(url, data)
    resposne = resposne.json()
    return resposne
}
