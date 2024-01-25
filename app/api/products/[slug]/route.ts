import { NextRequest, NextResponse } from 'next/server'

import ProductsServices from '../services'


export async function GET(request: NextRequest, context: any) {
    let slug = context.params.slug
    
    return NextResponse.json({
        "result": ProductsServices.getBySlug(slug)
    })
}