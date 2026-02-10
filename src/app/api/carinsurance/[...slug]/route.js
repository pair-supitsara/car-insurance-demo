import { NextResponse } from 'next/server'
import business from '../business/business.js'

export async function GET( params ) {
    return NextResponse.json({
        users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        ],
    })
}

export async function POST(req, { params }) {
    console.log('🔥 POST HIT')   // ต้องขึ้นแน่
    const { slug } = await params
    const action = slug?.[0]
    const body = await req.json()

    if (action == 'fngetuserinfo') {
        return NextResponse.json({
            data: await business.bfnGetuserinfo()
        })        
    }

    return NextResponse.json({ message: 'Not Found' }, { status: 404 })
}