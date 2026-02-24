import { fnCheckSum } from '@/utils/@lib/checksum.js'

export async function fnAPIPostProxy(url, data, tokenAPI, keyAPI, isLocalhost, callback) {
    if (isLocalhost) {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "checksum": fnCheckSum(data),
                "Authorization": "Bearer " + tokenAPI,
                "key": keyAPI,
                "host_base_url": isLocalhost
            },
            body: JSON.stringify(data).replace(/'/g, "\\'\\'")
        })
        .then(async (response) => {
            const result = await response.json()

            if (!response.ok) {
                throw result
            }

            callback(null, result)
        })
        .catch((error) => {
            console.error(error)
            callback(error, null)
        })

    } else {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "checksum": fnCheckSum(data),
                "Authorization": "Bearer " + tokenAPI,
                "key": keyAPI
            },
            body: JSON.stringify(data).replace(/'/g, "\\'\\'")
        })
        .then(async (response) => {
            const result = await response.json()

            if (!response.ok) {
                throw result
            }

            callback(null, result)
        })
        .catch((error) => {
            console.error(error)
            callback(error, null)
        })
    }
}

/* Dynamic Url */
/*
 *  input  : 
 *     - host : 'http://192.168.0.2:8080/'
 *     - port : '8080'
 *  output : obj url path ex. apiproxy, pathclassic, pathdotnet
 *  
 */
function fnApiDynamicUrl(confHost, confPort) {
    const arrDomain = ['localhost', '192.168.0.2', '192.168.0.77', 'silkspan.online', '183.88.227.157', 'wfh1.sibwfh.com', '28080']
    if (
        arrDomain.includes(confHost)
        || ((confHost.indexOf('183.88.227.157') > -1 || confHost.indexOf('wfh1.sibwfh.com') > -1) 
            && 
            (confHost.indexOf(':28080') > -1 || confHost.indexOf(':20443') > -1 || confPort.indexOf('28443') > -1)
        )
    ) {
        return {
            apiDynamicUrl : "https://api.sibwfh.com:1880/dynamicurl",
            token : "ABC1234"
        }
    } else {
        return {
            apiDynamicUrl : "https://node.silkspan.com:1880/dynamicurl",
            token : "f39af39fffcdc094dee2db71cbf2b4bfe2a6b8ac03564559874e35e7909a2532"
        }
    }
}

/*export function fnApiNodeRedPostDynamicUrl(host, port, callback) {
    const apiDynamicUrl = fnApiDynamicUrl(host, port)
    console.log('apiDynamicUrl')
    console.log(apiDynamicUrl)
    const data = {
        host: host.replace('http:', 'https:'),
        urllist: ['urlclassic03', 'urldotnet03', 'urlclassic53', 'urldotnet53', 'urldotnetonline', 'urlclassic33', 'urlwordpress'],
        apilist: ['api', 'apibackend', 'apinavision', 'apibackendonline', 'apiproxy']

    };

    fetch(apiDynamicUrl.apiDynamicUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "dataType": "json",
            "Authorization": "Bearer " + apiDynamicUrl.token
        },
        body: JSON.stringify(data).replace(/'/g, "\\'\\'")
    })
    .then(async (response) => {
        const result = await response.json()
        console.log("result")
        console.log(result)

        if (!response.ok) {
            throw result
        }

        callback(null, result)
    })
    .catch((error) => {
        console.error(error)
        callback(error, null)
    })
}*/
export async function fnApiNodeRedPostDynamicUrl(host, port, callback) {
    const apiDynamicUrl = fnApiDynamicUrl(host, port)
    console.log('apiDynamicUrl')
    console.log(apiDynamicUrl)
    const data = {
        host: host.replace('http:', 'https:'),
        urllist: ['urlclassic03', 'urldotnet03', 'urlclassic53', 'urldotnet53', 'urldotnetonline', 'urlclassic33', 'urlwordpress'],
        apilist: ['api', 'apibackend', 'apinavision', 'apibackendonline', 'apiproxy']

    };

    let res = await fetch(apiDynamicUrl.apiDynamicUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "dataType": "json",
            "Authorization": "Bearer " + apiDynamicUrl.token
        },
        body: JSON.stringify(data).replace(/'/g, "\\'\\'")
    })
    res = await res.json()
    return res
}
/* Dynamic Url */