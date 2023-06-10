import { NextRequest, NextResponse } from 'next/server'
import { createUser } from "@/lib/user/create-user"
import { notFound, redirect } from 'next/navigation'
import { RedirectType } from 'next/dist/client/components/redirect'

export async function POST(request: NextRequest) {
    // const data = await request.json()
    // console.log(data)
    // const res = createUser({ name: "data.nam1e", email: "data.em1ail" })


    // return NextResponse.json({dupa : "dupa"})
// notFound();
    redirect('/chat')
    // redirect('../chat')
    // return NextResponse.json({dupa : 'dupa'})
    // return NextResponse.redirect('../chat')
}